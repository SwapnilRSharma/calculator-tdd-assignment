# Calculator TDD Project

A simple calculator application built using Test-Driven Development (TDD) approach. This project demonstrates clean code practices and test-first development methodology.

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Supports custom delimiters
- Handles multiple input formats (commas, newlines)
- Input validation and error handling
  - Negative number detection
  - Division by zero protection

## Technology Stack

- JavaScript
- Vite (Build tool)
- Jest (Testing framework)

## Getting Started

1. Clone the repository
2. Install dependencies:
```

3. Run tests:
```bash
npm test
```

4. Start development server:
```bash
npm run dev
```

## Project Structure

- `src/calculator.js` - Core calculator logic
- `src/lib/utils.js` - Utility functions for input processing
- `src/main.js` - Frontend entry point
- `tests/` - Test suite directory

## Testing

The project follows TDD principles with comprehensive test coverage. Run tests in watch mode:

```bash
npm test
```

## Build

To build for production:

```bash
npm run build
```
