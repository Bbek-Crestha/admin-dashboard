import "./Updates.css";
import { UpdatesData } from "../../Data/Updates-Data";

const Updates = () => {
	return (
		<div className="Updates">
			{UpdatesData.map((update) => {
				const { img, name, noti, time } = update;

				return (
					<div className="update">
						<img src={img} alt="profile" />

						<div className="noti">
							<div style={{ marginBottom: "0.5rem" }}>
								<span>{name}</span>

								<span> {noti}</span>
							</div>

							<span>{time}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Updates;
