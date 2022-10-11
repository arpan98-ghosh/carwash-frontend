import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react'
import { ReactSession } from 'react-client-session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CollapsibleNav from '../components/NavSection';
import Reg from "../service/auth.service"
const Signup = () => {
    ReactSession.setStoreType("sessionStorage");
    const registerform = useRef(null)
    const Feedback="";
  const handleClickEvent = () => {
     const form = registerform.current
     const data={
      "emailId": `${form['useremail'].value}`,
      "firstName": `${form['userfirst'].value}`,
      "lastName": `${form['userlast'].value}`,
      "location": `${form['userlocation'].value}`,
      "password": `${form['userpass'].value}`,
      "car": `${form['carmodel'].value}`
      };

     Reg
        .Reg(data)
        .then(function (response) {
          Feedback="You are registered successfully"
          window.location.replace("/login");
        })
        .catch(function (response) {
          //handle error
          console.log(response);
          //console.log(formDataObject);
        });
      }
  return (
    <><CollapsibleNav />
    <div className="row container pt-2 pb-5">
      <div className="col"></div>
      <div className="col pb-5">
        <Card>
          <Card.Body>
            <Form ref={registerform} onSubmit={handleClickEvent}>
              {/* useremail  */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name={'useremail'} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* userfirstname */}
              <Form.Group className="mb-3" controlId="formfirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Firstname" name={'userfirst'} />
              </Form.Group>
              {/* userlastname */}
              <Form.Group className="mb-3" controlId="formlastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Lastname" name={'userlast'} />
              </Form.Group>
              {/* userlocation */}
              <Form.Group className="mb-3" controlId="formlocaion">
                <Form.Label>Your Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Location" name={'userlocation'} />
              </Form.Group>
              {/* usermodelname */}
              <Form.Group className="mb-3" controlId="formmodelname">
                <Form.Label>Your Car Model</Form.Label>
                <Form.Select aria-label="Default select example" name={'carmodel'}>
                  <option>select your model</option>
                  <option value="Hyundai i10">Hyundai i10</option>
                  <option value="Honda City">Honda City</option>
                  <option value="Mahindra XUV-700">Mahindra XUV-700</option>
                </Form.Select>
                {/* <Form.Control type="text" placeholder="Ex. Hyundai i10,Honda City..." name={'carmodel'}/> */}
                {/* password */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name={'userpass'} />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <small>{Feedback}</small>
          </Card.Body>
        </Card>
      </div>
      <div className="col"></div>
    </div></>
  );
};
  
export default Signup;