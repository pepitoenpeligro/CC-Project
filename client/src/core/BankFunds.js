import React, { Component, useState, Fragment } from 'react'
import Layout from './Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom';
import * as RB from "react-bootstrap";


const BankFunds = ({history}) => {

    const [values, setValues] = useState({
        units: [],
        unitsVisible : false,
        testnow:'Test Now!',
        nombreUnidades:[],
        funds : [],
        fundsVisible: false
        

        
     });
 
    const {funds, fundsVisible} = values;
 

     React.useEffect(() => {

        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/funds`,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then(function (response) {
            console.log(response);
            console.log(response.data);
            setValues((values) => ({
              ...values,
              funds: response.data,
              fundsVisible: true,
            }));
            console.log("Loans object");
            console.log(funds);
            toast.success("Your bank funds have been recovered");
          });
         
        //  axios({
        //      method: 'POST',
        //      url: `${process.env.REACT_APP_API}/units/list`,
        //      headers:{
        //         'Content-Type': 'application/json',
        //         'Accept':'application/json'
        //     }}).then(function(response ){
        //         console.log("[/units/list] Received:", response.data.listUnidadesName);
        //         setValues(values => ({...values, nombreUnidades: response.data.listUnidadesName}))
        //     })
        }, [])






    const handleTestUnit = (item) =>  (event) => {
        history.push(   {pathname: '/testunits',
                        state:item})
        console.log("EL boton ve:", item)

    }


    const handleTestExam = (name) => (event) => {
        toast.success('A por el test', name)
    }

    const generateBankFundsView = (event) => {
        if (!fundsVisible) {
            return (
              <p>We are loading your funds, please wait until this message changes</p>
            );
          } else {
            console.log("Estare bien?");
            console.log(funds);
            return (
              <div>
                <RB.Table responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {funds.map((item) => (
      
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        {/* <td>{item.amount + '\t€'}</td>
                        <td>{item.duration + '\tdays'}</td> */}
      
                        
                        {/* <td>{new Date(item.updatedAt).toLocaleDateString()}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </RB.Table>
              </div>
            );
          }
    }


    const generateFundsTable = (event) => {

    };



    return(






        <Layout>
            <ToastContainer/>
            <div className="container mt-4 mb-4">
            <div className="row mb-4">
                <div className="col">
                    <h1>Bank Funds</h1>
                    </div>
                </div>

                <div className="row">

                    <div className="col">
      
                {generateBankFundsView()}
                </div>
                </div>
            </div>
            
        </Layout>
    )
}


export default BankFunds;