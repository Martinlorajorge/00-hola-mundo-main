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
				name="SoyTinchoAaron"
			/>
			<TwitterFollowCard
				formatUserName={format}
				isFollowing
				userName="PascualSilvestri"
				name="PascualSilvestri123"
			/>
			<TwitterFollowCard
				formatUserName={format}
				isFollowing
				userName="KaterinneAmaya"
				name="KaterinneAmaya"
			/>
		</section>
	);
}
