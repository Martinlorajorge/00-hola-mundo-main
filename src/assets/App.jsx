import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

//Aquí pongo export para poder utilizarlo en main.jsx
export function App() {
	const format = userName => `@${userName}`;

	return (
		<section className="app">
			<TwitterFollowCard formatUserName={format} userName="MartinLoraJorge">
				SoyTinchoAaron
			</TwitterFollowCard>
			<TwitterFollowCard formatUserName={format} userName="PascualSilvestri">
				PascualSilvestri123
			</TwitterFollowCard>
			<TwitterFollowCard formatUserName={format} userName="Katerinne_amaya">
				KaterinneJanetAmaya
			</TwitterFollowCard>
		</section>
	);
}
