import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Video extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="bg-primary">
          <Row>
            <Col>
              <Card className="bg-primary">
                <Card.Title>
                  Welcome to the Nancy Doizé School Of Dance Conveniently
                  located at 4620 Meridian Avenue, San Jose California, The
                  Nancy Doizé School of Dance has been serving the community
                  with a first rate dance program for over 30 years. We offer
                  dance classes in ballet, jazz, lyrical, hip hop, tap and
                  modern, as well as fitness classes in pilates and Zumba. The
                  studio has three separate classrooms, and teachers who are
                  passionate about all disciplines of dance. We offer an amazing
                  recreational dance program for ages three to adult, as well as
                  a cutting edge performance and competitive dance program for
                  the dancer ready to take it to the next level. The studio's
                  Competition and Performance Team is appropriately titled the
                  "Doizé Dream Team". The team has been National Champions for
                  the past ten years.{" "}
                </Card.Title>
              </Card>
            </Col>
            <Col>
              <Card>
                <iframe
                  title="VOY"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/pP7go-DTNg0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Video;
