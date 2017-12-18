import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component{
	render() {
		const width = (this.props.cols * 14);
		var rowsArr = []

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++){
			for (var j = 0; j < this.props.cols; j++){
				let boxId = i + "_" + j;
//True or false 
				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}
					/>	
				)
			}
		}

		return(	
		<div className="grid" style={{width: width}}>
			{rowsArr}
		</div>
		);
	}
}


class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			generation: 0,
		}
	}

	render() {
		return (
			<div>
			<h1>The Game of Life</h1>
			<Grid
			/>
			<h2>Generations: {this.state.generation}</h2>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
