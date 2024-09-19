import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>


<nav class="navbar">
    
            <a>
            <Link to="/login">Login</Link>   
            </a> 
            <a>
            <Link to="/signup">SignUp</Link>
            </a>  
            <a>
            <Link to="/">Home</Link>
            </a>
            <a>
            <Link to="/blogs">Blogs</Link>
            </a>
            <a>
            <Link to="/contact">Contact</Link>
            </a>
       </nav>

    

      <Outlet />
    </>
  )
};

export default Layout;