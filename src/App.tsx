import { useState, useRef } from "react";
import { BoxCodeInput, LineCodeInput, CodeInputRef } from "./index";
import "./App.css";

function App() {
  const [boxValue, setBoxValue] = useState("");
  const [lineValue, setLineValue] = useState("");
  const boxRef = useRef<CodeInputRef>(null);
  const lineRef = useRef<CodeInputRef>(null);

  const handleBoxComplete = (value: string) => {
    console.log("Box input tamamlandı:", value);
  };

  const handleLineComplete = (value: string) => {
    console.log("Line input tamamlandı:", value);
  };

  const clearInputs = () => {
    boxRef.current?.clear();
    lineRef.current?.clear();
    setBoxValue("");
    setLineValue("");
  };

  const getValues = () => {
    const boxVal = boxRef.current?.getValue();
    const lineVal = lineRef.current?.getValue();
    alert(`Box: ${boxVal}, Line: ${lineVal}`);
  };

  return (
    <div className="app">
      <h1>React Code Input Demo</h1>

      <div className="demo-section">
        <h2>Box Code Input (Kutucuk Tasarım)</h2>
        <div className="input-container">
          <BoxCodeInput
            ref={boxRef}
            numberOfChars={6}
            separatorPositions={[3]}
            separatorChar="-"
            borderColor="#3b82f6"
            backgroundColor="white"
            textColor="#1f2937"
            fontSize={20}
            fontWeight={500}
            borderRadius={8}
            width={50}
            height={50}
            onChange={setBoxValue}
            onComplete={handleBoxComplete}
            autoFocus
          />
        </div>
        <p>Girilen değer: {boxValue}</p>
      </div>

      <div className="demo-section">
        <h2>Line Code Input (Düz Tasarım)</h2>
        <div className="input-container">
          <LineCodeInput
            ref={lineRef}
            numberOfChars={8}
            separatorPositions={[4]}
            separatorChar="/"
            borderColor="#10b981"
            backgroundColor="white"
            textColor="#065f46"
            fontSize={18}
            fontWeight={400}
            textAlign="center"
            letterSpacing={8}
            borderRadius={6}
            paddingTop={15}
            paddingBottom={15}
            paddingLeft={20}
            paddingRight={20}
            onChange={setLineValue}
            onComplete={handleLineComplete}
          />
        </div>
        <p>Girilen değer: {lineValue}</p>
      </div>

      <div className="demo-section">
        <h2>Farklı Örnekler</h2>

        <h3>Telefon Numarası (Box)</h3>
        <BoxCodeInput
          numberOfChars={11}
          separatorPositions={[1, 4, 7]}
          separatorChar=" "
          borderColor="#6b7280"
          textColor="#374151"
          fontSize={16}
          width={35}
          height={40}
          placeholder="0"
        />

        <h3>Kredi Kartı (Line)</h3>
        <LineCodeInput
          numberOfChars={16}
          separatorPositions={[4, 8, 12]}
          separatorChar=" "
          borderColor="#f59e0b"
          textColor="#92400e"
          fontSize={16}
          letterSpacing={8}
          textAlign="center"
          placeholder="0000 0000 0000 0000"
        />

        <h3>IBAN (Line)</h3>
        <LineCodeInput
          numberOfChars={26}
          separatorPositions={[2, 6, 10, 14, 18, 22]}
          separatorChar=" "
          borderColor="#8b5cf6"
          textColor="#6d28d9"
          fontSize={14}
          letterSpacing={4}
          textAlign="left"
          width={400}
          placeholder="TR00 0000 0000 0000 0000 0000 00"
        />
      </div>

      <div className="controls">
        <button onClick={clearInputs}>Temizle</button>
        <button onClick={getValues}>Değerleri Al</button>
      </div>
    </div>
  );
}

export default App;
