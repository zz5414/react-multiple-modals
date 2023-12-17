import { useState } from "react";
import MyModal from "./MyModal";
import "./styles.css";

export default function App() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    console.log("모달을 열었습니다.");
    setOpen(true);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={handleClick}>Open Modal</button>
      <MyModal isOpen={isOpen} />
    </div>
  );
}
