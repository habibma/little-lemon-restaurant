import logo from '../Logo.svg'

export function Footer(props) {

    return(
        <footer>
            <div className='footer-row eight'>
                <section><img src={logo} alt="Logo"/></section>
                <section>
                    <h4>Doormat Navigation</h4>
                {props.children}
                </section>
                <section>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
                </section>
                <section>
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                </section>
            </div>
        </footer>
    )
}