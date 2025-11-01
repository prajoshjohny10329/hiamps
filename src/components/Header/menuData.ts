import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 0,
    title: "Admin",
    newTab: false,
    path: "/admin",
  },
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 1,
    title: "About Us",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    path: "/products",
    submenu: [
      {
        id: 20,
        title: "View All Products",
        newTab: false,
        path: "/products/",
      },
      {
        id: 21,
        title: "Power Backup Batteries",
        newTab: false,
        path: "/products/power-backup-batteries",
      },
      {
        id: 23,
        title: "Lithium Batteries",
        newTab: false,
        path: "/products/lithium-batteries",
      },
      {
        id: 22,
        title: "Inverter/UPS",
        newTab: false,
        path: "/products/inverter-ups",
      },
      {
        id: 23,
        title: "UPS Battery Cabinet",
        newTab: false,
        path: "/products/battery-cabinet",
      },
    ]
  },
  {
    id: 3,
    title: "Warranty",
    newTab: false,
    path: "/warranty-register",
    submenu: [
      {
        id: 31,
        title: "Register Warranty ",
        newTab: false,
        path: "/warranty-register",
      },
      {
        id: 32,
        title: "Check Warranty",
        newTab: false,
        path: "/warranty-check",
      },
    ]
  },
];
