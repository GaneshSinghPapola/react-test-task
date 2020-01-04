import React, { Component, useEffect, useState } from 'react';
import { useSelector,  useDispatch  } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { setClasses } from '../actions';
import moment from "moment";
import { dummy } from "../assets";

export const Body = props => {
const [select, onSelect] = useState(false);

  const dispatch = useDispatch()
  const loadClasses = () => dispatch(setClasses());
  useEffect(() => {
    loadClasses();
  }, []);
  
  const onClick = ({numBooked, maxStudents})=>{
    if(+numBooked >= +maxStudents) return alert(" Classes are full")
    alert("Booked successfuly")
  }
  const {classes=[]} = useSelector(state => state.classes);
  console.log('classes', classes)
  return (
    <div className="home" >
      {classes && classes.length && classes.map((item,index) => (
        <div key={item._id } className="shadow-cart">
          <div className="class-detail">
            <img alt="" className="class-thumb" src={dummy} />
            <div className="card-right">
                <div className="detail-view">
                  <h2> {item.title}</h2>
                  <p> With <span className="instructor-name">{item.instructorDetails.name}</span></p>
                  <div className="date-time"> 
                    <p>
                      {item.scheduledStart?moment(item.scheduledStart).format("ddd D MMM").toUpperCase():""} 
                    </p>
                    <p>{item.scheduledStart?moment(item.scheduledStart).format("HH:MM").toUpperCase():""}  {item.durationInMinutes}MINS</p>
                    <p>{item.numBooked}/ {item.maxStudents} LEFT</p>
                  </div>
                </div>
                <div className="action-view">
                  <p> <span>CLASSTYPE</span> {item.classType}</p>
                  <p> <span>LEVEL</span> {item.level}</p>
                  <Button className="ui primary button" onClick={()=>onClick(item)} primary disabled={+item.numBooked >= +item.maxStudents} >{+item.numBooked < +item.maxStudents?"Book Now":"Class Full"}</Button>
                </div>
            </div>
          </div>
          
          
        </div>
      ))}

    </div>
  );
}
