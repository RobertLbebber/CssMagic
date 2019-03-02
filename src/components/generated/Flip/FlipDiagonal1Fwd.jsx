
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class FlipDiagonal1Fwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"FlipDiagonal1Fwd"+" "+className}style={{animation:"flip-diagonal-1-fwd "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
FlipDiagonal1Fwd.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
FlipDiagonal1Fwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:"1",
	direction:"normal",
	easing:"easeInOutQuad"
}
export default FlipDiagonal1Fwd;
