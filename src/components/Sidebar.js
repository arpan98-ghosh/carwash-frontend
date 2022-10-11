import React from "react";
import {Nav} from "react-bootstrap";
import {MDBBtn,MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
const Sidebar = (props) => {
   

    return (
        <>
    <br/>
    <div class="list-group list-group-light">
  <a href='/admin/dash' className="list-group-item list-group-item-action  px-3 border-0 " aria-current="true">
    Dashboard
  </a>
  <a href='/admin/customers' className="list-group-item list-group-item-action px-3 border-0" >
   Customers</a>
  <a  href='/admin/washers' className="list-group-item list-group-item-action px-3 border-0">
    Washers
  </a>
  <a href='/admin/orders' className="list-group-item list-group-item-action px-3 border-0">
    Orders
  </a>
  {/* <a href='#' className="list-group-item list-group-item-action px-3 border-0" disabled>
    Logout
  </a> */}
</div>

          
        </>
        );
  };
  //const Sidebar = withRouter(Side);
  export default Sidebar;