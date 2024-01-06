import { useNavigate } from "@solidjs/router";
import { ParentComponent, createSignal } from "solid-js";
import { countB, setCountA, setCountB } from "../state";

const PageB: ParentComponent<{}> = (props) => {
	const navigate = useNavigate();
	const [localB, setLocalB] = createSignal(0);
	return (
		<div>
			<h1>Page B</h1>
			<p>{localB()}</p>
			<p>{countB()}</p>
			<button
				onClick={() => {
					navigate("/A");
				}}
			>
				Go To A
			</button>
			<button onClick={() => setLocalB((val) => val + 1)}>
				Update Local State
			</button>
			<button onClick={() => setCountA((val) => val + 1)}>Add A</button>
			<button onClick={() => setCountB((val) => val + 1)}>Add B</button>
		</div>
	);
};

export default PageB;
