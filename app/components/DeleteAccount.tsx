import React from "react";
import ModalCard from "./modal/Modal";
import Button from "./Button";

export default function DeleteAccount({ deleteModal, handleDeleteModal }: any) {
  return (
    <ModalCard setOpen={handleDeleteModal} open={deleteModal}>
      <div>
        <h2 className="font-semibold text-center">Delete Acount</h2>
        <p className="text-sm text-center ">
          Are you sure you want to{" "}
          <span className="text-[#FF3B30]">“Delete” </span> your account with
          Us?
        </p>
        <div className="flex items-center justify-around my-4">
          <Button
            // onClick={handleDeleteModal}
            label="Cancel"
            styles="!text-[#898989] font-bold text-center border-[1px] border-[#CDCDCD] rounded-lg"
            loading={false}
          />
          <Button
            // onClick={() => handleSubmit(editData?.id)}
            label="Delete Account"
            styles="bg-[#FF3B30] rounded-lg"
            // loading={loading}
          />
        </div>
      </div>
    </ModalCard>
  );
}
