
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class FlipHorizontalTop extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"FlipHorizontalTop"+" "+className}style={{animation:"flip-horizontal-top "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
FlipHorizontalTop.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
FlipHorizontalTop.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:"1",
	direction:"normal",
	easing:"easeInOutQuad"
}
export default FlipHorizontalTop;
