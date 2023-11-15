import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

import "./sass/style.scss";

export function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
