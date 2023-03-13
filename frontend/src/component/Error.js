import React from "react";
import './Error.css';

function Error(props){

    return (props.trigger) ? (
        <div className="error-layout">
            <div className="error-position">
                <div className="error-inner">
                    <h1 className="error-message">กรุณาโปรดใส่ชื่อก่อนทำการยืนยัน</h1>
                    <button className="close-btn" onClick={() => {props.setTrigger(false)}}>ปิด</button>
                </div>
            </div>
        </div>    
        ) : "";     
}

export default Error;