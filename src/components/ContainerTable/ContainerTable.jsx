import React from "react";
import PropTypes from "prop-types";
import Table from "../Table/Table";
import Container from "../basic/Container/Container";

const ContainerTable = ({ title, info }) => (
	<Container title={title}>
		<Table info={info}></Table>
	</Container>
);

ContainerTable.propTypes = {};

ContainerTable.defaultProps = {};

export default ContainerTable;
