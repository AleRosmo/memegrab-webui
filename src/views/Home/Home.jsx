import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ContainerTable from "../../components/ContainerTable";

export default function Home({ children }) {
  const context = useOutletContext()
  console.log(context)
  
  return (
    <>
      <ContainerTable key="test1" title="test1" info={children} />
      <ContainerTable key="test2" title="test2" info={children} />
      <ContainerTable key="test3" title="test3" info={children} />
    </>
  );
}
