
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlitInHorizontal extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlitInHorizontal "+className}style={{animation:"slit-in-horizontal "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlitInHorizontal.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlitInHorizontal.defaultProps = {
	className:"",
	delay:0,
	duration:0.45,
	loop:"1",
	direction:"normal",
	easing:"easeOut"
}
export default SlitInHorizontal;
