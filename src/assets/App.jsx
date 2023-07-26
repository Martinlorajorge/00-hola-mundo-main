import { TwitterFollowCard } from "./TwitterFollowCard";

//Aquí pongo export para poder utilizarlo en main.jsx
export function App() {
	const format = userName => `@${userName}`;
	return (
		<section className="app">
			<TwitterFollowCard
				formatUserName={format}
				isFollowing={false}
				userName="MartinLoraJorge"
			>
				SoyTinchoAaron
			</TwitterFollowCard>
			<TwitterFollowCard
				formatUserName={format}
				isFollowing
				userName="PascualSilvestri"
			>
				PascualSilvestri123
			</TwitterFollowCard>
			<TwitterFollowCard
				formatUserName={format}
				isFollowing
				userName="KaterinneAmaya"
			>
				KaterinneAmaya
			</TwitterFollowCard>
		</section>
	);
}
