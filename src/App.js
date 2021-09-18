import { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from './components/Tasks'

import AddTask from "./components/AddTask";
import Time from "./components/Time";
import About from "./components/About";
function App() {
  //Fetch API
  useEffect(()=>{
    const fetchTasks = async ()=> {
      const tasksFromServer = await fetch('http://localhost:5000/tasks').then((data)=> data.json())
      //then(...) ở dòng trên bằng với dòng này : const data = await res.json() 
      //GET phải đợi fetch xong rồi chuyển sang json
      setTask(tasksFromServer)
      console.log(tasksFromServer) 
    }
    fetchTasks()
  },[])
  //delete Task
  const deleteTask= async (id)=> {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'}).then(async (res)=> await console.log(res.status))
    setTask(tasks.filter((task)=> task.id !== id ))
  }
  //Toggle Reminder
  const toggleReminder= async (id)=>{
    const data = await fetch(`http://localhost:5000/tasks/${id}`).then( async (res)=> await res.json())
    const updatedData = {...data,reminder : !data.reminder}
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers: {'Content-Type':'application/json'},body:JSON.stringify(updatedData)})
    //const res = await res.json()
    setTask(tasks.map((task)=> task.id === id ? {...task, reminder : updatedData.reminder} : task ))
     // chưa hiểu dòng này lắm
  }
  //Add Task
  const addTask = async (newtask)=>{
    const res =await fetch(`http://localhost:5000/tasks`,{method:'POST',body: JSON.stringify(newtask),headers:{ 'Content-Type': 'application/json' }}) //post lên phải có Header, Body dùng để chứa Data muốn post
    const data=await res.json() // phải await để chờ add xong data mới render lên UI
    setTask([...tasks,data])
  }
  const [onAddTask,setAddTask] = useState(false)
  const [tasks,setTask] = useState([])
  //let myName='Nhật Minh'
  const headingStyle={color: 'blue'}
  return (
    <Router>
      <div className='container' >
      <p style={headingStyle} > Hello</p>
      <Header titleHeader   ='Task-Tracker' 
              onAddTask     ={()=> setAddTask(!onAddTask)} 
              showAddTask   ={onAddTask}/>
      <h4><Time></Time></h4>
      <Route path='/' exact render={ (props)=>(
          <>
            {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} > </Tasks>
            : <h2> There's nothing left</h2> }

            { onAddTask ===true && <AddTask addTask={addTask}></AddTask>}
            
            <footer>
              <Link to='/about'>About Me?</Link>        
            </footer>
          </>
      )
      }/>
      <Route path='/about' component={About}/> 
      
     </div>
    </Router>
    
  )
}

export default App;
