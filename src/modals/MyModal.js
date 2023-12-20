import ReactModal from "react-modal";
import { modals } from "../Modals";
import { useModals } from "../recoil_atom";

const MyModal = ({ onSubmit, onClose }) => {
  const { openModal } = useModals();

  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onClose();
  };

  const handleClick = () => {
    console.log("모달을 열었습니다.");
    openModal(modals.abcModal, {
      onSubmit: () => {
        console.log("로직 처리....");
      },
    });
  };

  return (
    <ReactModal isOpen>
      <div>This is Modal!</div>
      <div>
        <button onClick={handleClick}>Open abc modal</button>

        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default MyModal;
