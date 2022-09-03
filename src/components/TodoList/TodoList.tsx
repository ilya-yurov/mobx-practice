import { observer } from 'mobx-react-lite'
import todo from '../../store/todo'


const TodoList = observer(() => {
	return (
		<div>
			<button onClick={() => todo.fetchTodos()}>Fetch todo</button>
			{todo.todos.map(t => 
				<div key={t.id}>
					<input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t)}/>
					{t.title}
					<button onClick={() => todo.removeTodo(t.id)}>X</button>
				</div>
				)}
		</div>
	)
})

export default TodoList