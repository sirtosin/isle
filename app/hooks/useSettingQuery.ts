'use client'
import { useMutation } from '@tanstack/react-query'
import { Toast } from '../components/Toast'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { postApi } from '../services'
import { useFormik } from 'formik'
// import { ChangePasswordType } from '../typings/login'
// import { ChangePasswordSchema } from '../schema/login'
import { useState } from 'react'

export const useSettingQuery = () => {
  const [modal, setModal] = useState(false)
  const handleModal = () => setModal((prev) => !prev)
  const user = useAppSelector((state) => state?.user?.user)

  const defaultValue = {
    password: '',
    npassword: '',
    cpassword: ''
  }
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting
  } = useFormik({
    initialValues: defaultValue,
    validationSchema: 'ChangePasswordSchema',
    onSubmit: (values: any) => {
      mutate()
    }
  })

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }
  const payload: any = {
    oldPassword: values.password?.trim(),
    newPassword: values.npassword?.trim(),
    confirmPassword: values.cpassword?.trim()
  }

  const { mutate } = useMutation({
    mutationFn: () => postApi(`/Auth/ChangePassword`, payload),
    onSuccess: (data) => {
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false })
    },
    onError: (error) => {
      console.log('there was an error', error)
    }
  })

  return {
    submitHandler,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    user,
    handleModal,
    modal
  }
}
