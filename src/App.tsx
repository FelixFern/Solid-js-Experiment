import { Route, Router } from "@solidjs/router";
import PageA from "./page/PageA";
import PageB from "./page/PageB";

function App() {
	return (
		<Router>
			<Route path="/A" component={PageA}></Route>
			<Route path="/B" component={PageB}></Route>
		</Router>
	);
}

export default App;
