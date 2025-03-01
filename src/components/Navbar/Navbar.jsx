// import { FaHome } from 'react-icons/fa'
// import './Navbar.css'
// import { AiFillExclamationCircle } from 'react-icons/ai'
// import { RiContactsBook3Fill } from 'react-icons/ri'
// import { MdHomeRepairService } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// export default function Navbar() {

//     return (
//         <nav className='Af-Navbar'>
//             <div>
//                 <h1>Trippy</h1>
//             </div>
//             <div className='section-2'>
//                 <ul className='Menu'>
//                     <li>
//                         <Link to={'/'}>
//                             <FaHome />
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to={'/about'}>
//                             <AiFillExclamationCircle />
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to={'/service'}>
//                             <MdHomeRepairService />
//                             Service
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to={'/contact'}>
//                             <RiContactsBook3Fill />
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//                 <button><Link to={'/signup'}>
//                     Sign Up
//                 </Link></button>
//             </div>
//         </nav>
//     )
// }


import { FaHome } from 'react-icons/fa';
import './Navbar.css';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { MdHomeRepairService } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className='Af-Navbar'>
            <div>
                <h1>Trippy</h1>
            </div>
            <div className='section-2'>

                <ul className={`Menu ${menuActive ? 'active' : ''}`}>
                    <li>
                        <Link to={'/'}>
                            
                            <i class="fa-solid fa-house-user"></i>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                        <i class="fa-solid fa-circle-info"></i>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/service'}>
                        <i class="fa-solid fa-briefcase"></i>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                        <i class="fa-solid fa-address-book"></i>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className='signup-btn'>
                        <Link to={'/signup'}>
                            Sign Up
                        </Link>
                        </button>
                        
                    </li>
                </ul>
                <button onClick={toggleMenu} className='menu-toggle'>
                    ☰
                </button>
            </div>
        </nav >
    );
}
