"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href?: string;
  icon: React.ElementType;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    icon: Users,
    children: [
      { name: "Propietarios", href: "/admin/users/owners" },
      { name: "Unidades", href: "/admin/users/units" },
      { name: "Conceptos", href: "/admin/users/concepts" },
      { name: "Usuarios", href: "/admin/users/list" },
    ],
  },
  {
    name: "Consultas",
    icon: FileText,
    children: [
      { name: "Abonos", href: "/admin/queries/credits" },
      { name: "Cargos", href: "/admin/queries/charges" },
      { name: "Tablas de amortización", href: "/admin/queries/amortization" },
    ],
  },
  {
    name: "Operativo",
    icon: Settings,
    children: [
      {
        name: "Registro de cargos y abonos",
        href: "/admin/operations/records",
      },
    ],
  },
];

export function AdminSidebar() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemName: string) => {
    setOpenItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <>
      <MobileSidebar openItems={openItems} toggleItem={toggleItem} />
      <DesktopSidebar openItems={openItems} toggleItem={toggleItem} />
    </>
  );
}

function MobileSidebar({
  openItems,
  toggleItem,
}: {
  openItems: string[];
  toggleItem: (name: string) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <LayoutDashboard className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="h-full overflow-y-auto no-scrollbar">
          <SidebarContent openItems={openItems} toggleItem={toggleItem} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DesktopSidebar({
  openItems,
  toggleItem,
}: {
  openItems: string[];
  toggleItem: (name: string) => void;
}) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white no-scrollbar">
        <SidebarContent openItems={openItems} toggleItem={toggleItem} />
      </div>
    </div>
  );
}

function SidebarContent({
  openItems,
  toggleItem,
}: {
  openItems: string[];
  toggleItem: (name: string) => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex items-center gap-x-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Admin"
          />
          <div>
            <p className="text-sm font-semibold text-gray-700">Manuel</p>
            <p className="text-xs text-gray-500">Manuel@email.com</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-6 pb-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              {!item.children ? (
                <Link
                  href={item.href!}
                  className={cn(
                    pathname === item.href
                      ? "bg-gray-50 text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" />
                  {item.name}
                </Link>
              ) : (
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => toggleItem(item.name)}
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    {item.name}
                    {openItems.includes(item.name) ? (
                      <ChevronDown className="ml-auto h-5 w-5" />
                    ) : (
                      <ChevronRight className="ml-auto h-5 w-5" />
                    )}
                  </Button>
                  {openItems.includes(item.name) && (
                    <ul className="mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className={cn(
                              pathname === child.href
                                ? "bg-gray-50 text-blue-600"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                              "block rounded-md py-2 pr-2 pl-11 text-sm leading-6"
                            )}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto px-6 py-3">
        <div className="flex items-center gap-x-4 text-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <Mail className="h-4 w-4 text-gray-500" />
          </div>
          <span className="text-gray-500">hector@email.com</span>
        </div>
      </div>
    </div>
  );
}
