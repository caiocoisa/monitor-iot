"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import {
  AcmeLogo,
  HomeIcon,
  LogoutIcon,
  TempIcon,
  ReportIcon,
  SettingsIcon,
} from "@/app/public/Icons";
import { useNavigation } from "@/app/hooks/useNavigation";

const menuItems = [
  { name: "Home", href: "/home", icon: HomeIcon, page: 0 },
  {
    name: "Temperature",
    href: "/temperature",
    icon: TempIcon,
    page: 1,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: ReportIcon,
    page: 2,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    page: 3,
  },
];

const User = {
  id: 1,
  name: "User Name",
};
export default function NavBar() {
  const { page, setPage } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (index: number) => {
    setPage(index);
  }
  
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-10">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6">
          {menuItems.map((link) => {
            const LinkIcon = link.icon;
            return (
              <NavbarItem key={link.name} className={link.page===page?"text-secondary":"text-foreground"}>
                <Link 
                key={link.name} 
                href={link.href} 
                onClick={()=>handleNavigation(link.page)}
                className="flex"
                >
                  <LinkIcon className="w-5 mr-1"/> {link.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{User.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="logout" color="danger" href="/">
              <LogoutIcon className="w-5"/>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((link, index) => {
          const LinkIcon = link.icon;
          return (
          <NavbarMenuItem key={link.name} className={link.page===page?"text-secondary":"text-foreground"}>
            <Link
              className="w-full text-3xl mb-3"
              href={link.href}
              onClick={()=>handleNavigation(link.page)}
            >
              <LinkIcon className="w-8 mr-4"/>
              {link.name}
            </Link>
          </NavbarMenuItem>
        )})}
      </NavbarMenu>
    </Navbar>
  );
}
