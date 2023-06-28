import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto px-24">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none w-5/12">
            <ul className="flex justify-around w-4/12 text-xl">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='top'>Top Rate</Link></li>
            </ul>
            
        </div>
        </div>
    );
};

export default Navbar;