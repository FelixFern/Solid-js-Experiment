import { Component, onMount } from "solid-js";
import { countB } from "../state";

const ComponentB: Component<{}> = (props) => {
	onMount(() => {
		console.log("Rerendered B");
	});
	return <div>{countB()}</div>;
};

export default ComponentB;
