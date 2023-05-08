import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home, {loader as homeLoader, action as homeAction,} from "./routes/Home.jsx";
import Arts from "./routes/Arts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader, action: homeAction,  },
      { path: "arts", element: <Arts /> }
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
