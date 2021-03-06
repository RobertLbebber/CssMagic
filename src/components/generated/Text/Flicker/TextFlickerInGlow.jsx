
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class TextFlickerInGlow extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"TextFlickerInGlow "+className}style={{animation:"text-flicker-in-glow "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
TextFlickerInGlow.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
TextFlickerInGlow.defaultProps = {
	className:"",
	delay:0,
	duration:4,
	loop:"1",
	direction:"normal",
	easing:"linear"
}
export default TextFlickerInGlow;
