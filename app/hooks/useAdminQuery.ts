'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { deleteApi, getApi, postApi, putApi } from '../services'
import { useFormik } from 'formik'
import { Toast } from '../components/Toast'
// import { CreateStaffType } from '../typings/staff'
// import { StaffSchema } from '../schema/staff'
import { useStateContext } from '../context/context'

export default function useAdminQuery() {
  const [role, setRole] = useState('')
  const [staff, setStaff] = useState<any>('')
  const [selectedStaff, setSelectedStaff] = useState<any>('')
  const [loading, setLoading] = useState(false)
  const [inputText, setInputText] = useState('')
  const deferedValue = useDeferredValue(inputText)
  const { editData, edit, setEdit, title } = useStateContext()
  const handleDeleteModal = () => {
    setEdit((prev: boolean) => !prev)
    // window.scrollTo(0, 0);
  }
  const getAllStaff = async () => {
    const resp = await getApi(`/Auth/GetAllStaff`)
    return resp.responseData
  }
  const getAllUser = async () => {
    const resp = await getApi(`/Auth/Users`)
    return resp.responseData
  }
  const getAllUserCount = async () => {
    const resp = await getApi(`/Auth/UserCount`)
    return resp.responseData
  }
  const getAllRole = async () => {
    const resp = await getApi(`/Auth/role/GetRoles`)
    return resp.responseData.sort(
      (objA: any, objB: any) =>
        Number(new Date(objB.dateCreated)) - Number(new Date(objA.dateCreated))
    )
  }

  const handleRole = async (type?: string) => {
    setLoading(true)
    const func = type
      ? putApi(`/Auth/role/UpdateRoleName/${type}`, {
          name: role
        })
      : postApi('/Auth/Role/CreateAdminRole', {
          name: role
        })
    const resp = await func
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
    setRole('')
  }
  const deleteRole = async (type?: string) => {
    setLoading(true)
    const resp = await deleteApi(`/Auth/role/Delete/${type}`)
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
  }
  const changeRole = async (item: any) => {
    setLoading(true)
    const resp = await putApi(`/Auth/UserRole/`, {
      userId: item?.id,
      roleId: role
    })
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
  }
  const disableUser = async (type?: string) => {
    setLoading(true)
    const resp = await putApi(`/Auth/DisableUser/${type}`)
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
  }
  const enableUser = async (type?: string) => {
    setLoading(true)
    const resp = await putApi(`/Auth/EnableUser/${type}`)
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
  }

  const defaultValue = {
    user: null,
    roleId: ''
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
    validationSchema: 'StaffSchema',
    onSubmit: (values: any) => {
      mutate()
      // handleReset(values)
    }
  })
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }
  const payload: any = {
    firstName: selectedStaff?.employeeName?.split(' ')[0],
    lastName: selectedStaff?.employeeName?.split(' ')[1],
    emailAddress: selectedStaff?.email,
    location: selectedStaff?.branch,
    roleId: values.roleId
  }
  const { mutate } = useMutation({
    mutationFn: () => postApi(`/Auth/CreateUser`, payload),
    onSuccess: (data) => {
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false })
      setSubmitting(false)
    },
    onError: (error) => {
      console.log('there was an error', error)
    }
  })
  const userCount = useQuery({
    queryKey: ['userCount'],
    queryFn: getAllUserCount,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      console.log('rolef', data)
      //   Toast({ title: "page refreshed", error: false });
    },
    onError: (error: any) => console.error(error)
  })
  const allRole = useQuery({
    queryKey: ['role'],
    queryFn: getAllRole,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      console.log('rolef', data)
      //   Toast({ title: "page refreshed", error: false });
    },
    onError: (error: any) => console.error(error)
  })
  const allStaff = useQuery({
    queryKey: ['staff'],
    queryFn: getAllStaff,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      //   console.log('role', data)
      //   Toast({ title: "page refreshed", error: false });
    },
    onError: (error: any) => console.error(error)
  })
  const allUser = useQuery({
    queryKey: ['user'],
    queryFn: getAllUser,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      console.log('user', data)
      //   Toast({ title: "page refreshed", error: false });
    },
    onError: (error: any) => console.error(error)
  })
  const allUserSearch = useMemo(
    () =>
      deferedValue
        ? allUser?.data?.filter(
            (item: any) =>
              item?.firstName
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.lastName
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.emailAddress
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) 
          )
        : allUser?.data,
    [deferedValue, allUser?.data]
  )
  const [result, setResult] = useState([])

  useEffect(() => {
    const arr: any = []
    allStaff?.data?.length > 0 &&
      allStaff.data?.forEach((employeeName: any) => {
        arr.push({
          value: employeeName?.employeeName,
          label: `${employeeName?.employeeName}`
        })
        setResult(arr)
      })
  }, [allStaff?.data?.length])

  useEffect(() => {
    if (staff.value) {
      const selectedStaff = allStaff.data.filter(
        (item: any) => item.employeeName === staff.value
      )
      setSelectedStaff(selectedStaff[0])
    }
  }, [staff.value])

  return {
    allStaff,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    submitHandler,
    allRole,
    allUser,
    setRole,
    role,
    handleRole,
    loading,
    setInputText,
    allUserSearch,
    inputText,
    result,
    setStaff,
    staff,
    userCount,
    editData,
    deleteRole,
    edit,
    handleDeleteModal,
    title,
    disableUser,
    enableUser,
    changeRole
  }
}
