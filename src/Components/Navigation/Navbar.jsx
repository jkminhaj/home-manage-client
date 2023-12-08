import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const links =

        // this is how dropdown works
        // <details>
        //     <summary>Parent</summary>
        //     <ul className="p-2">
        //         <li><a>Submenu 1</a></li>
        //         <li><a>Submenu 2</a></li>
        //     </ul>
        // </details>

        // all navigation links here
        <>
            <NavLink className='nav' to='/'>Home</NavLink>
            <NavLink className='nav' to='/blog'>Blog</NavLink>
            <NavLink className='nav' to='/contactus'>Contact Us</NavLink>
            <NavLink className='nav' to='/about'>About</NavLink>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-3  menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;