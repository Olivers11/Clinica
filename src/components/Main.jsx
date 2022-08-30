import './../styles/main.css';
import Separator from './Separator';

export default function Main(){
  return(
    <div className="img-container">
      <h2 className='text-center text-white title'> <b id="title-name">MDental</b> el trato que necesitas</h2> 
      <button className="btn" id="btn-cita">Hacer Cita</button>
      <Separator  />
    </div>
  );
}
