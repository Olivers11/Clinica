import './../styles/footer.css';


export default function Footer(){
  return(
    <>
	<footer className="text-center text-lg-start bg-light text-muted">
	  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
	    <div className="me-5 d-none d-lg-block">
	      <span className="footer-title">
		Comunicate con nosotros por medio de nuestras redes sociales:
	      </span>
	    </div>
	    <div>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-facebook-f"></i>
	      </a>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-twitter"></i>
	      </a>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-google"></i>
	      </a>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-instagram"></i>
	      </a>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-linkedin"></i>
	      </a>
	      <a href="" className="me-4 text-reset">
		<i className="fab fa-github"></i>
	      </a>
	    </div>
	  </section>

	  <section className="">
	    <div className="container text-center text-md-start mt-5">
	      <div className="row mt-3">
		<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
		  <h6 className="text-uppercase fw-bold mb-4">
		    <i className="fas fa-tooth me-3"></i> MDental 
		  </h6>
		  <p className='paragraph'>
		    Somos un equipo comprometido con tu salud dental, consiguiendo el equilibro
		    entre conocimiento y teconologia para proporcionarte las mejores soluciones
		    dentales
		  </p>
		</div>

		<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
		  <h6 className="text-uppercase fw-bold mb-4">
		     Servicios Clinicos
		  </h6>
		  <p>
		    <a href="#!" className="text-reset">Examen Diagnostico</a>
		  </p>
		  <p>
		    <a href="#!" className="text-reset">Limpieza Dental</a>
		  </p>
		  <p>
		    <a href="#!" className="text-reset">Tratamiento de Muelas</a>
		  </p>
		  <p>
		    <a href="#!" className="text-reset">Ortodoncia</a>
		  </p>
		</div>


		<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
		  <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
		  <p><i className="fas fa-home me-3"></i> Quetzaltenango, Zona 3</p>
		  <p>
		    <i className="fas fa-envelope me-3"> </i>
		       MDentalgt@gmail.com
		  </p>
		  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
		  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
		</div>
	      </div>
	    </div>
	  </section>
	  <div className="text-center p-4 foot" >
	    © 2022 Copyright:
	    <a className="text-reset fw-bold" href="https://github.com/Olivers11"> Oliver.dev</a>
	  </div>
	</footer>
    </>
  );
}

