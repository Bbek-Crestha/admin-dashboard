import { useState } from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="Sidebar">
			{/* logo */}
			<div className="logo">
				<img src={Logo} alt="shop logo" />

				<span>
					Sh<span>o</span>ps
				</span>
			</div>

			{/* menu */}
			<div className="menu">
				{SidebarData.map((item, index) => {
					return (
						<div
							className={selected === index ? "menuItem active" : "menuItem"}
							key={index}
							onClick={() => setSelected(index)}
						>
							<div>
								<item.icon />
							</div>

							<span>{item.heading}</span>
						</div>
					);
				})}

				<div className="menuItem">
					<div>
						<UilSignOutAlt />
					</div>

					<span>Logout</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
