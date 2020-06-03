import React from 'react'
import {Carousel} from 'react-bootstrap'
import './componentsCSS/banner.scss'


class BannerSlider extends React.Component {
    render () {
      return (
      <React.Fragment>
      <div className='container-fluid'>
        <Carousel>
              <Carousel.Item>
                  <img
                    src={require('../assets/bannerSlider.jpg')}
                    alt="First slide"
                  />
              </Carousel.Item>

            <Carousel.Item>
                <img
                  src={require('../assets/bannerSlider.jpg')}
                  alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                  src={require('../assets/bannerSlider.jpg')}
                  alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
      </React.Fragment>
      );
    }
  }

  export default BannerSlider;