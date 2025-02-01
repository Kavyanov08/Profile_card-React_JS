import propTypes from 'prop-types' 

const userData=[
    {
        name:"Jenny",city:"Chennai",description:"Front-End-Developer", 
        skills:['UI/UX','Front End Development','HTML','CSS','JavaScript','React JS','Node Js'], 
        online:true,profile:"images/women-pic1.jpg"
    },
    {
        name:"Rustyn",city:"Bangalore",description:"FullStack-Developer", 
        skills:['Front End Development','Back End Development','Python','HTML','CSS','JavaScript','React JS','Node Js',], 
        online:false,profile:"images/men-pic1.jpg"
    },
    {
        name:"Maya",city:"Hydrabad",description:"Data Analyst", 
        skills:['PowerBI','SQL','Python','MongoDB','MySql','MatplotLib','Numpy','Pandas'], 
        online:true,profile:"images/women-pic2.jpg"
    }
]

function User(props){
    
    return(
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} className="img" alt="user" height={100}/>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skill">
                <h6>Skills</h6>
                <ul>
                   {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    )
}
export const UserCard = () => {
  return (
 <>
 {
    userData.map((user,index)=>(<User key={index} name={user.name} city={user.city} description={user.description}
    online={user.online} profile={user.profile} skills={user.skills}/>))
 }
 </>   
  )
}

User.propTypes={
    name:propTypes.string.isRequired,
    city:propTypes.string.isRequired,
    description:propTypes.string.isRequired,
    skills:propTypes.arrayOf(propTypes.string).isRequired,
    online:propTypes.bool.isRequired,
    profile:propTypes.string.isRequired
}
