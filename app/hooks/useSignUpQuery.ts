"use client";
import { useMutation } from "@tanstack/react-query";
import { Toast } from "../components/Toast";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { login, logout } from "../redux/userSlice";
import { getApi, postApi } from "../services";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
// import { LoginType } from '../typings/login'
// import { LoginSchema } from '../schema/login'

export const useSignUpQuery = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [view, setView] = useState(1);
  const [loading2, setLoading2] = useState(false);
  const length = 6;
  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState(Array(length).fill(""));
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [tables, setTables] = useState([]);
  const [tableId, setTableId] = useState({});
  const defaultValue = {
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    name: "",
    table: "",
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: defaultValue,
    validationSchema: "",
    onSubmit: (values: any) => {
      submitHandler();
    },
  });

  const submitHandler = (e?: React.FormEvent) => {
    e?.preventDefault();
    mutate();
  };

  const payload: any = {
    email: values.email?.toLowerCase()?.trim(),
    password: values.password?.trim(),
    name: values.name?.trim(),
    role: "user",
    phone: `234${values.phone?.toString()}`,
    tableId: values.table,
  };

  const { mutate } = useMutation({
    mutationFn: () => postApi(`users`, payload),
    onSuccess: (data) => {
      //  Toast({ title: data.responseMessage, error: true });
      console.log("data", data);
      handleReset(payload);
      setModal(true);
      dispatch(login(data?.data));
      localStorage.setItem("auth", data?.data.token);

      setSubmitting(false);
    },
    onError: (error) => {
      console.log("there was an error", error);
    },
  });

  const getOtp = async () => {
    setLoading2(true);

    const payload = {
      email: values.email,
      phone: `234${values.phone?.toString()}`,
    };
    const res = await postApi("otp/generate", payload);
    if (res?.response?.data?.message) {
      Toast({ title: res.response.data.message, error: true });
      setLoading2(false);
      setView(0);
      return;
    } else {
      setView(1);
      setLoading2(false);
      Toast({ title: res?.message, error: false });
    }
  };
  const validateOtp = async () => {
    if (otp?.join("")?.length === 6) {
      setLoading(true);
      const res = await postApi("otp/validate", {
        email: values.email,
        otp: otp?.join(""),
      });
      if (res.message === "Otp validation is successful") {
        Toast({ title: res.message, error: false });
        setLoading(false);
        setView(2);
        return;
      }
      Toast({ title: res.response?.data?.message, error: true });
      setLoading(false);
    }

  };
  const getTables = async () => {
    const res = await getApi("tables");
    setTables(res);
  };
  const getTableID = async () => {
    const res = await getApi("tables");
    const findTable = res.filter((item: any) => item._id === user?.table);
    setTableId(findTable[0]?.alias);
  };

  const handleLogout = () => {
    navigate.push("/login");
    dispatch(logout());
  };
  useEffect(() => {
    getTables();
  }, []);
  useEffect(() => {
    user?.table && getTableID();
  }, [user?.table]);
  useEffect(() => {
    otp?.join("")?.length === 6 && validateOtp();
  }, [otp?.join("")]);
  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    validateOtp,
    errors,
    isSubmitting,
    getOtp,
    tables,
    loading,
    setOtp,
    view,
    setView,
    setModal,
    modal,
    otp,
    length,
    tableId,
    handleLogout,
    loading2,
  };
};
