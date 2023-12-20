import { useState } from "react";

import { modals } from "../Modals";
import { useModals } from "../recoil_atom";

export default function ABC() {
  const { openModal } = useModals();
  const [data, setData] = useState([2, 23, 5, 5]);

  const handleClick = () => {
    openModal(modals.abcModal, {
      onSubmit: () => {
        console.log("로직 처리....");
        console.log(data);
      },
    });
  };

  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={handleClick}>Open Modal</button>
    </div>
  );
}
