import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

import "./Card.css";

const Card = ({ card }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard card={card} setExpanded={() => setExpanded(false)} />
			) : (
				<CompactCard card={card} setExpanded={() => setExpanded(true)} />
			)}
		</AnimateSharedLayout>
	);
};

// Compact Card
const CompactCard = ({
	card: { title, png: Png, value, barValue, color },
	setExpanded,
}) => {
	return (
		<motion.div
			className="CompactCard"
			style={{
				background: color.background,
				boxShadow: color.boxShadow,
			}}
			onClick={setExpanded}
			layoutId="expandableCard"
		>
			<div className="radialBar">
				<CircularProgressbar value={barValue} text={`${barValue}%`} />

				<span>{title}</span>
			</div>

			<div className="detail">
				<Png />

				<span>${value}</span>

				<span>Last 24 hours</span>
			</div>
		</motion.div>
	);
};

// Expanded Card
const ExpandedCard = ({ card: { color, title, series }, setExpanded }) => {
	const data = {
		options: {
			chart: {
				type: "area",
				height: "auto",
			},
			dropShadow: {
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				color: "#000",
				opacity: 0.35,
			},
			fill: {
				colors: ["#fff"],
				type: "gradient",
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
				colors: ["white"],
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm",
				},
			},
			grid: {
				show: true,
			},
			xaxis: {
				type: "datetime",
				categories: [
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z",
				],
			},
		},
	};

	return (
		<motion.div
			className="ExpandedCard"
			style={{ background: color.background, boxShadow: color.boxShadow }}
			layoutId="expandableCard"
		>
			<div
				style={{
					alignSelf: "flex-end",
					cursor: "pointer",
					color: "white",
				}}
			>
				<UilTimes onClick={setExpanded} />
			</div>

			<span>{title}</span>

			<div className="chartContainer">
				<Chart series={series} type="area" options={data.options} />
			</div>

			<span>Last 24 hours</span>
		</motion.div>
	);
};

export default Card;
