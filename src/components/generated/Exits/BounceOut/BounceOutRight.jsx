
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class BounceOutRight extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"BounceOutRight "+className}style={{animation:"bounce-out-right "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
BounceOutRight.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
BounceOutRight.defaultProps = {
	className:"",
	delay:0,
	duration:1.5,
	loop:"1",
	direction:"normal",
	easing:"ease"
}
export default BounceOutRight;
