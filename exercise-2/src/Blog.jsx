import './Blog.css';
const Header=()=>{
    return(
        <header className="header">
                <h1>My Blog</h1>
        </header>
       
    )   

}


const Post=()=>{ 
    return(
        <div className="post">
            <h2>Post Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
    )
   }

    const Footer=()=>{
        return (
            <footer className='footer'>
                <p>Copyright &copy; 2025</p>
            </footer>
        )
   }
   const Blog=()=>{
    return(
        <>
        <Header/>
        <Post/> 
        <Footer/>
        </>
    )
   }

   export default Blog;