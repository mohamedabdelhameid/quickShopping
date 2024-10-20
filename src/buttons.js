import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Button from 'react-bootstrap/Button';
import './buttons.css';

function Butons(){
  return(
    <>
      <div className={"buttonss"}>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger">Tag Button</Button>
      <Button variant="danger" className='Buttonss1'>Tag Button</Button>
      </div>
    </>
  );
}

export default Butons;