/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function ActiveRoute({to, children}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      {children}
    </NavLink>
  );
}
