'use client'
import { useDeferredValue, useMemo, useState } from 'react'
import { getApi, postApi } from '../services'
import { useQuery } from '@tanstack/react-query'
import { useStateContext } from '../context/context'
import { Toast } from '../components/Toast'

export default function useRequestQuery() {
  const [inputText, setInputText] = useState('')
  const [comment, setComment] = useState('')
  const deferedValue = useDeferredValue(inputText)
  const { edit, editData, setEdit, title, requestList, setRequestList } =
    useStateContext()
  const [loading, setLoading] = useState(false)
  const handleDeleteModal = () => {
    setEdit((prev: boolean) => !prev)
    // window.scrollTo(0, 0);
  }
  const handleSubmit = async (data: any, type: any) => {
    setLoading(true)
    const payload = {
      comment: comment,
      requestId: data.requestId,
      status: type === 'approved' ? 2 : type === 'rework' ? 3 : 4
    }
    const resp = await postApi(`/Request/UpdateRequestStatus`, payload)
    resp.responseCode !== 200
      ? Toast({ title: resp.responseMessage, error: true })
      : Toast({ title: resp.responseMessage, error: false })
    setLoading(false)
    getAllRequest()
      .then((res) => setRequestList(res))
      .catch((err) => console.log('err', err))
    setComment('')
    setEdit((prev: boolean) => !prev)
  }

  const getPurpose = async () => {
    const resp = await getApi(`/Request/AllPurpose`)
    return resp.responseData
  }
  const getAllRequest = async () => {
    const resp = await getApi(`/Request/AllRequest`)
    return resp.responseData
      .sort(
        (objA: any, objB: any) =>
          Number(new Date(objB.dateCreated)) -
          Number(new Date(objA.dateCreated))
      )
      .filter((item: any) => item.status === 'Pending')
  }
  const getAllApprovedRequest = async () => {
    const resp = await getApi(`/Request/AllRequest`)
    return resp.responseData
      .sort(
        (objA: any, objB: any) =>
          Number(new Date(objB.dateCreated)) -
          Number(new Date(objA.dateCreated))
      )
      .filter((item: any) => item.status === 'Approved')
  }

  const purpose = useQuery({
    queryKey: ['purpose'],
    queryFn: getPurpose,
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

  const approvedRequest = useQuery({
    queryKey: ['approvedRequest'],
    queryFn: getAllApprovedRequest,
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
  const request = useQuery({
    queryKey: ['request'],
    queryFn: getAllRequest,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      //   Toast({ title: "page refreshed", error: false });
      console.log('data', data)
    },
    onError: (error: any) => console.error(error)
  })

  const approvedRequestSearch = useMemo(
    () =>
      deferedValue
        ? approvedRequest?.data?.filter(
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
        : approvedRequest?.data,
    [deferedValue, approvedRequest?.data]
  )
  const allRequestSearch = useMemo(
    () =>
      deferedValue
        ? request?.data?.filter(
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
        : request?.data,
    [deferedValue, request?.data]
  )

  useMemo(() => {
    setRequestList(allRequestSearch)
  }, [allRequestSearch])
  return {
    purpose,
    request,
    edit,
    editData,
    handleDeleteModal,
    handleSubmit,
    inputText,
    setInputText,
    title,
    allRequestSearch,
    loading,
    setComment,
    approvedRequest,
    approvedRequestSearch,
    comment,
    requestList
  }
}
