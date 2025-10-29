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
  {
    id: 4,
    title: "User Guide",
    newTab: false,
    path: "/user-guide",
    submenu: [
      {
        id: 41,
        title: "Installation & Maintenance",
        newTab: false,
        path: "/user-guide/installation-guide",
      },
      {
        id: 42,
        title: "Check Warranty",
        newTab: false,
        path: "/warranty-check",
      },
    ]
  },
  
  {
    id: 6,
    title: "pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Blog details with sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
