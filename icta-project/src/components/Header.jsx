import '../assets/style/header.scss'
import logo from '../assets/images/gradient_black.png'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <nav>

            <div className='logo-wrapper'>
                <Link to='icta.az'  ><img className='header-logo' src={logo} alt="" /></Link>
            </div>

            <div className='user-inf'>
                <span>MALİK ÇƏLƏBİYEV ZİYAFƏT OĞLU</span>
                <CiUser className='user-logo' />
            </div>

        </nav>

    )
}
