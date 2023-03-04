import Button from "../Button/Button";

import * as S from "./PageHeader.styles";
import Modal from "../Modal/Modal";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../FormInput/FormInput";
import Select from "../FormSelect/FormSelect";
import { useState } from "react";
import { useDevices } from "../../providers/DevicesProvider/DevicesProvider";
import { useSnackbar } from "../../providers/SnackbarProvider/SnackbarProvider";
import { sendRequest } from "../../service";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";

interface ModalAddFooterProps {
  onClose: () => void;
}

const ModalEditFooter = ({ onClose }: ModalAddFooterProps) => {
  return (
    <ModalFooter>
      <Button
        onClick={onClose}
        variant="regular"
        title="Cancel"
        type="button"
      />
      <Button type="submit" variant="info" title="Submit" />
    </ModalFooter>
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
    setIsAddModalOpen(false);
  };

  return (
    <>
      <S.PageTitleWrapper>
        <S.PageTitle>{title}</S.PageTitle>
        <Button
          variant="info"
          onClick={() => setIsAddModalOpen(true)}
          title={buttonText}
          type="button"
          tabIndex={0}
          width={121}
        />
      </S.PageTitleWrapper>
      <Modal
        title="Add Device"
        width={540}
        height={388}
        isOpen={isAddModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsAddModalOpen(false)}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onAddSubmit)}>
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
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
