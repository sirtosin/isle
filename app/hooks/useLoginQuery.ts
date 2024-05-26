"use client";
import { useMutation } from "@tanstack/react-query";
import { Toast } from "../components/Toast";
import { useAppDispatch } from "../redux/hook";
import { login } from "../redux/userSlice";
import { postApi, putApi } from "../services";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
// import { LoginType } from '../typings/login'
// import { LoginSchema } from '../schema/login'

export const useLoginQuery = () => {
  const dispatch = useAppDispatch();
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [view, setView] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const [modal, setModal] = useState(false);
  const defaultValue = {
    phone: "",
    password: "",
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
    phone: `234${values.phone?.toString()?.substring(0)}`,
    password: values.password?.trim(),
  };

  const { mutate } = useMutation({
    mutationFn: () => postApi(`users/signin`, payload),
    onSuccess: (data) => {
      !data.success
        ? Toast({ title: data.response?.data?.error, error: true })
        : Toast({ title: "Login Successful", error: false });
      handleReset(payload);
      if (data.success) {
        navigate.push("/home");
        dispatch(login(data.profile));
        localStorage.setItem("auth", data?.token);
      }
      setSubmitting(false);
    },
    onError: (error) => {
      console.log("there was an error", error);
    },
  });
  const getOtp = async () => {
    const res = await postApi("otp/generate", { email: values.email });
  };
  const validateOtp = async () => {
    setLoading(true);
    const res = await postApi("otp/validate", {
      email: values.email,
      otp: otp?.join(""),
    });
    setView(2);
    setLoading(false);
  };
  const resetPassword = async () => {
    const payload = {
      code: otp?.join(""),
      newPassword: values.password,
    };
    const res = await putApi(`users/reset-password`, payload);
  };
  useEffect(() => {
    otp?.join("")?.length === 6 && validateOtp();
  }, [otp?.join("")]);
  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    getOtp,
    otp,
    modal,
    setModal,
    setOtp,
    view,
    setView,
    loading,
    validateOtp,
    resetPassword,
    length,
  };
};
