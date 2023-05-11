import logo from '../Logo.svg'

export function Footer(props) {

    return(
        <footer>
            <img src={logo} alt="Logo"/>
            <h4>Doormat Navigation</h4>
            {props.children}
            <h4>Contact</h4>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <h4>Social Media</h4>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </footer>
    )
}