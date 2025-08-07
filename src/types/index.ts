// BoxCodeInput için prop tipleri
export interface BoxCodeInputProps {
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  border?: boolean;
  borderThickness?: number;
  borderColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: number;
  textColor?: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  numberOfChars: number;
  separatorPositions?: number[];
  separatorChar?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// LineCodeInput için prop tipleri
export interface LineCodeInputProps {
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  border?: boolean;
  borderThickness?: number;
  borderColor?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: number;
  textColor?: string;
  textAlign?: "center" | "left" | "right";
  letterSpacing?: number;
  borderRadius?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  width?: number;
  numberOfChars: number;
  separatorPositions?: number[];
  separatorChar?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Ref tipleri
export interface CodeInputRef {
  getValue: () => string;
  setValue: (value: string) => void;
  clear: () => void;
  focus: () => void;
}
