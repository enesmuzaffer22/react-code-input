// Ana komponentler
export { default as BoxCodeInput } from "./components/BoxCodeInput";
export { default as LineCodeInput } from "./components/LineCodeInput";

// Tip tanımları
export type {
  BoxCodeInputProps,
  LineCodeInputProps,
  CodeInputRef,
} from "./types";

// CSS dosyalarını import et (kullanıcı isterse manuel import edebilir)
import "./components/BoxCodeInput/BoxCodeInput.css";
import "./components/LineCodeInput/LineCodeInput.css";
