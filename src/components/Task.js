import {FaTimes} from 'react-icons/fa'
import {BiChevronDownSquare, BiChevronUpSquare} from 'react-icons/bi'
import { useState } from 'react'
const Task= ({task,onDelete,onToggle})=>{
    const [onDetail,setDetail] = useState(false)
    const showDetail= ()=>{
       setDetail(!onDetail)
    }
    return (
        <div>
            <h3 className={`task ${task.reminder===true ? 'reminder': '' }`} onDoubleClick={()=>onToggle(task.id)}>
                {task.day}  
                { !onDetail  && <BiChevronDownSquare onClick={()=>showDetail() } style={{float:'right'}} cursor='pointer'> </BiChevronDownSquare>}
                <FaTimes style={{color:'red',float: 'right'}} onClick={()=>onDelete(task.id)}></FaTimes>
                <p>{task.text}</p>
            </h3>
            {
                onDetail &&
                <p className='task detail'>
                        <BiChevronUpSquare onClick={()=>showDetail() } style={{float:'right'}} cursor='pointer'></BiChevronUpSquare>                                 
                        {task.detail!=='' ? task.detail: 'Empty'} 
                    </p>
            }         
        </div>
    )
}

export default Task