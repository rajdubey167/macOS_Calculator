# macOS Scientific Calculator Clone

## Deployment Link
[macOS Scientific Calculator Clone](https://deft-parfait-08fdff.netlify.app/)

## Description
This project is a web-based clone of the macOS Scientific Calculator built using React. The application mimics the sophisticated UI/UX of the macOS calculator and provides robust functionality for basic and advanced arithmetic operations, complete with state management and additional features.

---

## Features

### UI/UX
- Responsive design that mimics the macOS Scientific Calculator.
- Clear and intuitive interface using the Roboto font.
- Includes all buttons and functionality as per the macOS Scientific Calculator.

### Functionalities
1. **Basic Operations**:
   - Addition, subtraction, multiplication, and division.
2. **Advanced Functions**:
   - Trigonometric functions (sine, cosine, tangent).
   - Logarithmic functions (natural log and base-10 log).
   - Exponents and roots (square, cube, nth power/root).
   - Factorial and reciprocal calculations.
   - Random number generation.
   - Degree/Radian toggle for trigonometric functions.
3. **Special Feature**:
   - Confetti explosion triggered by any operation involving `99` and `33` as operands, using the `react-confetti-explosion` library.
4. **Memory Functions**:
   - Memory Clear (MC), Memory Recall (MR), Memory Add (M+), and Memory Subtract (M-).
5. **Order of Operations**:
   - Handles multiple operations and parentheses correctly.
6. **Chaining Calculations**:
   - Allows using previous results as operands for new calculations.

### Bonus Features
- Theme switcher to toggle between light and dark modes.
- History feature to view past calculations.

---

## Requirements
- Proper state management for input, operations, and results.
- Handle edge cases (e.g., division by zero, large numbers).
- Implement clear, delete, and reset functionalities.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd macos-calculator-clone
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application Locally**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000/`.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   This will generate optimized production-ready files in the `build/` directory.

---

## Technologies Used
- **Frontend**: React, CSS, Roboto Font.
- **Libraries**: `react-confetti-explosion` for the confetti effect.
- **Deployment**: Netlify.

---

## How to Use
1. Perform calculations using the buttons as you would on a regular scientific calculator.
2. Use advanced functions by toggling between primary and secondary functions with the `2nd` button.
3. Toggle between degrees and radians for trigonometric functions using the `Rad` button.
4. View calculation history and reuse previous results.
5. Trigger confetti explosion by performing calculations involving `99` and `33` as operands.

---

## Explanation of Buttons
### Basic Buttons
- `0-9`: Digits 0 through 9.
- `+/-`: Changes the sign of the current number.
- `%`: Calculates the percentage.
- `÷`, `×`, `−`, `+`, `=`: Basic arithmetic operations.
- `AC`: Clears all input (resets the calculator).

### Memory Buttons
- `MC`: Clears the memory.
- `M+`: Adds the current value to the memory.
- `M-`: Subtracts the current value from the memory.
- `MR`: Recalls the value stored in memory.

### Scientific Buttons
- Parentheses for grouping expressions.
- `2nd`: Toggles between primary and secondary functions.
- Various advanced mathematical operations (e.g., `x²`, `x!`, `ln`, `sin`).
- Constants like `π` and `e`.
- Random number generation (`Rand`).

---

## Testing
- Handles edge cases like division by zero and very large/small numbers.
- Ensures correct order of operations.
- Validates confetti explosion feature with `99` and `33` operands.

---

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

---
