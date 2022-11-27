import React, { Component, Fragment } from "react";

export default class CourseList extends Component {
  state = {
    isEdit: false,
  };

  // render Course Item
  renderCourse = () => {
    return (
      <li>
        <span> {this.props.details.name} </span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Course
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delet Course
        </button>
      </li>
    );
  };

  //toggleState
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  //update Course Item
  updateCourseItem = (e) => {
    e.preventDefault();
  //validate if user enter values or not 
    if (this.input.value !== "") {
      this.props.newCourse(this.props.index, this.input.value);
      this.toggleState();
    } else {
      alert("Enter The Name Of Course");
    }
  };

  //render Update Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        ></input>
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;

    return (
      <Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}
