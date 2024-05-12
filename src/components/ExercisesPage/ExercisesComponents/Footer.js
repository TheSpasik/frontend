import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../../assets/img/dumble.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made by Illia Spasonov
      </Typography>
    </Box>
  );
};

export default Footer;
