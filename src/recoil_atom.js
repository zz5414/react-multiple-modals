import { atom, useRecoilState } from "recoil";

export const openedModalsAtom = atom({
  key: "openedModalsAtom",
  default: [],
});

export function useModals() {
  const [openedModals, setOpenedModals] = useRecoilState(openedModalsAtom);

  const openModal = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const closeModal = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  return { openModal, closeModal };
}
