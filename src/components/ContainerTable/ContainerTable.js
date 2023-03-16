import React from "react";
import PropTypes from "prop-types";
import Table from "../Table/Table";
import Container from "../Container/Container";

const ContainerTable = ({ title, info }) => (
  <Container title={title}>
    <Table info={info}></Table>
  </Container>
);

ContainerTable.propTypes = {};

ContainerTable.defaultProps = {};

export default ContainerTable;
