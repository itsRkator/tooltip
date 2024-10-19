# Tooltip Component

A responsive and accessible web-based tooltip component that provides contextual information on hover or click interactions. This component features two modes of activation: a hover tip that disappears when the mouse moves away, and a click tip that remains visible until the user clicks outside the tooltip area or presses a close button.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Component Architecture](#component-architecture)
- [Technologies Used](#technologies-used)
- [Design and Decision-Making Process](#design-and-decision-making-process)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

```
    tooltip-component/
    ├── node_modules
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── components
    │   │   ├── Tooltip.css
    │   │   └── Tooltip.tsx
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── logo.svg
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   └── setupTests.ts
    ├── .gitignore
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── README.old.md
    └── tsconfig.json
```

## Installation

To get started with the tooltip component, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itsRkator/tooltip.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd tooltip
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the application:**

   ```bash
   npm start
   ```

5. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Usage

To use the tooltip component in your application, import it and pass the necessary props as shown below:

```jsx
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip
        content="This is a tooltip handled on mouse hover event!"
        trigger="hover"
      >
        Hover!
      </Tooltip>
      <Tooltip
        content="This is a tooltip handled on mouse click event!"
        trigger="click"
      >
        Click!
      </Tooltip>
    </div>
  );
}

export default App;
```

## Component Architecture

The tooltip component is structured as follows:

- **Tooltip.tsx**: The main React component that handles the tooltip logic and rendering.
- **Tooltip.css**: The stylesheet that defines the styles for the tooltip component, including positioning, colors, and responsive behavior.

## Technologies Used

- **Frontend Technologies**: HTML, CSS, JavaScript
- **Framework**: React
- **Language**: TypeScript
- **Tools**: npm, create-react-app

## Design and Decision-Making Process

1. **Interactivity**: The component supports both hover and click interactions, enhancing user engagement and providing flexibility in displaying information.

2. **User Experience**: Tooltips are designed to be non-intrusive, appearing only when necessary and adapting their position dynamically to avoid clipping or obscuring other UI elements.

3. **Accessibility**: The tooltip component includes ARIA attributes for accessibility, ensuring it is operable via keyboard controls and readable by screen readers.

4. **Responsive Design**: The tooltip adapts its position based on available screen space, ensuring a consistent experience across various devices and screen sizes.

5. **Transitions**: Smooth transitions are implemented for the appearance and disappearance of tooltips to enhance visual interaction.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
