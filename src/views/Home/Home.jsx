import React from "react";
import ContainerTable from "../../components/ContainerTable";
import Table from "../../components/Table/Table";

const Home = ({ children }) => {
  return (
    <>
      <ContainerTable title="test1" info={children} />
      <ContainerTable title="test2" info={children} />
      <ContainerTable title="test3" info={children} />
    </>
  );
};

export default Home;
