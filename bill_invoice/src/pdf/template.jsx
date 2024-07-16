import ReactToPrint from "react-to-print";
import React, {useRef,useState,useEffect} from 'react';
import {Close} from '@mui/icons-material'
import {Dialog,DialogTitle,DialogContent} from '@mui/material'
import barcode from "react-barcode";

function pdfTemplate (props) {
 const ref =useRef();
 const [openAirPopup] = usestate(false);

 const [Item, setItem ] = useState('');
 const [Amount,setAmount] = useState(0);

 const [List,setList] = useState([]);

 const addData = ()=>{
  list.push({
    product:Item,
    amount:Amount,
  })
 }
 let sum=0;
 list.forEach(amount=> {
  sum += parseInt(amount.amount)
 })

 return(
  <>
  <div className="container" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 barcode">
              <Barcode value={'4n%${props.InvoiceNumber}+ut%'} width={1} height={50} displayValue={false} />
               
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
  </>
 )
}


