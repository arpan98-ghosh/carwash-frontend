import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import { Component, useRef } from 'react'
import { ReactSession } from 'react-client-session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CollapsibleNav from '../components/NavSection';
import axios from "axios";
const Login = () => {
    ReactSession.setStoreType("sessionStorage");
    const nameForm = useRef(null)

  const handleClickEvent = () => {
     const form = nameForm.current
     //ReactSession.set("useremail", `${form['useremail'].value}`);
     //alert(`${form['useremail'].value} ${form['userpass'].value}`)
     axios({
        method: "post",
        url: "http://localhost:8093/authenticate",        
        //data: formDataObject,
        data:{
            "username": `${form['useremail'].value}`,
            "password": `${form['userpass'].value}`
        },
        // 
        headers: { "Content-Type": "application/json"},
      })
        .then(function (response) {
          //handle success
          console.log(response);
          handlelogin(response,`${form['useremail'].value}`)
          //alert('success');
          //Feedback="You are registered successfully"
        })
        .catch(function (response) {
          //handle error
          //window.location.reload(false);
          console.log(response);
        });
  }
  function handlelogin(usertoken,uemail){
    //alert(usertoken.data.token + uemail);
    ReactSession.set("myemail", uemail);
    ReactSession.set("mytok", usertoken.data.token);
    ReactSession.set("role", "user");
    window.location.replace("/");
    //window.location.reload(false);
    // axios({
    //     method: "post",
    //     url: "http://localhost:8093/user/getemail/",        
    //     //data: formDataObject,
    //     data:{
    //         "username": `${form['useremail'].value}`,
    //         "password": `${form['userpass'].value}`
    //     },
    //     // 
    //     headers: { "Content-Type": "application/json"},
    //   })
    //     .then(function (response) {
    //       //handle success
    //       console.log(response);
    //       //alert('success');
    //       //Feedback="You are registered successfully"
    //     })
    //     .catch(function (response) {
    //       //handle error
    //       console.log(response);
    //       //console.log(formDataObject);
    //     });
  }
  return (
    <><CollapsibleNav />
    <div className="row container py-5" style={{height:"80vh"}}>
      <div className="col"></div>
      <div className="col ">
        <Card>
          <Card.Body>
            <Form ref={nameForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name={'useremail'} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name={'userpass'} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleClickEvent}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="col"></div>
    </div></>
  );
};
  
export default Login;