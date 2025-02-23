import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { useDrawer } from "./context/ToggleDriverContext";
import { ListItems } from "./contants";
import Link from "next/link";
function AppBarList() {
  const { open } = useDrawer();
  return (
    <List>
      {ListItems.map(({ label, Icon, href }, index) => (
        <ListItem key={label} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            LinkComponent={Link}
            href={href}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                mr: open ? 3 : "auto",
              }}
            >
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default AppBarList;
