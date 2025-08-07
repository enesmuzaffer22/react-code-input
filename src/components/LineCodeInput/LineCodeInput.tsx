import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { LineCodeInputProps, CodeInputRef } from "../../types";
import "./LineCodeInput.css";

const LineCodeInput = forwardRef<CodeInputRef, LineCodeInputProps>(
  (props, ref) => {
    const {
      borderTop = true,
      borderRight = true,
      borderBottom = true,
      borderLeft = true,
      border = true,
      borderThickness = 1,
      borderColor = "#ccc",
      backgroundColor = "transparent",
      fontSize = 16,
      fontWeight = 400,
      textColor = "#000",
      textAlign = "center",
      letterSpacing = 8,
      borderRadius = 4,
      paddingTop = 12,
      paddingRight = 16,
      paddingBottom = 12,
      paddingLeft = 16,
      width,
      numberOfChars,
      separatorPositions = [],
      separatorChar = "-",
      onChange,
      onComplete,
      value = "",
      placeholder = "",
      disabled = false,
      autoFocus = false,
      className = "",
      style = {},
    } = props;

    const [inputValue, setInputValue] = useState<string>(value);
    // const [cursorPosition, setCursorPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Value prop değiştiğinde internal state'i güncelle
    useEffect(() => {
      setInputValue(value);
    }, [value]);

    // Otomatik focus
    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    // Ref metodları
    useImperativeHandle(ref, () => ({
      getValue: () => inputValue,
      setValue: (newValue: string) => {
        const truncatedValue = newValue.slice(0, numberOfChars);
        setInputValue(truncatedValue);
      },
      clear: () => {
        setInputValue("");
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    // Stil hesaplamaları
    const getBorderStyle = () => {
      const borderStyle: React.CSSProperties = {};

      if (border) {
        borderStyle.border = `${borderThickness}px solid ${borderColor}`;
      } else {
        if (borderTop)
          borderStyle.borderTop = `${borderThickness}px solid ${borderColor}`;
        if (borderRight)
          borderStyle.borderRight = `${borderThickness}px solid ${borderColor}`;
        if (borderBottom)
          borderStyle.borderBottom = `${borderThickness}px solid ${borderColor}`;
        if (borderLeft)
          borderStyle.borderLeft = `${borderThickness}px solid ${borderColor}`;
      }

      return borderStyle;
    };

    // Input genişliğini hesapla
    const calculateWidth = () => {
      // Eğer width prop'u verilmişse onu kullan
      if (width) {
        return width;
      }

      // Otomatik hesaplama
      const baseCharWidth = fontSize * 0.65;
      const totalSpacing = letterSpacing * (numberOfChars - 1);
      const separatorWidth =
        separatorPositions.length * (fontSize * 0.6 + letterSpacing);
      const calculatedWidth =
        baseCharWidth * numberOfChars +
        totalSpacing +
        separatorWidth +
        paddingLeft +
        paddingRight;

      return calculatedWidth;
    };

    const getInputStyle = (): React.CSSProperties => ({
      ...getBorderStyle(),
      backgroundColor,
      fontSize: `${fontSize}px`,
      fontWeight,
      color: textColor,
      textAlign,
      letterSpacing: `${letterSpacing}px`,
      borderRadius: `${borderRadius}px`,
      paddingTop: `${paddingTop}px`,
      // Son karakterin sağında letter-spacing olmaması için padding'i azalt
      paddingRight: `${Math.max(0, paddingRight - letterSpacing)}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`,
      width: `${calculateWidth()}px`,
      outline: "none",
      ...style,
    });

    // Separator'ları ekleyerek değeri formatla
    const formatValueWithSeparators = (val: string) => {
      let formattedValue = "";

      for (let i = 0; i < val.length; i++) {
        // Separator pozisyonunu kontrol et
        if (separatorPositions.includes(i) && i > 0) {
          formattedValue += separatorChar;
        }
        formattedValue += val[i];
      }

      return formattedValue;
    };

    // Formatlanmış değerden orijinal değeri çıkar
    const extractOriginalValue = (formattedVal: string) => {
      return formattedVal.replace(new RegExp(`\\${separatorChar}`, "g"), "");
    };

    // Event handlers
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newFormattedValue = event.target.value;
      const newOriginalValue = extractOriginalValue(newFormattedValue);

      // Karakter sayısı sınırını kontrol et
      if (newOriginalValue.length <= numberOfChars) {
        setInputValue(newOriginalValue);
        onChange?.(newOriginalValue);

        // Tamamlandığında callback çağır
        if (newOriginalValue.length === numberOfChars) {
          onComplete?.(newOriginalValue);
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;

      // Sadece alfanumerik karakterlere izin ver (isteğe bağlı)
      if (key.length === 1 && inputValue.length >= numberOfChars) {
        event.preventDefault();
      }
    };

    const handlePaste = (event: React.ClipboardEvent) => {
      event.preventDefault();
      const pastedData = event.clipboardData
        .getData("text")
        .slice(0, numberOfChars);
      const cleanedData = extractOriginalValue(pastedData);

      setInputValue(cleanedData);
      onChange?.(cleanedData);

      if (cleanedData.length === numberOfChars) {
        onComplete?.(cleanedData);
      }
    };

    const handleFocus = () => {
      // Focus olduğunda cursor pozisyonunu ayarla
      if (inputRef.current) {
        const position = inputValue.length;
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.setSelectionRange(position, position);
          }
        }, 0);
      }
    };

    // Display value'yu formatla
    const displayValue = formatValueWithSeparators(inputValue);

    return (
      <div className={`line-code-input ${className}`}>
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={handleFocus}
          style={getInputStyle()}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={numberOfChars + separatorPositions.length}
          className="line-code-input__field"
        />
      </div>
    );
  }
);

LineCodeInput.displayName = "LineCodeInput";

export default LineCodeInput;
