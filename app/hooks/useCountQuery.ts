import React from 'react'
import { getApi } from '../services'
import { useQuery } from '@tanstack/react-query'

export default function useCountQuery() {
  const getAllRequestCount = async () => {
    const resp = await getApi(`/Request/AllRequestCount
`)
    return resp.responseData
  }
  const getApprovedCount = async () => {
    const resp = await getApi(`/Request/AllApprovedRequestCount
`)
    return resp.responseData
  }
  const getPendingCount = async () => {
    const resp = await getApi(`/Request/AllPendingRequestCount
`)
    return resp.responseData
  }
  const getRejectedCount = async () => {
    const resp = await getApi(`/Request/AllRejectedRequestCount
`)
    return resp.responseData
  }
  const getReworkCount = async () => {
    const resp = await getApi(`/Request/AllReworkRequestCount
`)
    return resp.responseData
  }

  const getAllRequestCountByUser = async () => {
    const resp = await getApi(`/Request/RequestCountByUser
`)
    return resp.responseData
  }
  const getApprovedCountByUser = async () => {
    const resp = await getApi(`/Request/ApprovedCountByUser
`)
    return resp.responseData
  }
  const getPendingCountByUser = async () => {
    const resp = await getApi(`/Request/PendingCountByUser
`)
    return resp.responseData
  }
  const getRejectedCountByUser = async () => {
    const resp = await getApi(`/Request/RejectedCountByUser
`)
    return resp.responseData
  }
  const getReworkCountByUser = async () => {
    const resp = await getApi(`/Request/ReworkCountByUser
`)
    return resp.responseData
  }

  const allRequestCount = useQuery({
    queryKey: ['allCount'],
    queryFn: getAllRequestCount,
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
  const approvedCount = useQuery({
    queryKey: ['approvedCount'],
    queryFn: getApprovedCount,
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
  const rejectedCount = useQuery({
    queryKey: ['rejectedCount'],
    queryFn: getRejectedCount,
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
  const pendingCount = useQuery({
    queryKey: ['pendingCount'],
    queryFn: getPendingCount,
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
  const reworkCount = useQuery({
    queryKey: ['reworkCount'],
    queryFn: getReworkCount,
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
  const allRequestCountByUser = useQuery({
    queryKey: ['allCountByUser'],
    queryFn: getAllRequestCountByUser,
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
  const approvedCountByUser = useQuery({
    queryKey: ['approvedCountByUser'],
    queryFn: getApprovedCountByUser,
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
  const rejectedCountByUser = useQuery({
    queryKey: ['rejectedCountByUser'],
    queryFn: getRejectedCountByUser,
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
  const pendingCountByUser = useQuery({
    queryKey: ['pendingCountByUser'],
    queryFn: getPendingCountByUser,
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
  const reworkCountByUser = useQuery({
    queryKey: ['reworkCountByUser'],
    queryFn: getReworkCountByUser,
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
  return {
    allRequestCount,
    reworkCount,
    pendingCount,
    approvedCount,
    rejectedCount,
    allRequestCountByUser,
    reworkCountByUser,
    pendingCountByUser,
    approvedCountByUser,
    rejectedCountByUser
  }
}
