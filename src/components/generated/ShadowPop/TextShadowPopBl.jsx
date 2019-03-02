
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class TextShadowPopBl extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"TextShadowPopBl"+" "+className}style={{animation:"text-shadow-pop-bl "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
TextShadowPopBl.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
TextShadowPopBl.defaultProps = {
	className:"",
	delay:0,
	duration:0.6,
	loop:"1",
	direction:"normal",
	easing:"ease"
}
export default TextShadowPopBl;
