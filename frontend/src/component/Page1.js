import { useState } from 'react';
import Axios from 'axios';
import Popup from './Popup';
import Error from './Error';
import './Page1.css';
import { motion } from "framer-motion";

function Page1() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);
  const addName = () => {
    if(name.length === 0){
      setError(true);
    }
    else {
      Axios.post('http://localhost:5000/api/user',{name : name}).then((response)=> {setShowName(response.data);}); 
      setPopup(true);
    }
  }

  return (
    <motion.div initial={{y: 500, opacity: 0}} animate={{y: 0, opacity: 1,}}>
      <div class="from-box">
        <div class="from-name">
          <label>กรุณาใส่ชื่อ</label>
          <input type="text" onChange={(event) => {setName(event.target.value)}}/>
          <button id="button1" onClick={addName}>ยืนยัน</button>
          <Popup trigger={popup} message={showName}/>
          <Error trigger={error} setTrigger={setError}/>
        </div>
      </div>
    </motion.div>
  );    
}

export default Page1;
