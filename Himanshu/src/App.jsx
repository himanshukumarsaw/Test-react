import React from "react";
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import QuestionPage from "./features/question/QuestionPage";
import AppLayout from "./Layout/AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/questionpage",
        element: <QuestionPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
