import { MDBCol, MDBRow , MDBInput, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBBtn} from "mdb-react-ui-kit";
import React from "react";
import Myfooter from "../components/FooterSction";
import CollapsibleNav from "../components/NavSection";
import {useState} from 'react';
import order from "../service/auth.service";
const Checkout = () => {
    const [orderId, setorderId] = useState("123456789");
    const [washerId, setwasherId] = useState("");
    const [emailId, setemailId] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastname, setlastname] = useState("");
    const [timeDate, settimeDate] = useState("");
    const [washerName, setwasherName] = useState("");
    const [washerLocation, setwasherLocation] = useState("");
    // const [pack, setpack] = useState("");
    // const [cost, setcost] = useState("");
    const [success, setsuccess] = useState("");

    const handlecheckout = () => {
        // const form = nameForm.current
        const data = {
            "orderId":"123456789",
            "washerId":localStorage.getItem('washerEmail'),
            emailId,
            firstName,
            lastname,
            timeDate,
            "washerName":localStorage.getItem('washerName'),
            "washerLocation":localStorage.getItem('washerLocation'),
            "pack":localStorage.getItem('PackageName'),
            "cost":(parseInt(localStorage.getItem('PackageCost'))*18/100)+parseInt(localStorage.getItem('PackageCost')),
            "success":"success" 
       };
       order
           .order(data)
           .then(function (response) {
             //handle success
             console.log(response);
             //handlelogin(response,`${form['useremail'].value}`)
             //alert('success');
             //Feedback="You are registered successfully"
           })
           .catch(function (response) {
             //handle error
             //window.location.reload(false);
             console.log(response);
           });
     }
    return(
        <>
        <CollapsibleNav/>
        <MDBRow style={{height: "79vh"}}>
            
            <MDBCol className="col-md-8 px-5">
            <h3 className="pt-3">Checkout</h3>
                {/* <span>{localStorage.getItem('washerEmail')}</span> */}
                
                <b className="">You have selected Washer </b><hr></hr>
                <MDBRow className='mb-4 '>
                <MDBCol><MDBInput id='form3Example2' label='Washer Name' disabled value={localStorage.getItem('washerName')} onChange={(e) => setwasherName(e.target.value)} /></MDBCol>
                <MDBCol>                    
                    <MDBInput id='form3Example2' label='Washer Id' disabled value={localStorage.getItem('washerEmail')} onChange={(e) => setwasherId(e.target.value)} />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='form3Example2' label='Washer Location' disabled value={localStorage.getItem('washerLocation')} onChange={(e) => setwasherLocation(e.target.value)} />
                </MDBCol>                
                </MDBRow>
                <b className="mt-4">Billing Information</b><hr></hr>
                <MDBRow className='mb-4 '>                
                <MDBCol>
                    <MDBInput id='form3Example1' type="text" label='First name' onChange={(e) => setfirstName(e.target.value)} />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='form3Example2' type="text" label='Last name' onChange={(e) => setlastname(e.target.value)} />
                </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='text' id='form3Example3' label='Email address' onChange={(e) => setemailId(e.target.value)} />
                <MDBInput type="datetime-local" onChange={(e) => settimeDate(e.target.value)} ></MDBInput>
                <br></br>
                <MDBBtn className="btn btn-warning w-100" onClick={handlecheckout}>Place Order</MDBBtn>
            </MDBCol>
            <MDBCol className="col-md-4 px-5"><br></br>
             <MDBCard>
                <MDBCardHeader>
                    <b>Package Details</b>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol>Package Name</MDBCol>
                        <MDBCol>{localStorage.getItem('PackageName')}</MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>Package Cost</MDBCol>
                        <MDBCol>₹ {localStorage.getItem('PackageCost')}</MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>GST 18%</MDBCol>
                        <MDBCol>₹ {parseInt(localStorage.getItem('PackageCost'))*18/100}</MDBCol>
                    </MDBRow>
                    <hr></hr>
                    <MDBRow>
                        <MDBCol>Total Payable</MDBCol>
                        <MDBCol>₹ {(parseInt(localStorage.getItem('PackageCost'))*18/100)+parseInt(localStorage.getItem('PackageCost'))}</MDBCol>
                    </MDBRow>
                </MDBCardBody>
                <MDBCardFooter>
                    <MDBBtn className="btn-warning" onClick={handlecheckout}>Place Order</MDBBtn>
                </MDBCardFooter>
             </MDBCard>
            </MDBCol>
        </MDBRow>
        </>
    );
}
export default Checkout;