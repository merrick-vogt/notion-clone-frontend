# Notion Clone (Front-End Only)

## Getting Started

This project uses Vite and SWC for a fast and efficient development experience. Vite provides a no-bundle dev server for Vue.js/React projects and SWC is a super-fast JavaScript/TypeScript compiler.

To start the project, you need to have Node.js and npm installed. Once they are installed, you can install the project dependencies by running `npm install` in the project directory. After the dependencies are installed, you can start the development server by running `npm run dev`.

## Component Structure

### App Component

The `App` component is the root component of the application. It sets up the initial state of the application using the `createPage` utility function and provides this state to the rest of the app using the `AppStateProvider` context provider. The `App` component renders the `Page` component.

### Page Component

The `Page` component is a child component of the `App` component. It is responsible for rendering the main content of the page. Here's a breakdown of the hooks and components.

The useAppState hook is used accesses the title and nodes and functions to edit them.

The useFocusedNodeIndex hook manages the index of the currently focused node.

The Cover component renders the cover picture at the top of the page.

The Title component is used to render and manage the page title.

### Node Switcher Component

The nodes array from the application state is mapped to NodeTypeSwitcher components. Each NodeTypeSwitcher is given a unique key, the node data, the setFocusedNodeIndex function, and a boolean indicating whether it is currently focused.

The Spacer component is rendered at the end of the page. When clicked, it adds a new node to the end of the nodes array and focuses it.

## Data Management

Data management in this application is handled using React's Context API. The `AppStateProvider` component is a context provider that allows child components to consume the application state and update it using the context's value.

The initial state of the application is created using the `createPage` utility function. This state is passed to the `AppStateProvider` and can be accessed by any component that is a child of the `AppStateProvider`.

## TypeScript Implementation

This project is written in TypeScript, a statically typed superset of JavaScript. TypeScript provides static types to JavaScript, allowing for better tooling and improved developer experience.

The project uses `.ts` and `.tsx` files. `.ts` files are used for utility functions, services, models, and custom hooks. `.tsx` files are used for React components that involve JSX syntax for rendering UI elements.

TypeScript is configured using the `tsconfig.json` file in the root of the project. This file specifies the root files and the compiler options required to compile the project.