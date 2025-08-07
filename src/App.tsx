import { useRef, useState } from "react";
import { BoxCodeInput, LineCodeInput, CodeInputRef } from "./index";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    verification: "",
    twoFactor: "",
    phonePin: "",
    creditCard: "",
    bankCode: "",
    gameCode: "",
  });

  const refs = {
    verification: useRef<CodeInputRef>(null),
    twoFactor: useRef<CodeInputRef>(null),
    phonePin: useRef<CodeInputRef>(null),
    creditCard: useRef<CodeInputRef>(null),
    bankCode: useRef<CodeInputRef>(null),
    gameCode: useRef<CodeInputRef>(null),
  };

  const handleComplete = (type: string) => (value: string) => {
    console.log(`${type} completed:`, value);
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const handleChange = (type: string) => (value: string) => {
    setValues((prev) => ({ ...prev, [type]: value }));
  };

  const getRandomValue = (type: string) => {
    const ref = refs[type as keyof typeof refs];
    if (ref.current) {
      const value = ref.current.getValue();
      alert(`${type.toUpperCase()}: ${value}`);
    }
  };

  const clearInput = (type: string) => {
    const ref = refs[type as keyof typeof refs];
    if (ref.current) {
      ref.current.clear();
      setValues((prev) => ({ ...prev, [type]: "" }));
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 React Segmented Input</h1>
        <p>Modern & Customizable Code Input Components</p>
      </header>

      <div className="demo-grid">
        {/* Email Verification */}
        <div className="demo-card">
          <div className="card-header">
            <h3>📧 Email Verification</h3>
            <span className="badge">6 digits</span>
          </div>
          <BoxCodeInput
            ref={refs.verification}
            numberOfChars={6}
            borderColor="#3b82f6"
            backgroundColor="white"
            textColor="#1e293b"
            fontSize={24}
            fontWeight={600}
            borderRadius={12}
            width={55}
            height={60}
            gap={16}
            onChange={handleChange("verification")}
            onComplete={handleComplete("verification")}
            autoFocus
          />
          <div className="input-info">
            <span>
              Value: <code>{values.verification || "empty"}</code>
            </span>
          </div>
        </div>

        {/* Two Factor Authentication */}
        <div className="demo-card">
          <div className="card-header">
            <h3>🔐 Two Factor Auth</h3>
            <span className="badge success">8 chars</span>
          </div>
          <BoxCodeInput
            ref={refs.twoFactor}
            numberOfChars={8}
            separatorPositions={[4]}
            separatorChar="-"
            borderColor="#10b981"
            backgroundColor="#ecfdf5"
            textColor="#065f46"
            fontSize={20}
            fontWeight={500}
            borderRadius={8}
            width={45}
            height={50}
            gap={8}
            onChange={handleChange("twoFactor")}
            onComplete={handleComplete("twoFactor")}
          />
          <div className="input-info">
            <span>
              Value: <code>{values.twoFactor || "empty"}</code>
            </span>
          </div>
        </div>

        {/* Phone PIN */}
        <div className="demo-card">
          <div className="card-header">
            <h3>📱 Phone PIN</h3>
            <span className="badge warning">4 digits</span>
          </div>
          <BoxCodeInput
            ref={refs.phonePin}
            numberOfChars={4}
            borderColor="#f59e0b"
            backgroundColor="#fffbeb"
            textColor="#92400e"
            fontSize={28}
            fontWeight={700}
            borderRadius={16}
            width={60}
            height={70}
            gap={20}
            onChange={handleChange("phonePin")}
            onComplete={handleComplete("phonePin")}
          />
          <div className="input-info">
            <span>
              Value: <code>{values.phonePin || "empty"}</code>
            </span>
          </div>
        </div>

        {/* Credit Card */}
        <div className="demo-card wide">
          <div className="card-header">
            <h3>💳 Credit Card Number</h3>
            <span className="badge error">16 digits</span>
          </div>
          <LineCodeInput
            ref={refs.creditCard}
            numberOfChars={16}
            separatorPositions={[4, 8, 12]}
            separatorChar=" "
            borderColor="#ef4444"
            backgroundColor="#fef2f2"
            textColor="#dc2626"
            fontSize={18}
            fontWeight={600}
            letterSpacing={6}
            borderRadius={12}
            paddingTop={16}
            paddingBottom={16}
            paddingLeft={20}
            paddingRight={20}
            width={420}
            onChange={handleChange("creditCard")}
            onComplete={handleComplete("creditCard")}
            placeholder="1234"
          />
          <div className="input-info">
            <span>
              Value: <code>{values.creditCard || "empty"}</code>
            </span>
          </div>
        </div>

        {/* Bank Swift Code */}
        <div className="demo-card wide">
          <div className="card-header">
            <h3>🏦 Bank Swift Code</h3>
            <span className="badge info">11 chars</span>
          </div>
          <LineCodeInput
            ref={refs.bankCode}
            numberOfChars={11}
            separatorPositions={[4, 6]}
            separatorChar="-"
            borderColor="#6366f1"
            backgroundColor="#f0f9ff"
            textColor="#1e40af"
            fontSize={16}
            fontWeight={500}
            letterSpacing={4}
            borderRadius={8}
            paddingTop={12}
            paddingBottom={12}
            paddingLeft={16}
            paddingRight={16}
            width={280}
            onChange={handleChange("bankCode")}
            onComplete={handleComplete("bankCode")}
            placeholder="BANK"
          />
          <div className="input-info">
            <span>
              Value: <code>{values.bankCode || "empty"}</code>
            </span>
          </div>
        </div>

        {/* Game Activation Code */}
        <div className="demo-card">
          <div className="card-header">
            <h3>🎮 Game Code</h3>
            <span className="badge purple">12 chars</span>
          </div>
          <BoxCodeInput
            ref={refs.gameCode}
            numberOfChars={12}
            separatorPositions={[4, 8]}
            separatorChar="-"
            borderColor="#8b5cf6"
            backgroundColor="#faf5ff"
            textColor="#7c3aed"
            fontSize={16}
            fontWeight={600}
            borderRadius={6}
            width={35}
            height={45}
            gap={6}
            onChange={handleChange("gameCode")}
            onComplete={handleComplete("gameCode")}
            placeholder="X"
          />
          <div className="input-info">
            <span>
              Value: <code>{values.gameCode || "empty"}</code>
            </span>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="control-panel">
        <h3>🎛️ Control Panel</h3>
        <div className="button-grid">
          <button
            onClick={() => getRandomValue("verification")}
            className="btn btn-primary"
          >
            Get Email Code
          </button>
          <button
            onClick={() => getRandomValue("twoFactor")}
            className="btn btn-success"
          >
            Get 2FA Code
          </button>
          <button
            onClick={() => getRandomValue("phonePin")}
            className="btn btn-warning"
          >
            Get Phone PIN
          </button>
          <button
            onClick={() => clearInput("verification")}
            className="btn btn-outline"
          >
            Clear Email
          </button>
          <button
            onClick={() => clearInput("twoFactor")}
            className="btn btn-outline"
          >
            Clear 2FA
          </button>
          <button
            onClick={() => clearInput("phonePin")}
            className="btn btn-outline"
          >
            Clear PIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
