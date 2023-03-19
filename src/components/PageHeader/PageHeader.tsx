import Button from "../Button/Button";

import * as S from "./PageHeader.styles";
import Modal from "../Modal/Modal";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FormSelect from "../FormSelect/FormSelect";
import { useState } from "react";
import { useDevices } from "../../providers/DevicesProvider/DevicesProvider";
import { useSnackbar } from "../../providers/SnackbarProvider/SnackbarProvider";
import { sendRequest } from "../../service";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import { useDevice } from "../../providers/DeviceProvider/DeviceProvider";
import FormInput from "../FormInput/FormInput";

interface FormState {
  system_name: string;
  type: string;
  hdd_capacity: string;
}


interface ModalAddFooterProps {
  onClose: () => void;
}

const ModalEditFooter = ({ onClose }: ModalAddFooterProps) => {
  return (
    <ModalFooter>
      <S.ButtonWrapper>
        <Button
          onClick={onClose}
          variant="regular"
          title="Cancel"
          type="button"
        />
        <Button type="submit" variant="info" title="Submit" />
      </S.ButtonWrapper>
    </ModalFooter>
  );
};

interface PageHeaderProps {
  title: string;
  buttonText: string;
}

export default function PageHeader({ title, buttonText }: PageHeaderProps) {
  const methods = useForm<FormState>({
    defaultValues: {
      system_name: '',
      type: '',
      hdd_capacity: '',
    },
  });
  const { deviceType } = useDevice();

  const { devicesTypes, updateList } = useDevices();
  const { showSnackbar } = useSnackbar();

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const onAddSubmit = async (data: FieldValues) => {
    try {
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
      methods.reset()
    }
    catch(err){
      showSnackbar("Something went wrong", "ERROR");
    }
  };

  const onCancelModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <S.PageTitleWrapper>
        <S.PageTitle>{title}</S.PageTitle>
        <S.AddDeviceWrapper width={deviceType === 'mobile' ? '100%' : '121px'}>
          <Button
            variant="info"
            onClick={() => setIsAddModalOpen(true)}
            title={buttonText}
            type="button"
          />
        </S.AddDeviceWrapper>
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
            <FormInput label="System name *" name="system_name" type="text" />
            <FormSelect
              label="Device type *"
              name="type"
              placeholder="Select type"
              items={devicesTypes}
            />
            <FormInput
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
