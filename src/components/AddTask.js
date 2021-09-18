
import { useState } from "react"
const AddTask = ({addTask}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    const [detail,setDetail] = useState('')
    //add task 
    const addTaskfn = (newtask)=>{
        if(!text)
            {
                alert('please enter a Task')
                return
            }
        else{           
            let randomId = Math.floor(Math.random() * 10000)
            let task={id:randomId,text: newtask.text,day:newtask.day,reminder: newtask.reminder,detail: newtask.detail}
            addTask(task)
            setText('')
            setDay('')
            setReminder(false)
            setDetail('')
        }
    }
    
    return (
        <form className='form-control' >
            <div>
                <label>Task</label>
                <input type='text' className='form-control' 
                        value={text} 
                        onChange={(e)=>setText(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Date</label>
                <input type='text' className='form-control' 
                        value={day} 
                        onChange={(e)=>setDay(e.target.value)}
                ></input>
            </div>       
            <div>
                <label>Detail</label>
                <input style={{height:'100px'}} className='form-control' onChange={(e)=> setDetail(e.target.value)} value={detail}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' className='form-control' checked={reminder} onChange={(e)=>setReminder(e.target.checked)}></input>
            </div>
            <input className='form-control'type='submit' onMouseEnter={()=>addTaskfn({text,day,reminder,detail})} ></input>
        </form>
    )
}

export default AddTask