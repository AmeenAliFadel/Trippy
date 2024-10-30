import { FaHome } from 'react-icons/fa'
import './Navbar.css'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { MdHomeRepairService } from 'react-icons/md'
export default function Navbar() {
    return (
        <nav className='Af-Navbar'>
            <div>
                <h1>Trippy</h1>
            </div>
            <div className='section-2'>
                <ul className='Menu'>
                    <li>
                        <FaHome />
                        Home
                    </li>
                    <li>
                    <AiFillExclamationCircle />
                        About
                    </li>
                    <li>
                    <MdHomeRepairService />
                        Service
                    </li>
                    <li>
                    <RiContactsBook3Fill />
                        Contact
                    </li>
                </ul>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}