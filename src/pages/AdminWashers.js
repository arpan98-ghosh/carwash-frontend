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
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,

} from 'mdb-react-ui-kit';
import getAllWasher from "../service/auth.service";
import washerRegister from "../service/auth.service";
import updatewasher from "../service/auth.service";
import removeWasher from "../service/auth.service";
const AdminWashers = () =>{
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

    const [tempwasher, settempwasher] = useState("");
    /*** fetch user data from databse ***/
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
    
  }
  /**** function for handaling register washer data****/
  const Handleregister = (e) => {
    e.preventDefault();
    // alert("fjyg");
    const data = { 
        emailId,
        washerName,
        line1,
        city,
        state,
        pincode,
        landmark,
        phoneNo,
        password 
    };
    washerRegister
            .washerRegister(data)
            .then((response) => {
                // console.log("setting current washer data", response.data);
                window.location.href="/admin/washers"; 

            })
            .catch((error) => {
                console.log("Something went wrong", error);
                //console.log(sessionemail+token);
            });
  }
  //update washer function
  const Handleupdate = (e) => {
    e.preventDefault();
    // alert("fjyg");
    const data = { 
        "emailId":  uemailId,
        "washerName": uwasherName,
        "line1":uline1,
        "city":ucity,
        "state":ustate,
        "pincode":upincode,
        "landmark":ulandmark,
        "phoneNo":uphoneNo,
        "password":upassword 
    };
    updatewasher
            .updatewasher(data)
            .then((response) => {
                 console.log("setting current washer data", response.data);
                 toggleShow();
                 window.location.href="/admin/washers"; 
                // toggleShow();

            })
            .catch((error) => {
                console.log("Something went wrong", error);
                //console.log(sessionemail+token);
            });
  }
    //remove washer
    const Handleremove = (email) => {
        //e.preventDefault();
      
        removeWasher
                .removeWasher(email)
                .then((response) => {
                     console.log("remove washer data", response.data);
                     //toggleShow();
                     window.location.href="/admin/washers"; 
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
      const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const [basicModal, setBasicModal] = useState(false);
//   const [hellochecck, sethello] = useState("");
  // const Forupdate
  const [uemailId, setEmailIdu] = useState("");
  const [uwasherName, setwasherNameu] = useState("");
  const [uline1, setline1u] = useState("");
  const [ucity, setcityu] = useState("");
  const [ustate, setstateu] = useState("");
  const [upincode, setpincodeu] = useState("");
  const [ulandmark, setlandmarku] = useState("");
  const [uphoneNo, setphoneNou] = useState("");
  const [upassword, setpasswordu] = useState("1234");
  const toggleShow = () => setBasicModal(!basicModal);
  const handlemodal = (name,email,line1,city,state,pin,land,phn,pass) =>{
        toggleShow();
        //sethello(val);
        settempwasher(name)

        setEmailIdu(email);
        setwasherNameu(name);
        setline1u(line1);
        setcityu(city);
        setstateu(state);
        setpincodeu(pin);
        setlandmarku(land);
        setphoneNou(phn);
        setpasswordu(pass);
    };

  return (
    <><Adminnav/>   
      <div className=''>
      <MDBRow className="">
        <MDBCol className="col-md-2 bg-dark " style={{height: "79vh"}}>
          <Sidebar/>
        </MDBCol>
        <MDBCol className="col-md-10" style={{height:"78vh",overflow: "scroll"}}>
        <MDBTabs className='mb-3 responsive' >
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            All Washers
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Add Washers
          </MDBTabsLink>
        </MDBTabsItem>
        {/* <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Update Washers
          </MDBTabsLink>
        </MDBTabsItem> */}
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
        <MDBTable align='middle' responsive x>
              <MDBTableHead>
                  <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Address</th>
                      <th scope='col'>landmark</th>
                      <th scope='col'>Phone</th>
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
                        <td>
                            <MDBBtn color='info' rounded size='sm' onClick={() => handlemodal(washer.washerName,washer.emailId,washer.line1,washer.state,washer.city,washer.pincode,washer.landmark,washer.phoneNo,washer.password)}>
                                Update
                            </MDBBtn>
                            <MDBBtn color='danger' rounded size='sm' onClick={() => Handleremove(washer.emailId)}>
                                Delete
                            </MDBBtn>
                        </td>
                    </tr>);
                    })}
                  
              </MDBTableBody>
          </MDBTable>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
        <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol>
                    {/* <MDBInput id='usrfirstname' label='First Name'  onChange={(e) => setFname(e.target.value)} /> */}
                    <MDBInput id='emailId' label='Email' onChange={(e) => setEmailId(e.target.value)} />
                    <br/>
                    <MDBInput id='washerName' label='Washer Name' onChange={(e) => setwasherName(e.target.value)} />
                    <br/>
                    <MDBInput id='line1' label='Location' onChange={(e) => setline1(e.target.value)}/>
                    <br/>
                    <MDBInput id='city' label='Washer City' onChange={(e) => setcity(e.target.value)}/>
                    <br/>
                    <MDBInput id='state' label='Washer State' onChange={(e) => setstate(e.target.value)}/>
                    <br/>
                    <MDBInput id='pincode' label='Washer Pincode' onChange={(e) => setpincode(e.target.value)}/>
                    <br/>
                    <MDBInput id='landmark' label='Washer landmark' onChange={(e) => setlandmark(e.target.value)}/>
                    <br/>
                    <MDBInput type="number" id='phoneNo' label='Washer Phone No.' onChange={(e) => setphoneNo(e.target.value)}/>
                    <br/>
                    <MDBInput type="password" id='password' label='Washer Password' onChange={(e) => setpassword(e.target.value)}/>
                    <br/>
                    <MDBBtn type="submit" onClick={(e) => Handleregister(e)}>
                        Save
                    </MDBBtn>
                    <br/>
                    </MDBCol>
                    
                    <MDBCol></MDBCol>
                </MDBRow>
        </MDBTabsPane>
        
      </MDBTabsContent>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update For {tempwasher}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBRow>
                   
                    <MDBCol>
                    {/* <MDBInput id='usrfirstname' label='First Name'  onChange={(e) => setFname(e.target.value)} /> */}
                    <MDBInput id='uemailId' label='Email' onChange={(e) => setEmailIdu(e.target.value)} value={uemailId} disabled/>
                    <br/>
                    <MDBInput id='uwasherName' label='Washer Name' onChange={(e) => setwasherNameu(e.target.value)} value={uwasherName}/>
                    <br/>
                    <MDBInput id='uline1' label='Location' onChange={(e) => setline1u(e.target.value)} value={uline1}/>
                    <br/>
                    <MDBInput id='ucity' label='Washer City' onChange={(e) => setcityu(e.target.value)} value={ucity}/>
                    <br/>
                    <MDBInput id='ustate' label='Washer State' onChange={(e) => setstateu(e.target.value)} value={ustate}/>
                    <br/>
                    <MDBInput id='upincode' label='Washer Pincode' onChange={(e) => setpincodeu(e.target.value)} value={upincode}/>
                    <br/>
                    <MDBInput id='ulandmark' label='Washer landmark' onChange={(e) => setlandmarku(e.target.value)} value={ulandmark}/>
                    <br/>
                    <MDBInput type="unumber" id='phoneNo' label='Washer Phone No.' onChange={(e) => setphoneNou(e.target.value)} value={uphoneNo}/>
                    <br/>
                    <MDBInput type="upassword" id='password' label='Washer Password' onChange={(e) => setpasswordu(e.target.value)} value="1234"/>
                    {/* <br/>
                    <MDBBtn type="submit" onClick={(e) => Handleregister(e)}>
                        Save
                    </MDBBtn>
                    <br/> */}
                    </MDBCol>
                    
                </MDBRow>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={Handleupdate}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </MDBCol>
        </MDBRow>
       </div>
       </>
  );
};
export default AdminWashers;