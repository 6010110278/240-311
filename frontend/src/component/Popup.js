import React from "react";
import { useNavigate } from 'react-router-dom';
import './Popup.css';

function Popup(props){
    const navigate = useNavigate();

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>{props.message}</h1>
                <button className="next-btn" onClick={() => {navigate("/note")}}>ถัดไป</button>
            </div>
        </div>
    ) : "";
}

export default Popup;