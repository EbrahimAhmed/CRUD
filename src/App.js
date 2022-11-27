import React, { Component } from 'react'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

class App extends Component {

  state ={
    courses : [
      { name : "HTML"},
      
      { name : "CSS"},
      
      { name : "JS"},
    ],
    current : ''
}

// UpdateCourse
updateCourse = (e) =>
{
  this.setState({
    current : e.target.value
  })
}

//Add Course
addCourse = (e)=>
{
  e.preventDefault();
  let current = this.state.current;
  let courses = this.state.courses;
  if(current.length !== 0){
  courses.push({ name : current })
  this.setState({
    courses, //in this case the key==value so write it onetime not like this course:course
    current:''
  })
}else{alert("ENTER NAME OF THE COURSE")}

}

//Delet Course
deleteCourse = (index)=>
{
  let courses = this.state.courses
  courses.splice( index , 1 );
  this.setState({
    courses
  })

}

//editCourse
editCourse = ( index, newValue ) =>
{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = newValue;
  this.setState({
    courses
  })
}

// newCourse
newCourse = ( index , newValue) =>
{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = newValue;
  this.setState({
    courses
  })


}

  render() {

    const {courses} = this.state;
    const courseList = courses.map( ( course , index ) =>
    {
      return < CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} newCourse={this.newCourse}/>
    } )

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul> {courseList} </ul>
    </section>
    )
  }
}

export default App;

