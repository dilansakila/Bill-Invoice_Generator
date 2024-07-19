import react, {useEffect,useState} from "react";
import pdfTemplate from './pdf/template'
import './App.css';

import React from 'react'

function App() {
  const [InvoiceNumber, setInvoiceNumber] =useState('');
  const [Dates,setDates]=useState('');
  const [view,setView] = useState(true);

  useEffect (()=>{
    const current=new Date();
    const data = '${current.getData()}/${current.getMonth()+1}/${current.getFullYear()}'
    setDates(date);
  },[])

  const create =()=>{
    setView(false);
  }


  return (
    <>
    {
      view?
    <div className='container'>
      <div className="form">
        <div className="input">
          <input type='text' placeholder='Invoice number' value={InvoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)}/>
        </div>
        <div className="button">
          <button onClick={}>Create</button>
        </div>
      </div>
    </div>
    :<pdfTemplate InvoiceNumber={InvoiceNumber} date={Dates}/>
}
    </>
  )
}

export default App;
