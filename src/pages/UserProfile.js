import React, { useEffect, useState } from "react";
import { MDBCol, MDBInput, MDBRow,MDBBtn,MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCard,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem} from "mdb-react-ui-kit";
import CollapsibleNav from "../components/NavSection";
import { ReactSession } from 'react-client-session';
import { Link, useHistory,useNavigate } from "react-router-dom";
import getUser from "../service/auth.service";
import updateuser from "../service/auth.service";
const UserProfile = () => {
    ReactSession.setStoreType("sessionStorage");
    const sessionemail = ReactSession.get("myemail");
    const token = ReactSession.get('mytok');
    
    const [LoginCustomer, setCustomer] = useState([]);
    const [firstName, setFname] = useState("");
	const [lastName, setLname] = useState("");
    const [emailId, setEmailId] = useState("");
    const [location, setLocal] = useState("");
    const [car, setCar] = useState("");
	const [password, setPassword] = useState("1234");
    const [role, setRole] = useState("");

    /*** fetch user data from databse ***/
    const loadDataOnlyOnce = () => {
        
            getUser
                .getUser(sessionemail)
                .then((response) => {
                    // console.log("Getting current Customer data", response.data);
                    setCustomer(response.data);
                    setRole(response.data.role);

                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        
      }
    /**** function for handaling update user data****/
      const HandleUpdate = (e) => {
        e.preventDefault();
        // alert("fjyg");
        const val = { 
            firstName,
            lastName,
            emailId,
            location,
            password,
            car,
            role
        };
        updateuser
                .updateuser(val)
                .then((response) => {
                    // console.log("setting current Customer data", response.data);
                    window.location.href="/profile"; 

                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                    //console.log(sessionemail+token);
                });
      }
      
      /** function for handle tab control */
    const [justifyActive, setJustifyActive] = useState('tab1');
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };

    /** function that calls  on page load */
    useEffect(() => {
        loadDataOnlyOnce();
      }, [])


return(
    <>
    <CollapsibleNav />
    <br/>   
    <div className="container px-5 mx-5" style={{height:"78vh"}}>
    <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            My Profile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Update Profile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Delete Profile
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'} className="container px-5 mx-5">
        <MDBCard>
        <MDBCardHeader>
        <div className='d-flex align-items-center'>
                              <img
                                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                  alt=''
                                  style={{ width: '45px', height: '45px' }}
                                  className='rounded-circle' />
                              <div className='ms-3'>
                                  <p className='fw-bold mb-1'>{LoginCustomer.firstName} {LoginCustomer.lastName}</p>
                                  <p className='text-muted mb-0'>{LoginCustomer.emailId}</p>
                              </div>
                          </div>
        </MDBCardHeader>
        <MDBListGroup flush>
            <MDBListGroupItem>Locations: {LoginCustomer.location}</MDBListGroupItem>
            <MDBListGroupItem>Car Model: {LoginCustomer.car}</MDBListGroupItem>
        </MDBListGroup>
        </MDBCard>
        
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>
        <form>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='usrfirstname' label='First Name'  onChange={(e) => setFname(e.target.value)} />
            </MDBCol>
            <MDBCol></MDBCol>
            
            
        </MDBRow>
        <br/>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='usrlastname' label='Last Name'  onChange={(e) => setLname(e.target.value)}/>
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='usremail' label='Your Email Id'  onChange={(e) => setEmailId(e.target.value)}/>
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='userlocation' label='Your Location'  onChange={(e) => setLocal(e.target.value)}/>
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='carmodel' label='Your Car model'  onChange={(e) => setCar(e.target.value)}/>
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
                <MDBInput id='userpass' label='Enter a New Password' onChange={(e) => setPassword(e.target.value)}/>
            </MDBCol>
            <MDBCol></MDBCol>
        </MDBRow>
        <br/>
        <MDBBtn outline className='' color='secondary' type="submit" onClick={(e) => HandleUpdate(e)}>
        Update
      </MDBBtn>
      </form>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab3'}>
        <MDBBtn className='' color='danger' > Delee Profile</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
        
    </div>
    </>
);
};
export default UserProfile;