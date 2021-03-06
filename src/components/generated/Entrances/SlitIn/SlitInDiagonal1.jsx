
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlitInDiagonal1 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlitInDiagonal1 "+className}style={{animation:"slit-in-diagonal-1 "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlitInDiagonal1.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlitInDiagonal1.defaultProps = {
	className:"",
	delay:0,
	duration:0.45,
	loop:"1",
	direction:"normal",
	easing:"easeOut"
}
export default SlitInDiagonal1;
