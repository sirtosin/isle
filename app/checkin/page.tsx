"use client";
import Card from "../components/Card";
import ModalCard from "../components/modal/Modal";
import useCheckinQuery from "../hooks/useCheckinQuery";
import { ArrowLogin } from "../icons/Arrow";
import Button from "../components/Button";
import Header2 from "../components/Header2";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../redux/hook";
import { Toast } from "../components/Toast";

export default function page() {
  const user = useAppSelector((state) => state.user.user);
  const navigate = useRouter();
  const {
    modal,
    handleModal,
    deferedValue,
    setInputText,
    allUserSearch,
    data,
    handleCheckin,
    CheckinUser,
    allUsers,
    loading,
    UnCheckUser,
  } = useCheckinQuery();

    useEffect(() => {
      if (user?.role !== "admin") {
        navigate.push("/login");
        Toast({ title: "Unauthorized", error: true });
      }
    }, [user?.role]);

  return (
    <div>
      {modal && (
        <ModalCard setOpen={handleModal} open={modal}>
          <Checkin
            UnCheckUser={UnCheckUser}
            CheckinUser={CheckinUser}
            data={data}
            loading={loading}
          />
        </ModalCard>
      )}
      <Header2 setInputText={setInputText} deferedValue={deferedValue} />
      <h2 className="mt-10 text-2xl text-center text-[#810A82] font-bold">
        Guest List
      </h2>
      <section className="flex flex-col w-full m-3 mx-auto sm:w-3/4">
        {allUsers?.isLoading ? (
          <p className="flex h-1/2 items-center justify-center text-center font-semibold text-gray-400 ">
            fetching guests...
          </p>
        ) : (
          allUserSearch?.map((item: any) => (
            <Card>
              <div
              key={item?._id}
                onClick={() => handleCheckin(item)}
                className="cursor-pointer flex p-5 items-center justify-between"
              >
                <span className="flex capitalize flex-col">
                  <h2 className="font-bold">{item?.name}</h2>
                  <aside className="flex items-center">
                    <p className="text-gray-500 text-sm">{`0${item?.phone?.substring(
                      3
                    )}`}</p>{" "}
                    {" - "}
                    <p className="text-gray-500 text-sm">{item?.inviteCode}</p>
                  </aside>
                </span>
                {item?.isCheckedIn ? (
                  <p className="bg-green-50 text-green-500 rounded-lg py-2 px-4 font-bold text-sm">
                    checked in ✅
                  </p>
                ) : (
                  <p className="bg-red-50 text-red-500 rounded-lg py-2 px-4 font-bold text-sm">
                    not checked in ❌
                  </p>
                )}
              </div>
            </Card>
          ))
        )}
      </section>
    </div>
  );
}

export const Checkin = ({ CheckinUser, data, loading, UnCheckUser }: any) => (
  <div className="m-3">
    <div className="flex p-2 flex-col space-y-3">
      <span className="flex capitalize items-center space-x-10">
        <p className="text-gray-500 text-sm">Name:</p>
        <h2 className="font-semibold text-[#810A82]">{data?.name} </h2>
      </span>
      <span className="flex capitalize items-center space-x-10">
        <p className="text-gray-500 text-sm">Phone:</p>
        <h2 className="font-semibold text-[#810A82]">{`0${data?.phone?.substring(
          3
        )}`}</h2>
      </span>
      <span className="flex items-center space-x-10">
        <p className="text-gray-500 text-sm">Email:</p>
        <h2 className="font-semibold text-[#810A82]">{data?.email}</h2>
      </span>
      <span className="flex capitalize items-center space-x-10">
        <p className="text-gray-500 text-sm">Invitation Code:</p>
        <h2 className="font-semibold text-[#810A82]">{data?.inviteCode}</h2>
      </span>
      <span className="flex capitalize items-center space-x-10">
        <p className="text-gray-500 text-sm">Table:</p>
        <h2 className="font-semibold text-[#810A82]">{data?.tableId}</h2>
      </span>
      {data?.isCheckedIn ? (
        <Button
          icon={<ArrowLogin />}
          loading={loading}
          onClick={UnCheckUser}
          label="Un Check"
          styles="bg-red-500 w-full my-5"
        />
      ) : (
        <Button
          icon={<ArrowLogin />}
          loading={loading}
          onClick={CheckinUser}
          label="Check In"
          styles="bg-[#810A82] w-full my-5"
        />
      )}
    </div>
  </div>
);
