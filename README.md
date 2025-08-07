# React Code Input

[![npm version](https://badge.fury.io/js/react-code-input.svg)](https://www.npmjs.com/package/react-code-input)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A highly customizable React component library for code input fields. Perfect for verification codes, OTP inputs, PIN entries, and more. Supports two distinct design patterns: individual boxes and single line inputs.

## 🚀 Features

- ✅ **Two Design Variants**: Box-style (individual inputs) and Line-style (single input with spacing)
- ✅ **Full TypeScript Support**: Complete type safety and IntelliSense
- ✅ **Highly Customizable**: Extensive styling options for borders, colors, fonts, and spacing
- ✅ **Separator Support**: Add custom separators at specified positions
- ✅ **Keyboard Navigation**: Arrow keys, backspace, and automatic focus management
- ✅ **Paste Support**: Smart paste handling with automatic formatting
- ✅ **Ref Methods**: Programmatic control with getValue, setValue, clear, and focus
- ✅ **Responsive Design**: Mobile-friendly with responsive breakpoints
- ✅ **Accessibility**: ARIA-compliant and keyboard accessible
- ✅ **Zero Dependencies**: Lightweight with no external dependencies

## 📦 Installation

```bash
npm install react-code-input
```

## 🎯 Quick Start

### BoxCodeInput (Individual Boxes)

```jsx
import React from "react";
import { BoxCodeInput } from "react-code-input";

function App() {
  const handleComplete = (value) => {
    console.log("Code entered:", value);
  };

  return (
    <BoxCodeInput
      numberOfChars={6}
      separatorPositions={[3]}
      separatorChar="-"
      onChange={(value) => console.log("Current value:", value)}
      onComplete={handleComplete}
      autoFocus
    />
  );
}
```

### LineCodeInput (Single Line with Spacing)

```jsx
import React from "react";
import { LineCodeInput } from "react-code-input";

function App() {
  const handleComplete = (value) => {
    console.log("Code entered:", value);
  };

  return (
    <LineCodeInput
      numberOfChars={8}
      separatorPositions={[4]}
      separatorChar="/"
      letterSpacing={12}
      onChange={(value) => console.log("Current value:", value)}
      onComplete={handleComplete}
    />
  );
}
```

## 📚 API Reference

### BoxCodeInput Props

| Prop                 | Type                      | Default         | Description                                          |
| -------------------- | ------------------------- | --------------- | ---------------------------------------------------- |
| `numberOfChars`      | `number`                  | **required**    | Number of characters/boxes                           |
| `borderTop`          | `boolean`                 | `true`          | Show top border                                      |
| `borderRight`        | `boolean`                 | `true`          | Show right border                                    |
| `borderBottom`       | `boolean`                 | `true`          | Show bottom border                                   |
| `borderLeft`         | `boolean`                 | `true`          | Show left border                                     |
| `border`             | `boolean`                 | `true`          | Show all borders (overrides individual border props) |
| `borderThickness`    | `number`                  | `1`             | Border thickness in pixels                           |
| `borderColor`        | `string`                  | `'#ccc'`        | Border color (hex, rgb, or named colors)             |
| `backgroundColor`    | `string`                  | `'transparent'` | Background color                                     |
| `fontSize`           | `number`                  | `16`            | Font size in pixels                                  |
| `fontWeight`         | `number`                  | `400`           | Font weight (100-900)                                |
| `textColor`          | `string`                  | `'#000'`        | Text color                                           |
| `borderRadius`       | `number`                  | `4`             | Border radius in pixels                              |
| `width`              | `number`                  | `40`            | Width of each box in pixels                          |
| `height`             | `number`                  | `40`            | Height of each box in pixels                         |
| `separatorPositions` | `number[]`                | `[]`            | Positions where separators should appear             |
| `separatorChar`      | `string`                  | `'-'`           | Character to use as separator                        |
| `onChange`           | `(value: string) => void` | -               | Called when value changes                            |
| `onComplete`         | `(value: string) => void` | -               | Called when all characters are entered               |
| `value`              | `string`                  | `''`            | Controlled value                                     |
| `placeholder`        | `string`                  | `''`            | Placeholder text for each box                        |
| `disabled`           | `boolean`                 | `false`         | Disable the input                                    |
| `autoFocus`          | `boolean`                 | `false`         | Auto focus first input on mount                      |
| `className`          | `string`                  | `''`            | Additional CSS class                                 |
| `style`              | `React.CSSProperties`     | `{}`            | Additional inline styles                             |

### LineCodeInput Props

| Prop                 | Type                            | Default         | Description                                   |
| -------------------- | ------------------------------- | --------------- | --------------------------------------------- |
| `numberOfChars`      | `number`                        | **required**    | Number of characters                          |
| `borderTop`          | `boolean`                       | `true`          | Show top border                               |
| `borderRight`        | `boolean`                       | `true`          | Show right border                             |
| `borderBottom`       | `boolean`                       | `true`          | Show bottom border                            |
| `borderLeft`         | `boolean`                       | `true`          | Show left border                              |
| `border`             | `boolean`                       | `true`          | Show all borders                              |
| `borderThickness`    | `number`                        | `1`             | Border thickness in pixels                    |
| `borderColor`        | `string`                        | `'#ccc'`        | Border color                                  |
| `backgroundColor`    | `string`                        | `'transparent'` | Background color                              |
| `fontSize`           | `number`                        | `16`            | Font size in pixels                           |
| `fontWeight`         | `number`                        | `400`           | Font weight                                   |
| `textColor`          | `string`                        | `'#000'`        | Text color                                    |
| `textAlign`          | `'center' \| 'left' \| 'right'` | `'center'`      | Text alignment                                |
| `letterSpacing`      | `number`                        | `8`             | Space between characters in pixels            |
| `borderRadius`       | `number`                        | `4`             | Border radius in pixels                       |
| `paddingTop`         | `number`                        | `12`            | Top padding in pixels                         |
| `paddingRight`       | `number`                        | `16`            | Right padding in pixels                       |
| `paddingBottom`      | `number`                        | `12`            | Bottom padding in pixels                      |
| `paddingLeft`        | `number`                        | `16`            | Left padding in pixels                        |
| `width`              | `number`                        | -               | Fixed width (auto-calculated if not provided) |
| `separatorPositions` | `number[]`                      | `[]`            | Positions for separators                      |
| `separatorChar`      | `string`                        | `'-'`           | Separator character                           |
| `onChange`           | `(value: string) => void`       | -               | Value change callback                         |
| `onComplete`         | `(value: string) => void`       | -               | Completion callback                           |
| `value`              | `string`                        | `''`            | Controlled value                              |
| `placeholder`        | `string`                        | `''`            | Placeholder text                              |
| `disabled`           | `boolean`                       | `false`         | Disable input                                 |
| `autoFocus`          | `boolean`                       | `false`         | Auto focus on mount                           |
| `className`          | `string`                        | `''`            | CSS class                                     |
| `style`              | `React.CSSProperties`           | `{}`            | Inline styles                                 |

### Ref Methods

Both components support ref methods for programmatic control:

| Method                    | Description                              |
| ------------------------- | ---------------------------------------- |
| `getValue()`              | Returns the current input value          |
| `setValue(value: string)` | Sets the input value                     |
| `clear()`                 | Clears the input and focuses first field |
| `focus()`                 | Focuses the appropriate input field      |

## 🎨 Usage Examples

### Using Refs for Programmatic Control

```jsx
import React, { useRef } from "react";
import { BoxCodeInput, CodeInputRef } from "react-code-input";

function App() {
  const inputRef = useRef < CodeInputRef > null;

  const handleGetValue = () => {
    const value = inputRef.current?.getValue();
    alert(`Current value: ${value}`);
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleSetValue = () => {
    inputRef.current?.setValue("123456");
  };

  return (
    <div>
      <BoxCodeInput
        ref={inputRef}
        numberOfChars={6}
        borderColor="#3b82f6"
        backgroundColor="white"
      />

      <div>
        <button onClick={handleGetValue}>Get Value</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSetValue}>Set Value</button>
      </div>
    </div>
  );
}
```

### Phone Number Input

```jsx
<BoxCodeInput
  numberOfChars={11}
  separatorPositions={[1, 4, 7]}
  separatorChar=" "
  borderColor="#6b7280"
  textColor="#374151"
  placeholder="0"
  width={35}
  height={40}
/>
```

### Credit Card Number

```jsx
<LineCodeInput
  numberOfChars={16}
  separatorPositions={[4, 8, 12]}
  separatorChar=" "
  borderColor="#f59e0b"
  textColor="#92400e"
  letterSpacing={8}
  textAlign="center"
  placeholder="0000 0000 0000 0000"
/>
```

### IBAN Input

```jsx
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
```

### OTP Verification

```jsx
<BoxCodeInput
  numberOfChars={6}
  borderColor="#10b981"
  backgroundColor="#f0fdf4"
  textColor="#065f46"
  fontSize={24}
  fontWeight={600}
  borderRadius={8}
  width={50}
  height={50}
  autoFocus
  onComplete={(code) => {
    // Verify OTP
    verifyOTP(code);
  }}
/>
```

### Custom Styling

```jsx
<LineCodeInput
  numberOfChars={8}
  separatorPositions={[4]}
  separatorChar="-"
  borderColor="#ec4899"
  backgroundColor="#fdf2f8"
  textColor="#be185d"
  fontSize={20}
  fontWeight={500}
  letterSpacing={15}
  borderRadius={12}
  paddingTop={20}
  paddingBottom={20}
  paddingLeft={25}
  paddingRight={25}
  style={{
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  }}
/>
```

## 🎯 Advanced Features

### Separator Positioning

Separators are added **after** the specified character positions:

```jsx
// For numberOfChars={8} and separatorPositions={[2, 6]}
// Input: "12345678"
// Display: "12-345678" (separator after 2nd position)
//          "12-3456-78" (separator after 6th position)

<LineCodeInput
  numberOfChars={8}
  separatorPositions={[2, 6]}
  separatorChar="-"
/>
```

### Controlled vs Uncontrolled

```jsx
// Uncontrolled (recommended for most cases)
<BoxCodeInput numberOfChars={6} onChange={(value) => console.log(value)} />;

// Controlled
function ControlledExample() {
  const [value, setValue] = useState("");

  return <BoxCodeInput numberOfChars={6} value={value} onChange={setValue} />;
}
```

### Custom Validation

```jsx
function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (newValue) => {
    setValue(newValue);
    // Custom validation logic
    setIsValid(newValue.length === 0 || /^\d+$/.test(newValue));
  };

  return (
    <BoxCodeInput
      numberOfChars={6}
      value={value}
      onChange={handleChange}
      borderColor={isValid ? "#10b981" : "#ef4444"}
      backgroundColor={isValid ? "#f0fdf4" : "#fef2f2"}
    />
  );
}
```

## 🎨 Styling

### CSS Classes

The components provide CSS classes for custom styling:

```css
/* BoxCodeInput */
.box-code-input {
  /* Container styles */
}

.box-code-input__field {
  /* Individual input field styles */
}

.box-code-input__separator {
  /* Separator styles */
}

/* LineCodeInput */
.line-code-input {
  /* Container styles */
}

.line-code-input__field {
  /* Input field styles */
}
```

### Custom CSS

```css
.my-custom-input .box-code-input__field {
  border: 2px solid #3b82f6;
  border-radius: 8px;
  font-family: "Monaco", "Menlo", monospace;
}

.my-custom-input .box-code-input__field:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

## 📱 Responsive Design

The components include responsive breakpoints:

```css
@media (max-width: 640px) {
  .box-code-input {
    gap: 4px; /* Reduced gap on mobile */
  }

  .line-code-input__field {
    font-size: 14px !important;
    letter-spacing: 4px !important;
    padding: 8px 12px !important;
  }
}
```

## ⚡ Performance

- **Lightweight**: ~4KB gzipped
- **Zero Dependencies**: No external dependencies
- **Optimized Rendering**: Minimal re-renders with React best practices
- **Memory Efficient**: Proper cleanup and ref management

## 🧪 Testing

```jsx
import { render, fireEvent, screen } from "@testing-library/react";
import { BoxCodeInput } from "react-code-input";

test("handles input correctly", () => {
  const handleChange = jest.fn();

  render(
    <BoxCodeInput
      numberOfChars={4}
      onChange={handleChange}
      data-testid="code-input"
    />
  );

  const inputs = screen.getAllByRole("textbox");

  fireEvent.change(inputs[0], { target: { value: "1" } });
  expect(handleChange).toHaveBeenCalledWith("1");
});
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you find this package helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## 📊 Browser Support

- Chrome ≥ 60
- Firefox ≥ 60
- Safari ≥ 12
- Edge ≥ 79

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/react-code-input)
- [GitHub Repository](https://github.com/yourusername/react-code-input)
- [Issues](https://github.com/yourusername/react-code-input/issues)
- [Changelog](CHANGELOG.md)

---

Made with ❤️ by [Your Name]
