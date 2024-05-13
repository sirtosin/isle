'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Toast } from '../components/Toast'
import { getApi, postApi, putApi } from '../services'
import { useFormik } from 'formik'
// import { MenuType } from '../typings/menu'
// import { MenuSchema } from '../schema/menu'
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { useStateContext } from '../context/context'

export const useMenuQuery = () => {
  const { editData, requestListById, setRequestListById } = useStateContext()
  const [reworkComment, setReworkComment] = useState(editData?.requestComment)
  const [loading2, setLoading2] = useState(false)
  const [inputText, setInputText] = useState('')
  const deferedValue = useDeferredValue(inputText)
  const [base64String, setBase64String] = useState('')
  const getRequestById = async () => {
    const resp = await getApi(`/Request/RequestByUser`)
    return resp.responseData.sort(
      (objA: any, objB: any) =>
        Number(new Date(objB.dateCreated)) - Number(new Date(objA.dateCreated))
    )
  }
  const requestById = useQuery({
    queryKey: ['requestById'],
    queryFn: getRequestById,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      //   Toast({ title: "page refreshed", error: false });
    },
    onError: (error: any) => console.error(error)
  })
  const myRequestSearch = useMemo(
    () =>
      deferedValue
        ? requestById?.data?.filter(
            (item: any) =>
              item?.requestPurpose
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.requestComment
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.status
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.comment
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim())
          )
        : requestById?.data,
    [deferedValue, requestById?.data]
  )
  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      const base64 = reader?.result?.split(',')[1]
      setBase64String(base64)
    }

    reader.readAsDataURL(file)
  }
  const defaultValue = {
    comment: '',
    requestPurpose: ''
  }
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting
  } = useFormik<MenuType>({
    initialValues: defaultValue,
    validationSchema: MenuSchema,
    onSubmit: (values: any) => {
      mutate()
    }
  })

  const submitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
  }
  const payload: any = {
    purposeId: values.requestPurpose,
    comment: values.comment,
    fileUrl: base64String
  }
  const { mutate } = useMutation({
    mutationFn: () => postApi(`/Request/CreateRequest`, payload),
    onSuccess: (data) => {
      handleReset(payload)
      data.responseCode !== 200
        ? Toast({ title: data.responseMessage, error: true })
        : Toast({ title: data.responseMessage, error: false })
    },
    onError: (error) => {
      console.log('there was an error', error)
    }
  })
  const handleRework = async (data: any) => {
    // setEdit((prev: boolean) => !prev);
    // setTitle('View detail')
    setLoading2(true)
    const payload = {
      purposeId: data.purposeId,
      requestId: data.requestId,
      comment: reworkComment,
      fileUrl: base64String
    }
    const resp = await putApi(`/Request/ReworkRequest`, payload)
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    getRequestById()
      .then((res) => setRequestListById(res))
      .catch((err) => console.log('err', err))
    setLoading2(false)
    setReworkComment('')
  }
  useMemo(() => {
    setRequestListById(myRequestSearch)
  }, [myRequestSearch])
  return {
    submitRequest,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
    handleFileInputChange,
    handleRework,
    loading2,
    setReworkComment,
    reworkComment,
    requestListById,
    requestById,
    inputText,
    setInputText
  }
}
