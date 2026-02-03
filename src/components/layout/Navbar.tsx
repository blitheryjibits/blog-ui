import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="flex flex-wrap items-center justify-between gap-2 px-4 max-w-full overflow-x-hidden">
  <ul className="flex flex-wrap space-x-4">
    <li>
      <NavLink to="/"
        className = {({ isActive }: { isActive: boolean }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-gray-900"
        }> Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/"
        className = {({ isActive }: { isActive: boolean }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-gray-900"
        }> About
      </NavLink>
    </li>
    <li>
      <NavLink to="/"
        className = {({ isActive }: { isActive: boolean }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-gray-900"
        }> Contact
      </NavLink>
    </li>
  </ul>
  <Button className="shrink-0">Sign in</Button>
</nav>

  );
}