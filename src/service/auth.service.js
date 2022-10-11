import httpClient from "../http-common";
import { ReactSession } from 'react-client-session';
//let token=localStorage.getItem("token");
ReactSession.setStoreType("sessionStorage");
let token = ReactSession.get('mytok');
//const test = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYWx1QGdtYWlsLmNvbSIsImV4cCI6MTY2MzM2MjM3MSwiaWF0IjoxNjYzMzQ0MzcxfQ.W5uIBtHviuFeJuvZMM49GpGDvC7fEztO8QOXAkX8ag3A2b3LC2cEvPJMTOTPWPJnHClRLGeNuLZyY3MmyIQg8A'
const giveFeedback = (data) => {
  return httpClient.post("/feedback/give", data);
};

// register for customer
const Reg = (data) => {
  return httpClient.post("/user/register", data);
};

// Authentication checker
const auth = (data) => {
  return httpClient.post("/authenticate", data);
};

// Get the logged in user details
const getUser = (id) => {
  return httpClient.get(`/user/getemail/${id}`,{
    headers:{        
       'Authorization': `Bearer ${token}`
       //'Authorization':`Bearer ${test}`
    }
});
};

const updateuser = (data) => {
  return httpClient.put(`/user/updateuser/${data.emailId}`, data,{
    headers:{        
       'Authorization': `Bearer ${token}`
    }
});
};
//update washer
const updatewasher = (data) => {
  return httpClient.put(`/washer/update/${data.emailId}`, data,{
    headers:{        
       'Authorization': `Bearer ${token}`
    }
});
};

// logout a user
const logout = () => {
  return localStorage.clear();
};

const getAllCustomer = () =>{
  return httpClient.get(`/user/getall`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const removeCustomer = (id) => {
  return httpClient.delete(`/user/deleteuser/${id}`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const washerRegister = (data) => {
  return httpClient.post(`/user/washer`, data,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const getAllWasher = () =>{
  return httpClient.get(`/washer/getall`);
};

const getAllOrder = () =>{
  return httpClient.get(`/order/getall`);
};

const removeWasher = (id) => {
  return httpClient.delete(`/user/deletewasher/${id}`,{
    headers:{
        
       'Authorization': `Bearer ${token}`
    }
});
};

const order = (data) => {
  // return httpClient.post(`/pgredirect`, data);
  return httpClient.post(`order/register`, data);
};
export default {Reg, auth, logout, getUser, getAllCustomer, removeCustomer,washerRegister, giveFeedback, getAllWasher,removeWasher,updateuser,updatewasher,order,getAllOrder};