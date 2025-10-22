import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { logoutWithGithub } from "../../actions/auth";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn("md:bg-muted overflow-auto p-4 flex flex-col", className)}
    >
      <header className="hidden md:block border-b dark:border-b-border border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TT
          </AvatarFallback>
        </Avatar>
        <form action={logoutWithGithub}>
          <Button variant="outline">Logout</Button>
        </form>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
