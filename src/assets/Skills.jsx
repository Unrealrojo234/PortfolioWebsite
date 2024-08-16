import js from './Images/js.jpeg';
import jquery from './Images/jquery.jpeg';
import mern from './Images/mern.jpeg';
import html from './Images/html.jpeg';
import css from './Images/css.png';
import btsp from './Images/Bootstrap.jpeg';

export default function Skills(){
    return(
        <div className="container-fluid">
            <h1>Skills <i className="fa-solid fa-gears fa-2xl" style={{color: "#63E6BE"}}></i></h1>
            <div className='row'>
                <div className='col'>
                    <img src={html} alt='html' className='img-fluid' style={{maxWidth:'3rem'}}/>
                </div>
                <div className='col'>
                    <img src={css} alt='html' className='img-fluid' style={{maxWidth:'6rem'}}/>
                </div>
                <div className='col'>
                    <img src={js} alt='html' className='img-fluid' style={{maxWidth:'3rem'}}/>
                </div>
                
            </div>
            <div className='row'>
                <div className='col'>
                    <img src={jquery} alt='html' className='img-fluid' style={{maxWidth:'3rem'}}/>
                </div>
                <div className='col'>
                    <img src={mern} alt='html' className='img-fluid' style={{maxWidth:'5rem'}}/>
                </div>
                <div className='col'>
                    <img src={btsp} alt='html' className='img-fluid' style={{maxWidth:'3rem'}}/>
                </div>
                
            </div>
        </div>
    )
}