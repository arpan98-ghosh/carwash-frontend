import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
function PriceList() {
    const Handlepackage=(name,cost)=>{
        localStorage.setItem('PackageName',name);
        localStorage.setItem('PackageCost',cost);

    }
  return (
    <MDBRow className='mb-5'>
        <MDBCol className=' d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/05/31/12/41/cleaning-791542_960_720.jpg" />
        <Card.Body>
            <Card.Title>Standard Wash</Card.Title>
            <Card.Text>
            ₹2199
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Standard Water Wash</ListGroup.Item>
            <ListGroup.Item>Both Interior Exterior</ListGroup.Item>
            <ListGroup.Item>Free Washing Materials</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to = {{ pathname: `/findwasher`, state: {washpackage: "Standard Wash"} }}>
            <button type="button" variant="primary" className='btn btn-primary' onClick={Handlepackage("Standard Wash","2199")} >Book Now</button>
        </Link>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=918420304188&text=Let me know the Standard Wash plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        </Card>
        </MDBCol>
        <MDBCol className='d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/05/21/16/50/car-5201683_960_720.jpg" />
        <Card.Body>
            <Card.Title>Foam Special</Card.Title>
            <Card.Text>
            ₹1999
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Special Foam Wash</ListGroup.Item>
            <ListGroup.Item>Only Exterior</ListGroup.Item>
            <ListGroup.Item>Free Polish</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to = {{ pathname: `/findwasher`, state: {washpackage: "Foam Special"} }}>
            <button type="button" variant="primary" className='btn btn-primary' onClick={Handlepackage("Foam Special","1999")} >Book Now</button>
        </Link>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=918420304188&text=Let me know the standard plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
        </Card.Body>
        </Card>
        </MDBCol>
        <MDBCol className=' d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/05/08/08/49/wash-5144828_960_720.jpg" />
        <Card.Body>
            <Card.Title>Interio Wash</Card.Title>
            <Card.Text>
            ₹999
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Interior Special Wash</ListGroup.Item>
            <ListGroup.Item>With Deep Clean</ListGroup.Item>
            <ListGroup.Item>Free Polish</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to = {{ pathname: `/findwasher`, state: {washpackage: "Interio Wash"} }}>
            <button type="button" variant="primary" className='btn btn-primary' onClick={Handlepackage("Interio Wash","999")} >Book Now</button>
        </Link>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=918240935072&text=Let me know the interio plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
        </Card.Body>
        </Card>
        </MDBCol>
      </MDBRow>
    
  );
}

export default PriceList;