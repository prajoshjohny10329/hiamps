import { Menu } from "@/types/Menu";

export const adminMenuData: Menu[] = [
  {
    id: 1,
    title: "Dashboard",
    newTab: false,
    path: "/admin",
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    path: "/admin/products",
    submenu: [
      {
        id: 21,
        title: "View Product",
        newTab: false,
        path: "/admin/products",
      },
      {
        id: 22,
        title: "Add New Product",
        newTab: false,
        path: "/admin/products/add-product",
      },
      {
        id: 23,
        title: "Category",
        newTab: false,
        path: "/admin/category",
      }
    ]
  },
  {
    id: 3,
    title: "Warranties",
    newTab: false,
    path: "/admin/warranties",
  },
];
