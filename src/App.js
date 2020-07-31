import React from 'react';
import CourseForm  from './components/form';
import CourseList  from './components/list';
import { v4 as uuidv4 } from 'uuid';
import Style from './css/css.css';

// App Component [ parent ]
class App extends React.Component{

  state = { 
    courses: [
      {id: uuidv4(), name: 'HTML'},
      {id: uuidv4(), name: 'Javascript'},
      {id: uuidv4(), name: 'CSS'},
      {id: uuidv4(), name: 'SASS'},
      {id: uuidv4(), name: 'React'}
    ],
    current: ''
   };

   // update Course
   updateCourse = e => {
    //  console.log(e.target.value);
      this.setState({
        current: e.target.value
      });
  }

   // add Course
   addCourse = e => {
     //  console.log(`course been added`);
     e.preventDefault();
     let {current} = this.state;
     let {courses} = this.state;
    //  let random = Math.round(Math.random() * new Date().getMilliseconds() * 1000000000000);
     let random = uuidv4();
     courses = [...courses, {id: random,name: current}];// IDS may deplicate
    //  courses.push({id: courses.length + 1,name: current});
      if(current.length > 0){
        this.setState({
          courses,
          current: ''
        });
      }else{
        alert(`must be gt 0`);
      }
  }

   deleteCourse = (index) => {
    //  console.log(`hello from deleteCourse`);
    let {courses} = this.state;
    courses.splice(index, 1); // create a new array every time you delete with new indexes
    this.setState({
      courses
    });
     console.log(`course index : ${index} been deleted`);

  }

  //  editCourse
   editCourse = (index, newVal) => {
     if(newVal.length > 0){
        let {courses} = this.state;
        let course = courses[index];
        // let random = Math.round(Math.random() * new Date().getMilliseconds() * 1000000000000);
        let random = uuidv4();
        course['id'] = random;
        course['name'] = newVal;
        this.setState({
          courses
        });   
      }else{
        // alert(`must be gt 0`);
      }
   }

   checkLength = () => {
    const {courses} = this.state;
    if(courses.length > 0){
      console.log(`gt 0`);
      const coursesList = courses.map((courseDetails, index) => {
        return <CourseList courseDetails={courseDetails} index={index} key={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      });
      return <ul> {coursesList} </ul>
    }else{
      console.log(`lt 0`);      
      return <h2>no courses</h2>;
    }
   }

  render(){
    const {courses} = this.state;
    const coursesList = courses.map((courseDetails, index) => {
      return <CourseList courseDetails={courseDetails} index={index} key={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    });

    return(
      <section className='App'>
        <h2>Add Course</h2>
          <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
            {this.checkLength()}
      </section>
    )
  }
}

export default App;