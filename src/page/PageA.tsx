import { useNavigate } from "@solidjs/router";
import { ParentComponent, createEffect } from "solid-js";
import { createMutable } from "solid-js/store";
import { countA, setCountA, setCountB } from "../state";

const PageA: ParentComponent<{}> = (props) => {
	const navigate = useNavigate();

	const data = createMutable({
		user: {
			name: "Felix",
			email: "felixzhuang12348@gmail.com",
		},
		todos: [
			{
				title: "Hello",
				done: false,
			},
			{
				title: "Hello again",
				done: true,
			},
			{
				title: "Hello again again",
				done: false,
			},
		],
		getTodos() {
			return this.todos;
		},
		getUser() {
			return this.user;
		},
		toggleTodos(index: number) {
			this.todos[index].done = !this.todos[index].done;
		},
		addTodos(data: { title: string; done: boolean }) {
			this.todos.push(data);
		},
		deleteTodos(delIndex: number) {
			this.todos = this.todos.filter(
				(_, index: number) => delIndex === index
			);
		},
	});

	createEffect(() => {
		console.log(data.getTodos());
	});

	return (
		<div>
			<h1>Page A</h1>
			<p>{countA()}</p>
			<button
				onClick={() => {
					navigate("/B");
				}}
			>
				Go To B
			</button>
			<button onClick={() => setCountA((val) => val + 1)}>Add A</button>
			<button onClick={() => setCountB((val) => val + 1)}>Add B</button>

			<div>
				<h2>User Data</h2>
				<p>Name : {data.getUser().name}</p>
				<p>Email : {data.getUser().email}</p>

				<h2>Todos</h2>
				<ul>
					{data.getTodos().map((todo, index: number) => (
						<li>
							<p>{todo.done}</p>
							<input
								type="checkbox"
								checked={todo.done}
								onChange={() => {
									data.toggleTodos(index);
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PageA;
