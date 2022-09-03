import { makeAutoObservable } from 'mobx'

interface ITodo {
	id: number
	title: string
	completed: boolean
}
/* interface ITitle {
	id: number
	text: string
} */

class Todo {
	timer = 60
	todos: ITodo[] = []
	//	{ id: 1, title: 'Сходи в магазин'/* { id: 1, text: 'Сходи в магазин' } */, completed: false },
	//	{ id: 2, title: 'Купи молоко'/* { id: 2, text: 'Купи молоко' } */, completed: false },
	//	{ id: 3, title: 'Постригись'/* { id: 3, text: 'Постригись' } */, completed: false },
	//]
	constructor() {
		makeAutoObservable(this, {}, { deep: true })
	}
	addTodo(todo: ITodo) {
		this.todos.push(todo)
	}
	removeTodo(id: number) {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}
	/* 	completeTodo(id:number) {
		this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
	} */
	completeTodo(todo: ITodo) {
		todo.completed = !todo.completed
	}
	fetchTodos() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => {
				this.todos = [...this.todos, ...json]
			})
	}
}

export default new Todo()
