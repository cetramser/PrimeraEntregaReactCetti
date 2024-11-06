import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        /*<nav>
            <ul>
                <li>home</li>
                <li>Tennis</li>
                <li>Paddle</li>Name
                <li>Squash</li>
                <li>Table-Tennis</li>
            </ul>
            
        </nav>*/
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tennis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Paddle</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Squash</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Table-Tennis</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar

//es uno por archivo