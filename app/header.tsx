"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import MenuLinks from "./components/menuLinks";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="px-3">
          <p className="font-bold text-inherit">logo here</p>
        </NavbarBrand>
      </NavbarContent>

      <MenuLinks key="desktop" className="hidden sm:flex gap-4 item-center" />
      <NavbarMenu >
        <MenuLinks key="mobile" className="flex flex-col mt-12  gap-8" />
      </NavbarMenu>
    </Navbar>
  );
}
