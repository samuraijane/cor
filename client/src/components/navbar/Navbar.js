import { slide as Menu } from 'react-burger-menu'
import "./navbar.css";


function Navbar() {

    return (
        <>
            <Menu right width={"40%"}>
                <a href="/mentor">Mentor</a>
                <a href="/Mentee">Mentee</a>
                <a href="about">About Us</a>
            </Menu>

            <div className={"nav"} >
                <img src="/cor-logo.png" alt={"Cor Logo"} />
                <div className={"link-group"}>
                    <a href="/mentor">Mentor</a>
                    <a href="/Mentee">Mentee</a>
                    <a href="about">About Us</a>
                </div>
            </div>
        </>
    )
}

export default Navbar