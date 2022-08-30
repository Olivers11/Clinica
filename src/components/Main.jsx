import './../styles/main.css';
import Separator from './Separator';
import Cita from './Cita';

export default function Main(){
  return(
    <>
      <div className="img-container">
	<h2 className='text-center text-white title'> <b id="title-name">MDental</b> el trato que necesitas</h2> 
	<a href="#cita" className="btn" id="btn-cita">Hacer Cita</a>
	<Separator  />
      </div>
      <Cita />

    </>
  );
}
