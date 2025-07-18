import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, UserCog } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CheckAuth from "../common/CheckAuth";

const headerMenuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
];

const MenuItems = () => {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {headerMenuItems.map((menuItem) => (
        <Label key={menuItem.id}>{menuItem.label}</Label>
      ))}
    </nav>
  );
};

const HeaderRightContent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {false ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="bg-black">
              <AvatarFallback className="bg-black text-white font-extrabold">
                V
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" className="w-56">
            <DropdownMenuLabel>Loged in as Vishal</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <UserCog className="mr-2 h-2 w-" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-2 w-" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={() => navigate("/auth/login")} variant="outline">
          Login / Sign Up
        </Button>
      )}
    </div>
  );
};

const UserHeader = () => {
  return (
    <>
      <CheckAuth />
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle header menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-full max-w-xs">
              <MenuItems />
            </SheetContent>
          </Sheet>

          <div className="hidden lg:block">
            <MenuItems />
          </div>

          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
