import { AppShell } from "@mantine/core";
import React from "react";
import Toolbar from "../../components/Header/Toolbar";

const Home = () => {
  return (
    <>
      <AppShell header={<Toolbar />}></AppShell>
    </>
  );
};

export default Home;
