import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../asset/letra-d.png'

export default function Navbar() {
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-black border-bottom-white shadow-lg p-3 mb-5">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={bootstrap} width="50" height="40" className="d-inline-block align-top" alt="" />
                    </a>
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler  d-lg-none bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" aria-current="page">Descubrir <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/calcu">Creadores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Iniciar sesion</a>
                            </li>

                        </ul>
                        <a href='/pago'><button className='border border-none rounded btn-outline-success float-md-end btn btn-lg '>Empezar</button></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}