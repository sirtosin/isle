"use client";
import { useMutation } from "@tanstack/react-query";
import { Toast } from "../components/Toast";
import { useAppDispatch } from "../redux/hook";
import { login } from "../redux/userSlice";
import { postApi } from "../services";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useEffect } from "react";
// import { LoginType } from '../typings/login'
// import { LoginSchema } from '../schema/login'

export const useSignUpQuery = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const defaultValue = {
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    code: "",
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
      submitHandler()
    },
  });

  const submitHandler = (e?: React.FormEvent) => {
    e?.preventDefault();
      mutate();
    
  };

  const payload: any = {
    email: values.email?.toLowerCase()?.trim(),
    password: values.password?.trim(),
    cpassword: values.cpassword?.trim(),
    code: values.code?.trim(),
    phone: values.phone,
  };

  const { mutate } = useMutation({
    mutationFn: () => postApi(`users`, payload),
    onSuccess: (data) => {
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false });

      handleReset(payload);

      data.responseData.role !== "SuperAdmin"
        ? navigate.push("/dashboard")
        : navigate.push("/dashboard/add");

      dispatch(login(null));
      localStorage.setItem("auth", data.responseData?.token);

      setSubmitting(false);
    },
    onError: (error) => {
      console.log("there was an error", error);
    },
  });

  const getOtp = async() => {
    const res = await postApi('otp/generate',{email:values.email})
  }

  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    getOtp,
  };
};
