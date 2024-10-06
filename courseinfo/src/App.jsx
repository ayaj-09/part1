const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = ({content}) => {
  return (
    <>
      <Part part = {content[0].name} exercises = {content[0].exercises} />
      <Part part = {content[1].name} exercises = {content[1].exercises} />
      <Part part = {content[2].name} exercises = {content[2].exercises} />
    </> 
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = ({content}) => {
  return (
    <p>Total number of exercise {content[0].exercises+content[1].exercises+content[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name:'Half Stack application development',

    parts :[
    {
      name:'Fundamental of React',
      exercises :10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <div>
      <Header course = {course} />
      <Content content = {course.parts} />
      <Total content = {course.parts} />
    </div>
  )
}

export default App