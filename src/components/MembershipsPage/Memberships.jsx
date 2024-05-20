import React from "react";
import MembershipsFooter from "./MembershipsFooter";
import MembershipsHeader from "./MembershipsHeader";
import MembershipsMain from "./MembershipsMain";
import { Box } from "@mui/material";
import MembershipsModal from "../Modal/MembershipsModal";
import ChangeModal from "../Modal/ChangeModal";

const Memberships = () => {
  return (
    <>
      <Box>
        <MembershipsHeader />
        <MembershipsMain />
        <MembershipsFooter />
      </Box>
      <ChangeModal />
      <MembershipsModal />
    </>
  );
};

export default Memberships;
