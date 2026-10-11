# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
React.js
TypeScript
Tailwind CSS
Vite
## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript to build UI easily.

### 2. What is the difference between props and state?

Props pass data between components. State stores data that can change over time.

### 3. What does the useState hook do, and where did you use it?

useState manages changing data. I used it to manage technologies, the selected stack, and loading state.

### 4. What does the useEffect hook do, and why did you need it?

useEffect handles side effects. I used it to fetch technology data from the JSON file.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays UI based on a condition. I used it to show a message when the stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?

The parent passes data using props. The child can call a callback function passed by the parent to send information back.
