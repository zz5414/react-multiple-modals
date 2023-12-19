import "./styles.css";
import MyModal from "./MyModal";
import useModals from "./useModal";

export default function App() {
  const { openModal } = useModals();

  const handleClick = () => {
    console.log("모달을 열었습니다.");
    openModal(MyModal, {
      onSubmit: () => {
        console.log("로직 처리....");
      },
    });
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={handleClick}>Open Modal</button>
    </div>
  );
}
