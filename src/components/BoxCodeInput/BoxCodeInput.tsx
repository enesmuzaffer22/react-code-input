import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { BoxCodeInputProps, CodeInputRef } from "../../types";
import "./BoxCodeInput.css";

const BoxCodeInput = forwardRef<CodeInputRef, BoxCodeInputProps>(
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
      borderRadius = 4,
      width = 40,
      height = 40,
      gap = 8,
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

    const [values, setValues] = useState<string[]>(
      Array(numberOfChars)
        .fill("")
        .map((_, index) => value[index] || "")
    );

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Value prop değiştiğinde internal state'i güncelle
    useEffect(() => {
      const newValues = Array(numberOfChars)
        .fill("")
        .map((_, index) => value[index] || "");
      setValues(newValues);
    }, [value, numberOfChars]);

    // İlk input'a otomatik focus
    useEffect(() => {
      if (autoFocus && inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, [autoFocus]);

    // Ref metodları
    useImperativeHandle(ref, () => ({
      getValue: () => values.join(""),
      setValue: (newValue: string) => {
        const newValues = Array(numberOfChars)
          .fill("")
          .map((_, index) => newValue[index] || "");
        setValues(newValues);
      },
      clear: () => {
        setValues(Array(numberOfChars).fill(""));
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      },
      focus: () => {
        const firstEmptyIndex = values.findIndex((val) => val === "");
        const targetIndex = firstEmptyIndex === -1 ? 0 : firstEmptyIndex;
        if (inputRefs.current[targetIndex]) {
          inputRefs.current[targetIndex].focus();
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

    const getInputStyle = (): React.CSSProperties => ({
      ...getBorderStyle(),
      backgroundColor,
      fontSize: `${fontSize}px`,
      fontWeight,
      color: textColor,
      borderRadius: `${borderRadius}px`,
      width: `${width}px`,
      height: `${height}px`,
      textAlign: "center",
      outline: "none",
    });

    // Event handlers
    const handleInputChange = (
      index: number,
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const inputValue = event.target.value;
      const lastChar = inputValue.slice(-1);

      // Sadece tek karakter kabul et
      if (inputValue.length <= 1) {
        const newValues = [...values];
        newValues[index] = lastChar;
        setValues(newValues);

        const currentValue = newValues.join("");
        onChange?.(currentValue);

        // Otomatik sonraki input'a geçiş
        if (lastChar && index < numberOfChars - 1) {
          inputRefs.current[index + 1]?.focus();
        }

        // Tamamlandığında callback çağır
        if (
          currentValue.length === numberOfChars &&
          !currentValue.includes("")
        ) {
          onComplete?.(currentValue);
        }
      }
    };

    const handleKeyDown = (
      index: number,
      event: KeyboardEvent<HTMLInputElement>
    ) => {
      // Backspace ile önceki input'a geçiş
      if (event.key === "Backspace" && !values[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      // Arrow keys ile navigasyon
      if (event.key === "ArrowLeft" && index > 0) {
        event.preventDefault();
        inputRefs.current[index - 1]?.focus();
      }

      if (event.key === "ArrowRight" && index < numberOfChars - 1) {
        event.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (event: React.ClipboardEvent) => {
      event.preventDefault();
      const pastedData = event.clipboardData
        .getData("text")
        .slice(0, numberOfChars);
      const newValues = Array(numberOfChars)
        .fill("")
        .map((_, index) => pastedData[index] || "");
      setValues(newValues);

      const currentValue = newValues.join("");
      onChange?.(currentValue);

      if (currentValue.length === numberOfChars) {
        onComplete?.(currentValue);
      }

      // Focus'u son dolu input'a taşı
      const lastFilledIndex =
        newValues
          .map((val, idx) => (val !== "" ? idx : -1))
          .filter((idx) => idx !== -1)
          .pop() ?? -1;
      const targetIndex = Math.min(lastFilledIndex + 1, numberOfChars - 1);
      inputRefs.current[targetIndex]?.focus();
    };

    // Separator pozisyonlarını kontrol et
    const shouldShowSeparator = (index: number) => {
      return separatorPositions.includes(index + 1);
    };

    return (
      <div
        className={`box-code-input ${className}`}
        onPaste={handlePaste}
        style={{ gap: `${gap}px`, ...style }}
      >
        {values.map((value, index) => (
          <React.Fragment key={index}>
            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={getInputStyle()}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={1}
              className="box-code-input__field"
            />
            {shouldShowSeparator(index) && (
              <span
                className="box-code-input__separator"
                style={{ fontSize: `${fontSize}px` }}
              >
                {separatorChar}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);

BoxCodeInput.displayName = "BoxCodeInput";

export default BoxCodeInput;
