//import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
function SlidersFade() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cdn.pixabay.com/photo/2019/01/28/17/00/car-wash-3960877_960_720.jpg'
        alt='...'
        height={600} 
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://cdn.pixabay.com/photo/2016/08/25/16/00/car-wash-1619823_960_720.jpg'
        alt='...'
        height={600} 
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cdn.pixabay.com/photo/2018/11/02/09/27/microfiber-3789848_960_720.jpg'
        alt='...'
        height={600} 
      />
    </MDBCarousel>
    // <Carousel fade>
    //   <Carousel.Item >
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2019/01/28/17/00/car-wash-3960877_960_720.jpg"
    //       alt="First slide"
    //       height={600} 
    //     />
    //     <Carousel.Caption>
    //       <h3>.....</h3>
    //       <p>.....</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2016/08/25/16/00/car-wash-1619823_960_720.jpg"
    //       alt="Second slide"
    //       height={600}
    //     />

    //     <Carousel.Caption>
    //       <h3>.........</h3>
    //       <p>............</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2018/11/02/09/27/microfiber-3789848_960_720.jpg"
    //       alt="Third slide"
    //       height={600}
    //     />

    //     <Carousel.Caption>
    //       <h3>...........</h3>
    //       <p>
    //         ..........
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    
  );
}

export default SlidersFade;