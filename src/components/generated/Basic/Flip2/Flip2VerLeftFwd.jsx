
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class Flip2VerLeftFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"Flip2VerLeftFwd "+className}style={{animation:"flip-2-ver-left-fwd "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
Flip2VerLeftFwd.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
Flip2VerLeftFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:"1",
	direction:"normal",
	easing:"easeInOutQuad"
}
export default Flip2VerLeftFwd;
