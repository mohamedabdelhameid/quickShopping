import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from './DSC_0415.JPG';

function BasicExample() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
          <BasicExample/>
        </Col>
        <Col>
          <BasicExample/>
        </Col>
        <Col>
          <BasicExample/>
        </Col>
        <Col>
          <BasicExample/>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;


// export default BasicExample;