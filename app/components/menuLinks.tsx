import {
  NavbarItem,
  Link,
  Button,
  NavbarContent,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./themeSwitcher";
export default function MenuLinks(props:any) {
  return (
    <NavbarContent {...props}>
      <NavbarItem className="px-4">
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem className="px-4">
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem className="px-4">
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
      <NavbarItem>
        <ThemeSwitcher  />
      </NavbarItem>
    </NavbarContent>
  );
}
