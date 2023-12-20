import loadable from "@loadable/component";
import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { openedModalsAtom, useModals } from "./recoil_atom";

export const modals = {
  //   myModal: MyModal,
  myModal: loadable(() => import("./modals/MyModal")),
  abcModal: loadable(() => import("./modals/abc_modal")),
};

const Modals = () => {

  const openedModals = useRecoilValue(openedModalsAtom);
  const { closeModal } = useModals();

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      closeModal(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
      onClose();
    };

    return (
      <Component
        {...restProps}
        key={index}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    );
  });
};

export default Modals;
