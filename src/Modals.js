import { useContext } from "react";
import { ModalsStateContext } from "./ModalsContext";

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;

    return <Component key={index} {...props} />;
  });
};

export default Modals;
