import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "../Header/Header";

export const Layout:React.FC<{home:ReactNode}> = ({home}) => {
  return (
    <>
      <Header />
      
    </>
  );
};
