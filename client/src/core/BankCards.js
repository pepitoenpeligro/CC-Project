import React, {useState} from 'react'
import Layout from './Layout'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as RB from "react-bootstrap";
import Lottie from "react-lottie";


const BankCards = ({history}) => {

    const [values] = useState({
        units: [],
        unitsVisible : false,
        testnow:'Test Now!',
        nombreUnidades:[],
        cards:[{
            "id" : 0,
            "amount": 544.4,
            "dateStart": "toady",
            "dateEnd": "tomorrow",
            "status": true
        },
        {
            "id" : 1,
            "amount": 2547,
            "dateStart": "toady",
            "dateEnd": "tomorrow",
            "status": true
        }],
        cardsVisible:true
     });
 
    const {cards, cardsVisible} = values;


    const animationOptions = {
        loop: true,
        autoplay: true,
        path: "https://assets3.lottiefiles.com/packages/lf20_y0hSoJ.json"
        // height: 100,
        // rendererSettings: {
        //   preserveAspectRatio: "xMidYMid slice",
        // },
      };
 

     React.useEffect(() => {
        toast.error("This functionality will be completed in the next milestone. Sorry for the inconvenience");
    }, [])






    // const handleTestUnit = (item) =>  (event) => {
    //     history.push({pathname: '/testunits',state:item})
    //     console.log("EL boton ve:", item)
    // }


    const generateBankCardsView = (event) => {
        if (!cardsVisible) {
          return (
            <p>We are loading your cards, please wait until this message changes</p>
          );
        } else {
          console.log("Estare bien?");
          console.log(cards);
          return (
            <div>
              <RB.Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {cards.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.amount + "\t€"}</td>
                      <td>{item.dateStart}</td>
                      <td>{item.dateEnd}</td>
                      <td>{item.status + ""}</td>
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
      };



    return(
        <Layout>
            <ToastContainer/>
            <div className="container mt-4 mb-4">
            <div className="row mb-4">
                <div className="col">
                    <h1>Bank Cards</h1>

                    <div className="container">
                            <Lottie
                            options={animationOptions}
                            height={400}
                            width={400}
                            isStopped={false}
                            isPaused={false}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col">
      
                {generateBankCardsView()}
                </div>
                </div>
            </div>
            
        </Layout>
    )
}


export default BankCards;