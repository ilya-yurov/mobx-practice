import {makeAutoObservable} from 'mobx'

/* import { observer, useLocalObservable } from "mobx-react-lite"
const store = useLocalObservable(() => ({
	username: null,
	role: null,
})) */

class Counter {
	timer = 60
	count = 0
	constructor() {
		makeAutoObservable(this)
	}
	increment() {
		this.count = this.count + 1
	}
	decrement() {
		this.count = this.count - 1
	}
	get total() {
		return 'Count + timer = ' + this.timer + this.count
	}
}


export default new Counter()