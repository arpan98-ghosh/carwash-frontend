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
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBCardHeader,MDBBtn,MDBListGroup, MDBListGroupItem 
  } from 'mdb-react-ui-kit';
import Sidebar from "../components/Sidebar";
import getAllOrder from "../service/auth.service";
const Orders = () =>{
    const [Allorders, setorders] = useState([]);
    /*** fetch user data from databse ***/
    const loadDataOnlyOnce = () => {
        
        getAllOrder
            .getAllOrder()
            .then((response) => {
                 console.log("Getting current order data", response.data);
                setorders(response.data);
                // setRole(response.data.role);

            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    
  }
     /** function that calls  on page load */
     useEffect(() => {
        loadDataOnlyOnce();
      }, [])
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
        <MDBTable align='middle' responsive x>
              <MDBTableHead>
                  <tr>
                      <th scope='col'>Order ID</th>
                      <th scope='col'>Washer Id</th>
                      <th scope='col'>Email Id</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Time</th>
                      <th scope='col'>Washer Name</th>
                      <th scope='col'>Washer Location</th>
                      <th scope='col'>Package</th>
                      <th scope='col'>Cost</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Actions</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
                  
                  {Allorders.map(function(order, i){
                        return (<tr>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle' />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{order.orderName}</p>
                                    <p className='text-muted mb-0'>{order.emailId}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{order.line1}, {order.city}</p>
                            <p className='fw-normal mb-1'>{order.state}, {order.pincode}</p>
                            
                        </td>
                        <td>{order.landmark}</td>
                        <td>{order.phoneNo}</td>
                        <td>
                            <MDBBtn color='danger' rounded size='sm'>
                                Delete
                            </MDBBtn>
                        </td>
                    </tr>);
                    })}
                  
              </MDBTableBody>
          </MDBTable>
        </div>
        </MDBCol>
      </MDBRow>
      </div>
    </>
);

};
export default Orders;