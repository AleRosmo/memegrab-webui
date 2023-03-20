import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import ContainerTable from "../../components/ContainerTable";
import isLogged from "../../services/auth.service";
import GetProfile from "../../services/Profile";

export default function Home({ children }) {
  const context = useOutletContext();

  console.log(context.profile);

  useEffect(() => {
    

    return () => {
      second;
    };
  }, [third]);

  return (
    <>
      <ContainerTable key="test1" title="test1" info={children} />
      <ContainerTable key="test2" title="test2" info={children} />
      <ContainerTable key="test3" title="test3" info={children} />
    </>
  );
}
