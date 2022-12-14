import './../styles/Nav.css';



export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">MDental <i className="fas fa-tooth"></i> </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
	data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
	aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#horario">Horarios</a>
          </li>
	  <li className="nav-item">
            <a className="nav-link" href="#servicio">Sevicios</a>
          </li>
	  <li className="nav-item">
            <a className="nav-link" href="#cita">Citas</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}
