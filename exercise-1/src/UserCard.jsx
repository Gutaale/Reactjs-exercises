import './App.css';
const UserCard=()=>{
    const user={
        name:"Mohamed Hassan",
        email:"mohamed@gmail.com"
    }
    const newStyle={
        textAlign: "center", 
        width: "500px", 
        backgroundColor:"blue", 
        color:"white", 
        fontSize:"1.2rem", 
        padding:"10px", 
        margin:"10px",
        borderRadius:"10px",
    }

    return (
        <div className='card'>
        <h1 className="h1">User name is: {user.name}</h1>
        <p style={
                newStyle
            }>User Email is: {user.email} </p>
        </div>
    )
}

export default UserCard;