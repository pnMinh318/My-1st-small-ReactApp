import { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'


function About() {


     const [profile,setProfile] = useState({})
      useEffect( ()=>{
          const fetchProfile = async ()=>{
              const data = await fetch('http://localhost:5000/profile').then(async (res) => await res.json())
              setProfile(data)
              console.log(data)
              console.log(profile.lastname)
          }
          fetchProfile()
      },[])
    
    return (
        <>
        <div style={{backgroundColor : 'blanchedalmond'}}>
            
            <h3 className='myinfo'> My name is {`${profile.lastname} ${profile.firstname}`}</h3>
            <h5 className='myinfo'> I'm {profile.age} years old. This is my 4th year in HCMUTE</h5>
            <h5 className='myinfo'> Contact me at {profile.email}</h5>
           
            
        </div>
        <footer><Link to='/' >Go Back</Link></footer>
        </>
        
    )
}

export default About
