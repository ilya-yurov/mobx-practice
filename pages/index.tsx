import type { NextPage } from 'next'
import Button from '../src/components/Button/Button'
import styled from '@emotion/styled'
import counter from '../src/store/counter'
import { observer } from 'mobx-react-lite'
import TodoList from '../src/components/TodoList/TodoList'

const StyledHome = styled.div`
	padding: 20px 0;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	display: flex;
`

const Home: NextPage = observer(() => {
	return (
		<StyledHome>
			{counter.total}
			<Button onClick={() => counter.increment()} />
			<Button onClick={() => counter.decrement()} />
			<TodoList/>
		</StyledHome>
	)
})

export default Home
