import {
  Label,
  Apple,
  Category,
  ColorLens,
  EditAttributes,
  People,
  Dashboard,
  Coffee,
  Store,
  Gite,
  LocalGroceryStore,
} from "@mui/icons-material";

export const drawerWidth = 240;
export const ListItems = [
  { label: "داشبورد ", Icon: Dashboard, href: "/dashboard" },

  { label: "برچسب ", Icon: Label, href: "/dashboard/badges" },
  { label: "برند", Icon: Apple, href: "/dashboard/brands" },
  { label: "دسته بندی", Icon: Category, href: "/dashboard/categories" },
  { label: "شهر", Icon: Gite, href: "/dashboard/cities" },
  { label: "رنگ", Icon: ColorLens, href: "/dashboard/colors" },
  { label: "ویژگی", Icon: EditAttributes, href: "/dashboard/properties" },
  { label: "محصولات", Icon: Coffee, href: "/dashboard/products" },
  { label: "کاربران", Icon: People, href: "/dashboard/users" },
  { label: "فروشندگان ", Icon: Store, href: "/dashboard/sellers" },
  { label: "سفارشات", Icon: LocalGroceryStore, href: "/dashboard/orders" },
];
