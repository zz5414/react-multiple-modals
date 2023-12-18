import ReactModal from "react-modal";

const MyModal = ({ isOpen }) => {
  return (
    <ReactModal isOpen>
      <div>This is Modal!</div>
    </ReactModal>
  );
};

export default MyModal;
