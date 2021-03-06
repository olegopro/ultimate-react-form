import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './Components/Header'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

// const Step1 = () => <>Step 1</>
// const Step2 = () => <>Step 2</>
// const Step3 = () => <>Step 3</>
const Result = () => <>Result</>

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Step1} />
					<Route path="/step2" component={Step2} />
					<Route path="/step3" component={Step3} />
					<Route path="/result" component={Result} />
				</Switch>
			</Router>
		</>
	)
}

export default App
