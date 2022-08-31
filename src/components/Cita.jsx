import './../styles/Cita.css';
import emailjs from "emailjs-com";


export default function Cita() {


    

    const sendEmail = (e)=>{
      e.preventDefault();

      emailjs.sendForm('service_t3lm6cg', 'template_pi4jjid', e.target, 'a2DG14lDuzHz2Enzj')
	  .then((result)=>{
	    console.log(result.text);
	  },
	  (error)=>{
	    console.log(error.text);
	  });
      e.target.reset();
    }


    return (
        <section className='date-container' id="cita">
	    <h2 className="text-white section-title">Hacer Cita</h2>	
            <div className="container"  id="cards-container">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={sendEmail} 
			    className="card card-body mt-4 shadow p-3 mb-5 bg-white rounded">

			    <label  id="label">Nombre</label>
                            <div className="form-group">
                                <input type="text"  
				    autoComplete='none' 
				    id="name"
				    name="name"
				    className="form-control" />
                            </div>
			    <label htmlFor="phone" id="label">Telefono</label>
                            <div className="form-group">
                                <input type="text" 
				     autoComplete='none' 
				    id="name" name="phone" className="form-control" />
                            </div>
			    <label htmlFor="email" id="label">Email</label>
                            <div className="form-group">
                                <input type="email" 
				    autoComplete='none'id="name" className="form-control"
				    name="email"/>
                            </div>
			    <label htmlFor="name" id="label">Mensaje</label>
                            <div className="form-group">
                                <textarea name="message"className="form-control" id="mensaje" 
				    autoComplete='none' cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
				<input type="submit" value="Enviar" id="btn-send" className='btn btn-block'/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 ml-4 mt-4 ">
                        <div className="card-body schedule rounded">
                            <div className="form-group">
                                <h2 className="text-center">Horarios de Atencion</h2>
                                <p className='mt-4 text-center '> <h5>Lunes a Viernes </h5> 10:30 - 17:00</p>
                            </div>
                        </div>
			<div className='second-card'>
			  <h3 className='sub-title text-center'><i className='fas fa-phone'></i>Telefono </h3>
			  <p className='text text-center'>71548963</p>

			  <h3 className='sub-title text-center'><i className='fas fa-map'></i>Direccion</h3>
			  <p className='text text-center'>11 Av. 17-25 Zona 2</p>

			  <p className='text text-center'>Momostenango, Totonicapan</p>
			</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d246810.22081073243!2d-91.42640420996734!3d14.858351866022279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.661679!2d-90.5037902!4m5!1s0x858c1dfefc7c2795%3A0x99b73ce676a9d023!2s2HVR%2BW8X%20COLEGIO%20ADVENTISTA%20ALBA%2C%20Unnamed%20Road%2C%20Momostenango!3m2!1d15.0448544!2d-91.40912519999999!5e0!3m2!1ses!2sgt!4v1658376033792!5m2!1ses!2sgt" width="550" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}



