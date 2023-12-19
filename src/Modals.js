import loadable from "@loadable/component";
import { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

export const modals = {
  //   myModal: MyModal,
  myModal: loadable(() => import("./modals/MyModal")),
  abcModal: loadable(() => import("./modals/abc_modal")),
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;
    const onClose = () => {
      close(Component);
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
