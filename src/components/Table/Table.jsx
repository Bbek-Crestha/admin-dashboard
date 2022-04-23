import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Table.css";

function createData(name, trackingId, date, status) {
	return { name, trackingId, date, status };
}

const rows = [
	createData("4k Monitor", 1890848, "20 March, 2022", "Approved"),
	createData("Gold Rolex", 1890847, "18 March, 2022", "Pending"),
	createData("Iphone 13", 1890846, "12 March, 2022", "Rejected"),
	createData("Airbuds 3", 1890845, "2 March, 2022", "Delivered"),
];

const makeStyles = (status) => {
	if (status === "Approved") {
		return {
			background: "green",
			color: "white",
		};
	} else if (status === "Pending") {
		return {
			background: "yellow",
			color: "white",
		};
	} else if (status === "Rejected") {
		return {
			background: "Red",
			color: "white",
		};
	} else if (status === "Delivered") {
		return {
			background: "blue",
			color: "white",
		};
	}
};

const BasicTable = () => {
	return (
		<div className="Table">
			<h3>Recent Orders</h3>

			<TableContainer
				component={Paper}
				style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
			>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Product</TableCell>
							<TableCell align="left">Tracking ID</TableCell>
							<TableCell align="left">Date</TableCell>
							<TableCell align="left">Status</TableCell>
							<TableCell align="left"></TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="left">{row.trackingId}</TableCell>
								<TableCell align="left">{row.date}</TableCell>
								<TableCell align="left">
									<span className="status" style={makeStyles(row.status)}>
										{row.status}
									</span>
								</TableCell>
								<TableCell align="left" className="Details">
									Detail
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default BasicTable;
