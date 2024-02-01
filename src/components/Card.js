import './Card.css';
import testImg from './testimg.png';
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
function Cards(props){
    let review=props.testimonial;
    return(
        <div className='card_info'>
            <div className='image_container'>
            <img src={testImg} alt="img"></img>
            </div>
            <div className='about_testimonial'>
                <h3>{review.name}</h3></div>
                <p className='pos'>{review.position}</p>
            
            <RiDoubleQuotesL className='icon'></RiDoubleQuotesL>
            <div className='info'>
                <p>{review.about}</p>
            </div>
            <RiDoubleQuotesR className='icon'></RiDoubleQuotesR>
            <div className='buttons'>
                <button className='switch' onClick={props.leftHandler}><FaChevronLeft></FaChevronLeft></button>
                <button className='switch' onClick={props.rightHandler}><FaChevronRight></FaChevronRight></button>
            </div>
            <div className='surprise'>
                <button onClick={props.surpriseHandler}>Surprise Me</button>
            </div>
          
        </div>
    )
}
export default Cards;