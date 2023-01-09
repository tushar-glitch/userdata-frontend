import React from "react";
import './usercard.css'
function Card (props){
    return <>
<div className="updateCardRowSt">
    <div className="updateCdTitle">Name : {props.firstname} {props.lastname}</div>
    <div className="updateCdTitle">Age : {props.age}</div>
    <div className="updateCdDesc">Email : {props.email}</div>
</div>
    </>
}
export default Card;