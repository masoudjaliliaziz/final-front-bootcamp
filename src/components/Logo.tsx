import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/../public/coffee-beans.png";
type Props = {};

function Logo({}: Props) {
  return (
    <Stack
      mb={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{}}
    >
      <Image width={150} src={logo} alt="logo" />
      <Typography
        sx={{ fontWeight: "bold", color: "saddlebrown" }}
        variant="h5"
      >
        Lourny Coffee
      </Typography>
    </Stack>
  );
}

export default Logo;
