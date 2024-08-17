import { NavLink, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <Link to="/">
        </Link>
        <nav className="clearfix">
            <NavLink to="/characters" activeClassName='active'>Marvel Character List</NavLink>
            <br></br>
            <Link to={`/`}>Homepage</Link>
        </nav>
        </>
    )
}


export default NavBar;