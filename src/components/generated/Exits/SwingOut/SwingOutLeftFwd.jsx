
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SwingOutLeftFwd extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SwingOutLeftFwd "+className}style={{animation:"swing-out-left-fwd "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SwingOutLeftFwd.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SwingOutLeftFwd.defaultProps = {
	className:"",
	delay:0,
	duration:0.55,
	loop:"1",
	direction:"normal",
	easing:"easeInBack"
}
export default SwingOutLeftFwd;
