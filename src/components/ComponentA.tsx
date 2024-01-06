import { Component, onMount } from "solid-js";
import { countA } from "../state";

const ComponentA: Component<{}> = (props) => {
	onMount(() => {
		console.log("Rerendered A");
	});
	return <div>{countA()}</div>;
};

export default ComponentA;
