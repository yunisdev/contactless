import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '../src/.'

const App = () => {

	return (
		<div>
			<Button>
				Hello
			</Button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))