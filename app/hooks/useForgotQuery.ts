'use client'
import { useMutation } from '@tanstack/react-query'
import { Toast } from '../components/Toast'
import { putApi } from '../services'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
// import { ForgotType } from '../typings/login'
// import { forgotSchema } from '../schema/login'

export const useForgotQuery = () => {
  const navigate = useRouter()
  const defaultValue = {
    email: ''
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
    validationSchema: 'forgotSchema',
    onSubmit: (values: any) => {
      mutate()
    }
  })

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }

  const payload: any = {
    email: values.email?.toLowerCase()?.trim()
  }

  const { mutate } = useMutation({
    mutationFn: () => putApi(`users/reset-password`, payload),
    onSuccess: (data) => {
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false })
      handleReset(payload)
      navigate.push('/')
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
    isSubmitting
  }
}
