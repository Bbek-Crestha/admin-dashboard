import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Card.css";
import { color } from "@mui/system";

const Card = ({ card }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<AnimateSharedLayout>
			{expanded ? <ExpandedCard /> : <CompactCard card={card} />}
		</AnimateSharedLayout>
	);
};

// Compact Card
const CompactCard = ({ card: { title, png: Png, value, barValue, color } }) => {
	return (
		<div
			className="CompactCard"
			style={{
				background: color.background,
				boxShadow: color.boxShadow,
			}}
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
		</div>
	);
};

// Expanded Card
const ExpandedCard = ({ card }) => {
	return <div className="ExpandedCard">Expanded Card</div>;
};

export default Card;
