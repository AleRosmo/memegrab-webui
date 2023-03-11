import React from "react";
import Table from "../../components/Table/Table";

const tableHeaders = ["Si", "Siii", "Siuuuuuuuuu"];

const tableRows = [
  ["dio", "mmmh", "bubu"],
  ["1", "2", "3"],
];

const Home = () => {
  return (
    <>
      <Table headers={tableHeaders} rowData={tableRows} />
    </>
  );
};

export default Home;
