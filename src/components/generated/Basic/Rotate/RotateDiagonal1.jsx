
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class RotateDiagonal1 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"RotateDiagonal1 "+className}style={{animation:"rotate-diagonal-1 "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
RotateDiagonal1.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
RotateDiagonal1.defaultProps = {
	className:"",
	delay:0,
	duration:0.4,
	loop:"1",
	direction:"normal",
	easing:"linear"
}
export default RotateDiagonal1;
