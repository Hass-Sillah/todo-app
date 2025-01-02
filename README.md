# To-Do App - React + TypeScript + Vite

This project is a **To-Do List App** built using **React**, **TypeScript**, and **Vite**. It supports adding, marking, and deleting tasks with persistence using **localStorage**. The app is styled with **SCSS** and utilises **IBM Carbon Components** for a modern UI design.

---

## **Features**

- **Add Tasks**: Quickly add new tasks with a simple input form.
- **Mark as Completed**: Toggle the status of tasks between completed and pending.
- **Delete Tasks**: Remove tasks from the list.
- **Persisted Data**: Tasks are saved in **localStorage** and persist across page reloads.
- **Responsive Design**: Optimised for different screen sizes.
- **Modern UI**: Built with **Carbon Components** and **SCSS**.

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repository/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## **Running the App**

To start the development server:
```bash
npm run dev
```

This will launch the app at **`http://localhost:5173/`** (or the next available port).

---

## **Running Tests**

To run unit tests:
```bash
npm run test
```

This will execute the tests using **Vitest** and **React Testing Library**.

---

## **Building for Production**

To build the app for production:
```bash
npm run build
```

This will create an optimized build in the **`dist/`** directory.

To preview the production build locally:
```bash
npm run preview
```

---

## **File Structure**

```
src/
  components/
    ToDoInput/ - Input form component
    ToDoList/ - List component to display tasks
    ToDoItem/ - Individual task item
    _variables.scss - Shared style variables
    global.scss - Global styles
  App.tsx - Main application logic
  main.tsx - Entry point
  vite.config.ts - Vite configuration
  test/ - Test setup and utilities
```
---

## **Environment Variables**

No additional configuration required. The app uses **localStorage** for data persistence.

---

## **Dependencies**

Key dependencies:
- **React**: ^18.x
- **Vite**: ^6.x
- **Carbon Components**: ^10.x
- **UUID**: ^9.x
- **SCSS**: ^1.x

Dev dependencies:
- **Vitest**: ^2.x
- **@testing-library/react**: ^14.x
- **@testing-library/jest-dom**: ^6.x

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For questions or feedback, feel free to reach out at [Hassan.sillah98@gmail.com](mailto:Hassan.sillah98@gmail.com).

