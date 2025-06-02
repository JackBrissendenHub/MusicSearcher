import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Search from "./pages/Search.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchAccessToken } from "./services/SpotifyApi.jsx";

const router = createBrowserRouter([{ path: "/", element: <Search /> }]);

fetchAccessToken();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
