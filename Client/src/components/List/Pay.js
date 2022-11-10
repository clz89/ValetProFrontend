import React, { useReducer, useState, useEffect } from 'react';
import { createCar, updateCar } from '../../_actions/subCars';
import { updatePull } from '../../_actions/pulls';
import { useDispatch, useSelector } from 'react-redux';
import { upReset } from '../../_actions/updateForm';
const formReducer = (state, event) => {

   if(event.reset) {
     return {
     
    }
 }
  return {
      ...state,
    [event.name]: event.value
  }
  
}
function Pay({ pullId, setModal}) {

  const post = useSelector( state => state.updateForm )
  const pos = Object.values(post)
  
  useEffect (() => {
    const jso = JSON.stringify(post);
      localStorage.setItem("upform2", jso);
    })
  
      const json = localStorage.getItem("pay");
  const savedNotes = JSON.parse(json);
      
  const dispatch = useDispatch() 

  const length = pos.length

  const [formData, setFormData] = useReducer(formReducer,  
  length!==0 && post._id!==1 ? post : savedNotes ? savedNotes : {room: 880, type: "on"});

      const handleChange = (event) => {     
        if(formData._id === post._id){     
          setFormData({
            name: event.target.name,
            value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
          })}}; 

      const handleSubmit = (e) => {
          e.preventDefault();
        if (!formData.complete && formData.price && formData.payment){
          const _id = formData._id    
          dispatch(updateCar(_id, formData))
          dispatch(updatePull(_id, formData))
          dispatch(upReset(post))
          setFormData({reset: true}) 
          setModal(false)   } 
        }
    
        const jsont = JSON.stringify(formData);
        localStorage.setItem("pay", jsont);
                         
    return (
   <div>
    <form className="pay">
        <p>Pay Ticket</p>
        
        <div className="paydiv">
            <label>
                <button className="paybtn" value={formData.price || ''} >{formData.price || ''}</button>
            </label>
            <label>
                <button className="paybtn" value="$20" onClick={handleChange} >$20</button>
            </label>
            <label>
                <button className="paybtn" value="$10" onClick={handleChange} >$10</button>
            </label>
            <label>
                <button className="paybtn" value="$7" onClick={handleChange} >$7</button>
            </label>
            <label>
                <button className="paybtn" value="$44" onClick={handleChange} >$44</button>
            </label>
        </div>
        {pullId}
        <div className="paydiv">
            <label>
                <button classsName="paybtn" value={formData.payment || 'payment'} >{formData.payment || 'payment'}</button>
            </label>
            <label>
                <button classsName="paybtn" value="Cash" onClick={handleChange} >Cash</button>
            </label>
            <label>
                <button classsName="paybtn" value="CreditCard" onClick={handleChange} >Credit</button>
            </label>
            <label>
                <button classsName="paybtn" value="FrontDesk" onClick={handleChange} >House</button>
            </label>
            <label>
                <button classsName="paybtn" value="Bitcoin" onClick={handleChange} >Bitcoin</button>
            </label>
        </div>
        <div className='bdiv'>
        <button  className="mbtn paysubmit"  type="submit"  onClick={handleSubmit} >Set to Paid</button>
        </div>
        </form>
    </div>
     )};
export default Pay;