import { useState } from "react";
import Card from './Card';

function Testimonial({ details }) {
  const [index, setIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(details[index]);

  function leftHandler() {
    if (index > 0) {
      setIndex(index - 1);
      setTestimonial(details[index - 1]);
    } else {
      setIndex(details.length - 1);
      setTestimonial(details[details.length - 1]);
    }
  }

  function rightHandler() {
    if (index === details.length - 1) {
      setIndex(0);
      setTestimonial(details[0]);
    } else {
      setIndex(index + 1);
      setTestimonial(details[index + 1]);
    }
  }

  function surpriseHandler() {
    // Implement the logic for surpriseHandler if needed
    setTestimonial(prevTestimonial => {
      const max = details.length - 1;
      const min = 0;
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  
      return details[randomIndex];
    });
  }

  return (
    <div>
      <Card
        surpriseHandler={surpriseHandler}
        leftHandler={leftHandler}
        rightHandler={rightHandler}
        testimonial={testimonial}
      ></Card>
    </div>
  )
}

export default Testimonial;
