import {React, useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {useState} from 'react';
import Adminnav from '../components/AdminNav';
import Sidebar from "../components/Sidebar";
import {
    MDBBadge, 
    MDBBtn, 
    MDBTable, 
    MDBTableHead, 
    MDBTableBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import getAllCustomer from "../service/auth.service";
import removeCustomer from "../service/auth.service";
const AdminCustomers = () =>{
    const [AllCustomers, setCustomers] = useState([]);
    /*** fetch user data from databse ***/
    const loadDataOnlyOnce = () => {
        
        getAllCustomer
            .getAllCustomer()
            .then((response) => {
                 console.log("Getting current Customer data", response.data);
                setCustomers(response.data);
                // setRole(response.data.role);

            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    
  }
  ///remove customer
  const Handleremove = (email) => {
    //e.preventDefault();
  
    removeCustomer
            .removeCustomer(email)
            .then((response) => {
                 console.log("remove washer data", response.data);
                 //toggleShow();
                 window.location.href="/admin/customers"; 
                // toggleShow();

            })
            .catch((error) => {
                console.log("Something went wrong", error);
                //console.log(sessionemail+token);
            });
  }
    /** function that calls  on page load */
    useEffect(() => {
        loadDataOnlyOnce();
      }, [])
  return (
    <><Adminnav/>   
      <div className=''>
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
        <MDBCol className="col-md-10" style={{height:"78vh",overflow: "scroll"}}>
      <MDBTable align='middle' responsive x>
              <MDBTableHead>
                  <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Loaction</th>
                      {/* <th scope='col'>Status</th> */}
                      <th scope='col'>Car Model</th>
                      <th scope='col'>Actions</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
                  
                  {AllCustomers.map(function(customer, i){
                        return (<tr>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle' />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{customer.emailId} </p>
                                    <p className='text-muted mb-0'>{customer.firstName} {customer.lastName}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{customer.location}</p>
                            {/* <p className='text-muted mb-0'>{}</p> */}
                        </td>
                        {/* <td>
                            <MDBBadge color='success' pill>
                                Active
                            </MDBBadge>
                        </td> */}
                        <td>{customer.car}</td>
                        <td>
                            <MDBBtn color='danger' rounded size='sm' onClick={() => Handleremove(customer.emailId)}>
                                Delete
                            </MDBBtn>
                        </td>
                    </tr>);
                    })}
                  
              </MDBTableBody>
          </MDBTable>
          </MDBCol>
          </MDBRow>
       </div>
       </>
  );
};
export default AdminCustomers;