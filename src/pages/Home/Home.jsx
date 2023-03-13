import React from "react";
import Table from "../../components/Table/Table";

const Home = ({children}) => {
  return (
    <div className="w-full bg-gray-500 overflow-scroll">
      <Table info={children} />
    </div>
  );
};

export default Home;