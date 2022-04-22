import "./Cards.css";
import { CardsData } from "../../Data/Cards-Data";
import Card from "../Card/Card";

const Cards = () => {
	return (
		<div className="Cards">
			{CardsData.map((card, id) => {
				return (
					<div className="parentContainer">
						<Card card={card} />
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
