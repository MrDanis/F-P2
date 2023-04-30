import React from 'react'
import './heder.css'
import styles from '../../assets/styles/global.module.css'
import {useLocation,Link} from 'react-router-dom'
const Header = () => {
    const location = useLocation();
    return (
        <div className='test-center fixed-top text-success container-fluid m-0 p-0 headerMainBox'>
            <nav className="navbar px-3 p-0 navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid p-0 m-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Lexica</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className={location?.pathname?.length == 1 ? 'py-2 mx-2 nav-item text-light fw-bold active-border' : 'py-2 mx-2 nav-item'}>
                                <Link className="nav-link active" to='/'>Home</Link>
                            </li>
                            <li className={location?.pathname.includes('genrate') ? 'py-2 mx-2 nav-item fw-bold active-border' : 'py-2 mx-2 nav-item'}>
                                <Link className="nav-link active" to='genrate'>Genrate</Link>
                            </li>
                            <li className={location?.pathname.includes('history') ? 'py-2 mx-2 nav-item fw-bold active-border' : 'py-2 mx-2 nav-item'}>
                                <Link className="nav-link active" to='history'>History</Link>
                            </li>
                            <li className={location?.pathname.includes('likes') ? 'py-2 mx-2 nav-item fw-bold active-border' : 'py-2 mx-2 nav-item'}>
                                <Link className="nav-link active" to='likes'>Likes</Link>
                            </li>
                            <li className={location?.pathname.includes('account') ? 'py-2 mx-2 nav-item fw-bold active-border' : 'py-2 mx-2 nav-item'}>
                                <Link className="nav-link active" to="account">Account</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className={`d-flex align-items-center justify-content-center btn  fs-6 fw-normal text-light ${styles.themeButtons}`} type="submit">Get started</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header