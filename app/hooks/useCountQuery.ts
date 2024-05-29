import React from 'react'
import { getApi } from '../services'
import { useQuery } from '@tanstack/react-query'

export default function usePhotoQuery() {

  const getImages  = async () => {
    const resp = await getApi(`uploads
`)
    return resp.data
  }

const allImages = useQuery({
  queryKey: ["image"],
  queryFn: getImages,
  refetchOnReconnect: true,
  retry: 5,
  retryDelay: 100,
  staleTime: 500,
  refetchOnMount: true,
  refetchInterval: 12000, // 2 minutes
  refetchIntervalInBackground: true,
  onSuccess(data: any) {
    //   Toast({ title: "page refreshed", error: false });
  },
  onError: (error: any) => console.error(error),
});

  return {
    allImages,
  };
}
