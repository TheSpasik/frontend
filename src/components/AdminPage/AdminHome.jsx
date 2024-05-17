import React from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminMain from "./AdminMain";
import { Box } from "@mui/material";

export const AdminHome = () => {
  return (
    <Box>
      <AdminHeader />
      <AdminMain />
      <AdminFooter />
    </Box>
  );
};
