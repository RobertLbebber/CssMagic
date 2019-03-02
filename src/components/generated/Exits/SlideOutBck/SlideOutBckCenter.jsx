
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlideOutBckCenter extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlideOutBckCenter "+className}style={{animation:"slide-out-bck-center "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlideOutBckCenter.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlideOutBckCenter.defaultProps = {
	className:"",
	delay:0,
	duration:0.5,
	loop:"1",
	direction:"normal",
	easing:"easeInQuad"
}
export default SlideOutBckCenter;
