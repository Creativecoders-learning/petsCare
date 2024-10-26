/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function ActiveRoute({to, children}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-primary" : "")}
    >
      {children}
    </NavLink>
  );
}
