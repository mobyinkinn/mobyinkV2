"use client";
import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import IndustriesWeServe from "./parts/IndustriesWeServer";
import GoToTop from "../../utils/GoToTop";
import Footer from "../../utils/Footer";
const Industries = () => {
  return (
    <>
      <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
        <TabLineSection />
        <IndustriesWeServe />
        <Footer />
        <GoToTop />
      </Stack>
    </>
  );
};

export default Industries;
