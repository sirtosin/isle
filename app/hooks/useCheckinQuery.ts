"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useDeferredValue, useMemo, useState } from "react";
import { getApi, putApi } from "../services";
import { Toast } from "../components/Toast";

export default function useCheckinQuery() {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const deferedValue = useDeferredValue(inputText);

  const getRequestById = async () => {
    const resp = await getApi(`users`);
    return resp.user;
  };
  const allUsers = useQuery({
    queryKey: ["users"],
    queryFn: getRequestById,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 500,
    refetchOnMount: true,
    refetchInterval: 12000, // 2 minutes
    // 2 minutes
    refetchIntervalInBackground: true,
    onSuccess(data: any) {
      //   Toast({ title: "page refreshed", error: false });
      //   return data;
    },
    onError: (error: any) => console.error(error),
  });
  const allUserSearch = useMemo(
    () =>
      deferedValue
        ? allUsers?.data?.filter(
            (item: any) =>
              `0${item?.phone?.substring(3)}`
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.name
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.email
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim())
          )
        : allUsers?.data,
    [deferedValue, allUsers?.data]
  );
  const handleCheckin = (data: any) => {
    setData(data);
    handleModal();
  };
  const CheckinUser = async (e: any) => {
    e?.preventDefault();
    setLoading(true);
    const payload = {
      isCheckedIn: true,
      id: data?._id,
    };
    const res = await putApi("users/check-in", payload);
    if (res.isCheckedIn) {
      Toast({ title: "Guest Checked In Successfully", error: false });
      setLoading(false);
    }
    setLoading(false);
    handleModal();
  };
  const UnCheckUser = async (e: any) => {
    e?.preventDefault();
    setLoading(true);
    const payload = {
      isCheckedIn: false,
      id: data?._id,
    };
    const res = await putApi("users/check-in", payload);
    if (!res.isCheckedIn) {
      Toast({ title: "Guest Un Checked Successfully", error: false });
      setLoading(false);
    }
    setLoading(false);
    handleModal();
  };
  return {
    setModal,
    modal,
    handleModal,
    deferedValue,
    setInputText,
    allUserSearch,
    handleCheckin,
    allUsers,
    CheckinUser,
    data,
    loading,
    UnCheckUser,
  };
}
