export function TwitterFollowCard({
	formatUserName,
	userName,
	name,
	isFollowing,
}) {
	const imageSrc = `https://unavatar.io/${userName}`;
	console.log(isFollowing);
	return (
		<article
			className="tw-followCard" /*style={{ display: "flex", alignItems: "center", color: "#fff" }}*/
		>
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" src={imageSrc}></img>
				<div className="tw-followCard-info">
					<strong>{name}</strong>
					<span className="tw-followCard-infoUserName">
						{formatUserName(userName)}
					</span>
				</div>
			</header>

			<aside>
				<button className="tw-followCard-button">Seguir</button>
			</aside>
		</article>
	);
}
