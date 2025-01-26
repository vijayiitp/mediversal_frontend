import React from "react";
import {useState} from 'react';
import UserTable from "../components/table.tsx";
import axios from "axios";
import toast,{Toaster} from 'react-hot-toast';
import {Link} from "react-router-dom";


export default function UserList() {
  const [details,setDetails]=useState(false);
  const [button,setButton]=useState('Show-Details');
  const [patient,setPatient]=useState([]);

  const fetchUsers = async () => { 
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/patients`, {message: 'sendsampleUsers'});
        const data=response.data.patients;
        console.log(data,"userlist");
        setPatient(data);
       
        toast.success('paitent list fetched successfully');
    } catch (error) {
        toast.error('Failed to fetch users. Please try again.');
        console.error('Failed to fetch users:', error);
    }
};

const handleClick = () => {
    setButton('Processing...');
    setTimeout(() => {
        fetchUsers();
        setDetails(!details);
    }, 1000);
};

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center h-screen w-screen">
        <Toaster />
        <h1 className="text-4xl p-5 m-3 w-60 text-center bg-amber-500">User-Details</h1>
        {!details?<button
        className="w-max text-white bg-orange-500 hover:bg-teal-500
         transition-all duration-500 ease-in-out transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={handleClick}>{button}</button>:
        <UserTable 
        patient={patient}
        />}
        {/* <button>  */}
          <Link to="/signup"
          className="btn text-teal-300 hover:text-amber-300 transition-all duration-500 "
          >Add New Patient</Link>
        {/* </button> */}
    </div>
  );
}



