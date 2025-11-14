import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
   <nav className="flex flex-wrap items-center justify-between gap-2 px-4 max-w-full overflow-x-hidden">
  <ul className="flex flex-wrap space-x-4">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <Button className="shrink-0">Sign in</Button>
</nav>

  );
}