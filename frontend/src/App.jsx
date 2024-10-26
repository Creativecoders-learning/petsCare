import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>home pages</h1>
      <Outlet></Outlet>
    </div>
  )
}
