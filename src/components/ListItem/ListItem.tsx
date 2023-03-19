import { useEffect, useRef, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as S from "./ListItem.styles";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { sendRequest } from "../../service";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import { useDevices } from "../../providers/DevicesProvider/DevicesProvider";
import { useSnackbar } from "../../providers/SnackbarProvider/SnackbarProvider";
import ModalFooter from "../Modal/ModalFooter/ModalFooter";
import { Flexbox } from "../../styles/common";

interface IFormState {
  system_name: string;
  type: string;
  hdd_capacity: string;
}

interface ModalDeleteFooterProps {
  onClose: () => void;
  onSave?: (e: any) => Promise<void>;
}

const ModalDeleteFooter = ({ onClose, onSave }: ModalDeleteFooterProps) => {
  return (
    <ModalFooter>
      <S.ButtonWrapper>
      <Button
        onClick={onClose}
        variant="regular"
        title="Cancel"
        type="button"
      />
      <Button onClick={onSave} variant="alert" title="delete" type="button" />
      </S.ButtonWrapper>
    </ModalFooter>
  );
};

interface ModalEditFooterProps {
  onClose: () => void;
  isDirty: boolean;
}

const ModalEditFooter = ({ onClose, isDirty }: ModalEditFooterProps) => {
  return (
    <ModalFooter>
      <S.ButtonWrapper>
        <Button
          onClick={onClose}
          variant="regular"
          title="Cancel"
          type="button"
        />
        <Button type="submit" variant="info" title="Submit" disabled={!isDirty} />
      </S.ButtonWrapper>
    </ModalFooter>
  );
};

export default function ListItem({ item }: { item: Device }) {
  const { devicesTypes, updateList } = useDevices();
  const { showSnackbar } = useSnackbar();

  const methods = useForm<IFormState>({
    defaultValues: {
      system_name: item.system_name,
      type: item.type.toLowerCase(),
      hdd_capacity: item.hdd_capacity,
    },
  });

  const listItemRef = useRef<HTMLDivElement>(null);
  const floatingMenuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        !listItemRef.current?.contains(event.target) &&
        !floatingMenuRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listItemRef]);

  const openEditModal = () => {
    setIsMenuOpen(false);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = () => {
    setIsMenuOpen(false);
    setIsDeleteModalOpen(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const onDeleteConfirm = async () => {
    try {
      const response = await sendRequest({
        url: `devices/${item.id}`,
        method: "DELETE",
      });
      if (response.status !== 200) {
        showSnackbar("Something went wrong.", "ERROR");
        setIsDeleteModalOpen(false);
        return;
      }
  
      showSnackbar("Item deleted successfully", "SUCCESS");
      updateList();
      setIsDeleteModalOpen(false);
    }
    catch(err){
      showSnackbar("Something went wrong.", "ERROR");
    }
  };

  const onSubmitEdit = async (data: FieldValues) => {
    try {
      const response = await sendRequest({
        url: `devices/${item.id}`,
        method: "PUT",
        data,
      });
  
      if (response.status !== 200) {
        showSnackbar("Something went wrong", "ERROR");
        setIsDeleteModalOpen(false);
        return;
      }
  
      updateList();
      showSnackbar("Item edited successfully", "SUCCESS");
      setIsEditModalOpen(false);
    }
    catch(err){
      showSnackbar("Something went wrong", "ERROR");
    }
  };

  const onCancelModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };
  return (
    <>
      <S.ListItem>
        <Flexbox alignItems="center" justifyContent="space-between">
          <S.ItemTitle>
            <Flexbox alignItems="center">
              <S.SystemLogo src={`icons/${item.type.toLowerCase()}.svg`} />
              <S.ListTitle>{item.system_name}</S.ListTitle>
            </Flexbox>
            <S.ListSubtitle>
              {item.type} workstation - {item.hdd_capacity} GB
            </S.ListSubtitle>
          </S.ItemTitle>
          <S.ItemMenu onClick={toggleMenu} ref={listItemRef}>
            <img src="icons/more.svg" alt="More" />
            {isMenuOpen ? (
              <FloatingMenu>
                <S.FloatingMenuItem ref={floatingMenuRef}>
                  <S.FloatingMenuItemAnchor onClick={openEditModal}>
                    Edit
                  </S.FloatingMenuItemAnchor>
                  <S.FloatingMenuItemAnchor onClick={openDeleteModal}>
                    Delete
                  </S.FloatingMenuItemAnchor>
                </S.FloatingMenuItem>
              </FloatingMenu>
            ) : null}
          </S.ItemMenu>
        </Flexbox>
      </S.ListItem>
      <Modal
        title="Delete device?"
        text={`You are about to delete the device ${item.system_name}. This action cannot be undone.`}
        width={540}
        height={159}
        isOpen={isDeleteModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsDeleteModalOpen(false)}
        footerComponent={
          <ModalDeleteFooter onClose={onCancelModal} onSave={onDeleteConfirm} />
        }
      ></Modal>

      <Modal
        title="Edit device"
        width={540}
        height={388}
        isOpen={isEditModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsEditModalOpen(false)}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitEdit)}>
            <FormInput label="System name *" name="system_name" type="text" />
            <FormSelect
              label="Device type *"
              name="type"
              placeholder="Select Type"
              items={devicesTypes}
            />
            <FormInput
              label="HDD capacity (GB) *"
              name="hdd_capacity"
              type="number"
            />
            <ModalEditFooter
              onClose={onCancelModal}
              isDirty={methods.formState.isDirty}
            />
          </form>
        </FormProvider>
      </Modal>
    </>
  );
}
