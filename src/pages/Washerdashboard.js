import {React, useEffect}from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {useState} from 'react';
import Adminnav from '../components/AdminNav';
import {    
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBCardHeader,MDBBtn,MDBListGroup, MDBListGroupItem 
  } from 'mdb-react-ui-kit';
import Sidebar from "../components/Sidebar";
const Washerdashborad = () =>{
return(
    <>
      <Adminnav/>
      <div className="">
      <MDBRow className="">
        <MDBCol className="col-md-2 bg-dark " style={{height: "79vh"}}>
            {/* <MDBListGroup style={{ minWidthL: '22rem' }} light>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup> */}
            <Sidebar/>
        </MDBCol>
        <MDBCol className="col-md-10" >
        <div className="container mt-3">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
      <MDBCol>
      <MDBCard background='primary' className='text-white mb-3'>
        <MDBCardHeader>Customers</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>1000</MDBCardTitle>
          <MDBBtn href='#' rounded color='dark'>View</MDBBtn>
          {/* <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText> */}
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard background='danger' className='text-white mb-3'>
        <MDBCardHeader>Washers</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>1000</MDBCardTitle>
          <MDBBtn href='#' rounded color='dark'>View</MDBBtn>
          {/* <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText> */}
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard background='warning' className='mb-3'>
        <MDBCardHeader>Orders</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>1000</MDBCardTitle>
          <MDBBtn href='#' rounded color='dark'>View</MDBBtn>
          {/* <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText> */}
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
        </MDBCol>
      </MDBRow>
      </div>
    </>
);

};
export default Washerdashborad;