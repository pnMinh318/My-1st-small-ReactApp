import { useLocation } from "react-router"
const Button=({onClick,showAddTask})=>{

    const location = useLocation()
    return (
        <>
            { location.pathname==='/' &&
                <button onClick={onClick} className='btn' 
        
                style= { showAddTask ? {backgroundColor:'red'} : {backgroundColor:'green'}} >
                            {showAddTask ? 'Close' : 'Add'}  
                        </button>
            }
        </>
        
    )

     
    
}


export default Button