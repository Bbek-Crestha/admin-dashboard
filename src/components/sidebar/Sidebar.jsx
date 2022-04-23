import { useState } from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import { motion } from "framer-motion";

import { SidebarData } from "../../Data/Sidebar-Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

const Sidebar = () => {
	const [selected, setSelected] = useState(0);
	const [expanded, setExpanded] = useState(true);

	const sidebarVariants = {
		true: {
			left: 0,
		},
		false: {
			left: "-60%",
		},
	};

	return (
		<>
			<div
				className="bars"
				style={expanded ? { left: "60%" } : { left: "5%" }}
				onClick={() => setExpanded(!expanded)}
			>
				<UilBars />
			</div>

			<motion.div
				className="Sidebar"
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ""}
			>
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
			</motion.div>
		</>
	);
};

export default Sidebar;
