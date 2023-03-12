import React from "react";
import Table from "../../components/Table/Table";

const saved = {
  headers: ["id", "filename"],
  url: "http://localhost:8080/saved",
  title: "Saved",
};

const Home = () => {
  return (
    <div className="w-full bg-gray-500 overflow-scroll">
      <Table info={saved} />
    </div>
  );
};

export default Home;
