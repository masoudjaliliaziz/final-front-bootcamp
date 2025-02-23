"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//my imports------------
import { DrawerHeader } from "./components/DrawerHeader";

import { Drawer } from "./components/Drawer";
import DashboardAppBar from "./DashboardAppBar";
import { useDrawer } from "./context/ToggleDriverContext";
import AppBarList from "./AppBarList";

function FullLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const { open, closeOpen } = useDrawer();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardAppBar />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={closeOpen}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AppBarList />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default FullLayout;
