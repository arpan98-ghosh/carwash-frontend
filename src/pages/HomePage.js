import React from "react";
import SlidersFade from "../components/SliderSection";
import PriceList from '../components/PackageSecion';
import CollapsibleNav from '../components/NavSection';
import { ReactSession } from 'react-client-session';
import { MDBCol, MDBRow,MDBListGroup,MDBListGroupItem,MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage, } from "mdb-react-ui-kit";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faStar, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
const HomePage = (props) => {
    ReactSession.setStoreType("sessionStorage");
    const urole = ReactSession.get("role");
    const uemail = ReactSession.get("myemail");
    // if(!uemail){
    //     props.history.push('/login');
    // }
    return(
        <>
        <CollapsibleNav />
         <SlidersFade/>
        <div className='py-4 bg-light mb-2'>
            <h2>Explore Our Smart Packages</h2>
            <label>Get exciting pocket friendly packages according your choice</label>
        </div>
        <PriceList/>
        <div className='py-4 bg-light'>
            <h2>Why Choose Us</h2>
            <label>Something Extraordinary makes us Suitable for You</label>
        </div>
        <MDBRow className="px-5 ">
            <MDBCol className="p-4">
            <div className='bg-image hover-overlay'>
            <img src='https://cdn.pixabay.com/photo/2016/09/12/17/20/car-wash-1665286_960_720.jpg' className='img-fluid' />
            <a href='#!'>
                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
            </a>
            </div>

            </MDBCol>
            <MDBCol>
                <br/>
            <MDBListGroup style={{ minWidthL: '22rem' }} light>
                <MDBListGroupItem>Professional Experts</MDBListGroupItem>
                <MDBListGroupItem>Top Quality Washing Material</MDBListGroupItem>
                <MDBListGroupItem>Customised Packeges</MDBListGroupItem>
                <MDBListGroupItem>Take care of your car like your Baby</MDBListGroupItem>
                <MDBListGroupItem>On Time Delivery</MDBListGroupItem>
            </MDBListGroup>
            </MDBCol>
        </MDBRow>
        <div className='py-4 bg-light'>
            <h2>What our customers Says</h2>
            <label>Valuable replies from valueable customers makes us more perfet</label>
        </div>
        <MDBRow className="mx-0 px-5 bg-light">
            <MDBCol className="d-flex justify-content-center mx-2">
                <MDBCard style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src='https://cdn.pixabay.com/photo/2012/02/29/11/59/adult-18774_960_720.jpg' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>ZARA KHAN</MDBCardTitle>
                        <MDBCardText>
                        very good and customer friendly
                        </MDBCardText>
                        <MDBCardText>
                        <small className='text-muted'><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /></small>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center mx-2">
                <MDBCard style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src='https://cdn.pixabay.com/photo/2015/03/26/20/03/mercedes-amg-gt-693376_960_720.jpg' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>Lisbon Guptil</MDBCardTitle>
                        <MDBCardText>
                        pocket friendly
                        </MDBCardText>
                        <MDBCardText>
                        <small className='text-muted'><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /></small>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center mx-2">
                <MDBCard style={{ maxWidth: '540px' }}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src='https://cdn.pixabay.com/photo/2015/09/09/18/06/family-932245_960_720.jpg' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>Belami Bleck</MDBCardTitle>
                        <MDBCardText>
                        just awesome
                        </MDBCardText>
                        <MDBCardText>
                        <small className='text-muted'><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /><FontAwesomeIcon icon={faStar} className="text-warning" /></small>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
        </>
    );
};
export default HomePage;