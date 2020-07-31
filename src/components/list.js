import React, { Component, Fragment } from 'react';
class CourseList extends React.Component{

	state = {
		isEdit: false
	}

	// renderCourses Item
	renderCourses = () => {
		return(
			<li>
				<span>				
					Course index: {this.props.index}, Course Name: {this.props.courseDetails.name}
				</span>
				<button onClick={ _ => this.toggleState()}>Edit Course</button>
				<button onClick={ _ => this.props.deleteCourse(this.props.index)}>Delete Course</button> {/* arrow function to prevent to be self-invoke */}
			</li>
		)
	}

	// toggleState
	toggleState = () => {
		let {isEdit} = this.state;
		this.setState({
			isEdit: !isEdit
		});
	}

	// updateCourseItem
	updateCourseItem = (e) => {
		e.preventDefault();
		this.props.editCourse(this.props.index, this.input.value);
		this.toggleState();
	}

	// renderUpdateForm Item
	renderUpdateForm = () => {
		return(
			<form onSubmit={this.updateCourseItem}>  						 {/* value={this.....} not allow to change value */}
				<input autoFocus type='text' ref={(val) => this.input = val } defaultValue={this.props.courseDetails.name} placeholder={`Previous: ${this.props.courseDetails.name}`}/> 
				<button>Update Course</button> 
			</form>
		)
	}

	render(){
		let {isEdit} = this.state;
    return(
			<Fragment>
				{ isEdit ? this.renderUpdateForm() : this.renderCourses()}
			</Fragment>
		)
  }
}

export default CourseList;