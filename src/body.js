import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Container from 'react-bootstrap/Container';
import './body.css';
import Butons from './buttons';

function Body(){
  return(
    <>
      <div className={'Div001'}>
        <div>
        <h4>This is the post Title</h4>
        <Container>
          <hr></hr>
        </Container>
        <p>This is the post title</p>
        </div>

      </div>
    </>
  );
}

export default Body;