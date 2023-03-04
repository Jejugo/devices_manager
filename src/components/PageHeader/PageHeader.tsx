import Button from "../Button/Button";

import * as S from "./PageHeader.styles";
import Modal from "../Modal/Modal";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { useState } from "react";
import { useDevices } from "../../providers/DevicesProvider";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { sendRequest } from "../../services";

interface ModalAddFooterProps {
  onClose: () => void;
}

const ModalEditFooter = ({ onClose }: ModalAddFooterProps) => {
  return (
    <>
      <Button onClick={onClose} color="#fff" title="Cancel" type="button" />
      <Button type="submit" color="#337AB7" title="Submit" />
    </>
  );
};

interface PageHeaderProps {
  title: string;
  buttonText: string;
}

export default function PageHeader({ title, buttonText }: PageHeaderProps) {
  const methods = useForm();
  const { devicesTypes, updateList } = useDevices();
  const { showSnackbar } = useSnackbar();

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const onAddSubmit = async (data: any) => {
    const response = await sendRequest({
      url: "devices",
      method: "POST",
      data,
    });
    if (response.status !== 200) {
      showSnackbar("Something went wrong", "ERROR");
      setIsAddModalOpen(false);
      return;
    }
    updateList();
    showSnackbar("Item added successfully", "SUCCESS");
    setIsAddModalOpen(false);
  };

  const onCancelModal = () => {
    console.log("canceling");
    setIsAddModalOpen(false);
  };

  return (
    <>
      {" "}
      <S.PageTitleWrapper>
        <h1>{title}</h1>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          title={buttonText}
          type="button"
        />
      </S.PageTitleWrapper>
      <Modal
        width={540}
        height={388}
        isOpen={isAddModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsAddModalOpen(false)}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onAddSubmit)}>
            <h1>Add device</h1>
            <Input label="System name *" name="system_name" type="text" />
            <Select
              label="Device type *"
              name="type"
              placeholder="Choose a device type"
              items={devicesTypes}
            />
            <Input
              label="HDD capacity (GB) *"
              name="hdd_capacity"
              type="number"
            />
            <ModalEditFooter onClose={onCancelModal} />
            {/* <button>bora</button> */}
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
