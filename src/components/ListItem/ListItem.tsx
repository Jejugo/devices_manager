import { ReactElement, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as S from "./ListItem.styles";
import FloatingMenu, { MenuPosition } from "../FloatingMenu/FloatingMenu";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { sendRequest } from "../../services";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { useDevices } from "../../providers/DevicesProvider";
import { useSnackbar } from "../../providers/SnackbarProvider";

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
    <>
      <Button onClick={onClose} color="#fff" title="Cancel" type="button" />
      <Button onClick={onSave} color="red" title="Delete" type="button" />
    </>
  );
};

interface ModalEditFooterProps {
  onClose: () => void;
}

const ModalEditFooter = ({ onClose }: ModalEditFooterProps) => {
  return (
    <>
      <Button onClick={onClose} color="#fff" title="Cancel" type="button" />
      <Button type="submit" color="#337AB7" title="Submit" />
    </>
  );
};

export default function ListItem({ item }: { item: Device }) {
  const { devicesTypes, updateList } = useDevices();
  const { showSnackbar } = useSnackbar();

  const methods = useForm<IFormState>({
    defaultValues: {
      system_name: "",
      type: "",
      hdd_capacity: "",
    },
  });

  const listItem = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    top: 0,
    left: 0,
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // if (listItem.current && !listItem.current.contains(event.target)) {
      //   setIsMenuOpen(false);
      // }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listItem]);

  const handleEdit = (e: ReactElement<HTMLAnchorElement>) => {
    setIsMenuOpen(false);
    setIsEditModalOpen(true);
  };

  const handleDelete = (e: ReactElement<HTMLAnchorElement>) => {
    setIsMenuOpen(false);
    setIsDeleteModalOpen(true);
  };

  const toggleMenu = () => {
    if (listItem.current) {
      const { top, left, height } = listItem.current.getBoundingClientRect();
      setMenuPosition({ top: top + height, left });
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  const onDeleteConfirm = async () => {
    const response = await sendRequest({
      url: `devices/${item.id}`,
      method: "DELETE",
    });
    if (response.status !== 200) {
      showSnackbar("Something went wrong", "ERROR");
      setIsDeleteModalOpen(false);
      return;
    }

    updateList();
    showSnackbar("Item deleted successfully", "SUCCESS");
    setIsDeleteModalOpen(false);
  };

  const onSubmitEdit = async (data: any) => {
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
  };

  const onCancelModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };
  return (
    <>
      <S.ListItem>
        <S.ListRow>
          <S.ItemTitle>
            <S.ListTitle>{item.system_name}</S.ListTitle>
            <S.ListSubtitle>
              {item.type} workstation - {item.hdd_capacity} GB
            </S.ListSubtitle>
          </S.ItemTitle>
          <S.ItemMenu onClick={toggleMenu} ref={listItem}>
            <img src="icons/more.png" alt="More" />
          </S.ItemMenu>
        </S.ListRow>
      </S.ListItem>
      {isMenuOpen ? (
        <FloatingMenu menuPosition={menuPosition}>
          <S.FloatingMenuItem>
            <S.FloatingMenuItemAnchor onClick={handleEdit}>
              Edit
            </S.FloatingMenuItemAnchor>
            <S.FloatingMenuItemAnchor onClick={handleDelete}>
              Delete
            </S.FloatingMenuItemAnchor>
          </S.FloatingMenuItem>
        </FloatingMenu>
      ) : null}
      <Modal
        width={540}
        height={159}
        isOpen={isDeleteModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsDeleteModalOpen(false)}
        footerComponent={
          <ModalDeleteFooter onClose={onCancelModal} onSave={onDeleteConfirm} />
        }
      >
        <h1>Delete device?</h1>
        <p>
          You are about to delete the device . This action cannot be undone.
        </p>
      </Modal>

      <Modal
        width={540}
        height={388}
        isOpen={isEditModalOpen}
        mobileFullSize={false}
        onCloseButton={() => setIsEditModalOpen(false)}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitEdit)}>
            <h1>Edit device</h1>
            <Input label="System name *" name="system_name" type="text" />
            <Select
              label="Device type *"
              name="type"
              placeholder="Select Type"
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
