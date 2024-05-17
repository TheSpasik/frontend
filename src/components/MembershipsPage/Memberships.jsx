import React from "react";
import MembershipsFooter from "./MembershipsFooter";
import MembershipsHeader from "./MembershipsHeader";
import MembershipsMain from "./MembershipsMain";
import { Box } from "@mui/material";

const Memberships = () => {
  return (
    <Box>
      <MembershipsHeader />
      <MembershipsMain />
      <MembershipsFooter />
    </Box>
  );
};

export default Memberships;
