import Button from "./Button"
const Header = ( {titleHeader,onAddTask,showAddTask} ) => {
    //const onClick= ()=>{
    //    console.log('click header')
    //}
    return (
        <header className='header' >         
            <h1 style={{margin: '5px 0px'}} > {titleHeader} </h1>      
            
            <Button  onClick={onAddTask} showAddTask={showAddTask}/> 
            
        </header>
    )
}


export default Header