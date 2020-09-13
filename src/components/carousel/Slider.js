import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <Alert variant="warning" style={{ textAlign: "center" }}>
          <Alert.Link href="#covid">Read more</Alert.Link>
          {" about our response to Covid-19 "}
        </Alert>
        <Carousel>
          {/* <Carousel.Item>
            <img
              width={500}
              className="d-block w-100"
              src="img1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          {/* </Carousel.Item> */}
          <Carousel.Item>
            <img className="d-block w-100" src="img2.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="img3.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
