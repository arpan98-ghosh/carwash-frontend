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
    MDBCol,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput,
    MDBDropdown,
    MDBDropdownItem,

} from 'mdb-react-ui-kit';
import getAllWasher from "../service/auth.service";
import CollapsibleNav from '../components/NavSection';

const Findwasher = (props) =>{
    const [Allwashers, setwashers] = useState([]);
    
    const [emailId, setEmailId] = useState("");
    const [washerName, setwasherName] = useState("");
	const [line1, setline1] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [landmark, setlandmark] = useState("");
	const [phoneNo, setphoneNo] = useState("1234");
    const [password, setpassword] = useState("");

    const Handlewasher=(name,location,email)=>{
        localStorage.setItem('washerName',name);
        localStorage.setItem('washerLocation',location);
        localStorage.setItem('washerEmail',email);

    }
   
    const loadDataOnlyOnce = () => {     
        getAllWasher
            .getAllWasher()
            .then((response) => {
                 console.log("Getting current washer data", response.data);
                setwashers(response.data);
                // setRole(response.data.role);

            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
            localStorage.removeItem('washerEmail');
  }

useEffect(() => {
    loadDataOnlyOnce();
  }, [])
  const [basicActive, setBasicActive] = useState('tab1');

const handleBasicClick = (value) => {
if (value === basicActive) {
  return;
}

setBasicActive(value);
};
return (
<><CollapsibleNav/>   
<MDBRow className='' style={{height:"79vh",overflow:"scroll"}}>
    {/* <p>{localStorage.getItem('packageName')}</p> */}
    <MDBCol>
        <MDBTable align='middle' responsive >
              <MDBTableHead>
                  <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Address</th>
                      <th scope='col'>landmark</th>
                      <th scope='col'>Phone</th>
                      {/* <th scope='col'>Package</th> */}
                      <th scope='col'>Actions</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
                  
                  {Allwashers.map(function(washer, i){
                        return (<tr>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle' />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{washer.washerName}</p>
                                    <p className='text-muted mb-0'>{washer.emailId}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{washer.line1}, {washer.city}</p>
                            <p className='fw-normal mb-1'>{washer.state}, {washer.pincode}</p>
                            
                        </td>
                        <td>{washer.landmark}</td>
                        <td>{washer.phoneNo}</td>
                        {/* <td>
                        <select aria-label="Default select example" className='form-control'>
                            <option>Standard</option>
                        </select>
                        </td> */}
                        <td><a href="/checkout">
                            <MDBBtn color='info' rounded size='sm' onClick={Handlewasher(washer.washerName,washer.city,washer.emailId)}>
                                Book Now
                            </MDBBtn></a>
                        </td>
                    </tr>);
                    })}
                  
              </MDBTableBody>
          </MDBTable>
    </MDBCol>
</MDBRow>
       </>
  );
}
export default Findwasher;