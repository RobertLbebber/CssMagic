
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class FlipDiagonal2Tl extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"FlipDiagonal2Tl "+className}style={{animation:"flip-diagonal-2-tl "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
FlipDiagonal2Tl.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
FlipDiagonal2Tl.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:"1",
	direction:"normal",
	easing:"easeInOutQuad"
}
export default FlipDiagonal2Tl;
