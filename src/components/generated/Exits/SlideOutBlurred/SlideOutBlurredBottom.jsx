
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class SlideOutBlurredBottom extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"SlideOutBlurredBottom "+className}style={{animation:"slide-out-blurred-bottom "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
SlideOutBlurredBottom.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
SlideOutBlurredBottom.defaultProps = {
	className:"",
	delay:0,
	duration:0.45,
	loop:"1",
	direction:"normal",
	easing:"easeInQuint"
}
export default SlideOutBlurredBottom;
