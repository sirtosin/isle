'use client'
import { useMutation } from '@tanstack/react-query'
import { Toast } from '../components/Toast'
import { useAppDispatch } from '../redux/hook'
import { login } from '../redux/userSlice'
import { postApi } from '../services'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
// import { LoginType } from '../typings/login'
// import { LoginSchema } from '../schema/login'

export const useLoginQuery = () => {
  const dispatch = useAppDispatch()
  const navigate = useRouter()

  const defaultValue = {
    email: '',
    password: ''
  }
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting,
    setSubmitting
  } = useFormik({
    initialValues: defaultValue,
    validationSchema: '',
    onSubmit: (values: any) => {
      mutate()
    }
  })

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }

  const payload: any = {
    email: values.email?.toLowerCase()?.trim(),
    password: values.password?.trim()
  }

  const { mutate } = useMutation({
    mutationFn: () => postApi(`/Auth/Login`, payload),
    onSuccess: (data) => {
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false })
      if (data.responseData?.role) {
        handleReset(payload)
        const user: any = {
          firstName: data.responseData?.firstName,
          role: data.responseData?.role,
          lastName: data.responseData?.lastName,
          emailAddress: data.responseData?.emailAddress
        }
        data.responseData.role !== 'SuperAdmin'
          ? navigate.push('/dashboard')
          : navigate.push('/dashboard/add')

        dispatch(login(user))
        localStorage.setItem('auth', data.responseData?.token)
      }
      setSubmitting(false)
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
