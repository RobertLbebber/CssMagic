
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class RotateOutDiag1 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"RotateOutDiag1"+" "+className}style={{animation:"rotate-out-diag-1 "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
RotateOutDiag1.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
RotateOutDiag1.defaultProps = {
	className:"",
	delay:0,
	duration:0.6,
	loop:"1",
	direction:"normal",
	easing:"easeInQuad"
}
export default RotateOutDiag1;
