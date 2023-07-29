import { useState } from "react";

export function TwitterFollowCard({
	formatUserName,
	userName = `Unknown`,
	children,
}) {
	const [isFollowing, setIsFollowing] = useState(false);
	//esta linea de arriba es lo mismo que las 3 lineas de abajo
	//const state = useState(false);
	//const isFollowing = state[0];
	//const setIsFollowing = state[1];

	const imageSrc = `https://unavatar.io/${userName}`;
	console.log(isFollowing);

	const text = isFollowing ? "Siguiendo" : "Seguir";

	const buttonClassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	const handleClick = () => {
		//si el valor que tenia era false ahora es true, y viceversa
		setIsFollowing(!isFollowing);
	};

	return (
		<article
			className="tw-followCard" /*style={{ display: "flex", alignItems: "center", color: "#fff" }}*/
		>
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" src={imageSrc}></img>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">
						{formatUserName(userName)}
					</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	);
}
