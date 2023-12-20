import "./styles.css";
import { modals } from "./Modals";
import ABC from "./component/ABC";
import { useModals } from "./recoil_atom";

export default function App() {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.myModal, {
      onSubmit: () => {
        console.log("로직...");
      },
    });
  };

  return (
    <div className="App">
      <h1>Hello React</h1>

      <button onClick={handleClick}>Open Modal</button>
      <ABC />
    </div>
  );
}
