import {ACTIONS} from './App'
const Digitbutton = ({dispatch, digit}) => {
	return (
		<button
			onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
			{digit}
		</button>
	)
}

export default Digitbutton
