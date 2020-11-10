import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
	/*constructor(props) {
		super(props);
		this.state = {lat: null,errMSG: '' };
	}*/

	state = {lat:null,errMSG:'' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position =>this.setState({lat:position.coords.latitude }),
			err =>this.setState({errMSG:err.message})
		);
	}
	renderContent() {
		if(this.state.errMSG && !this.state.lat ) {
			return <div>Error: {this.state.errMSG} </div>;
		}
		if(!this.state.errMSG && this.state.lat ) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <div><Spinner message="Please accept location request"/></div>;		
	}
	render() {
		return (
		<div className="border red"> { this.renderContent() } </div>
		);
	}
}
ReactDOM.render(<App/>,document.getElementById('root'));