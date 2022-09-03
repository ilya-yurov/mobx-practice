import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'

export const StyledButton = styled.button`
	background-color: grey;
	height: 30px;
	width: 100px;
	border-radius: 30px;
	&:hover {
	background-color: white;
	}
	&:active {
	background-color: green;
	}
`
interface ButtonProps {
	onClick: () => void
}

const Button = ({onClick}:ButtonProps) => {
	return (
		<div>
			<StyledButton onClick={onClick}>Click me</StyledButton>
		</div>
	)
}

export default Button