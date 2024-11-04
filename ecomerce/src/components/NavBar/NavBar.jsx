import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return(
        <nav>
            <ul>
                <li>home</li>
                <li>Tennis</li>
                <li>Paddle</li>
                <li>Squash</li>
                <li>Table-Tennis</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar 

//es uno por archivo