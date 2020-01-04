import React, { Component, useEffect, useState } from 'react';
import { useSelector,  useDispatch  } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { setClasses } from '../actions';
import moment from "moment";

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
        <div key={item._id } >
          <p> Title - {item.title}</p>
          <p> ClassType - {item.classType}</p>
          <p> Day - {item.scheduledStart?moment(item.scheduledStart).format("ddd D MMM").toUpperCase():""}</p>
          <p> With - {item.instructorDetails?item.instructorDetails.name:""}</p>
          <Button class="ui primary button" onClick={()=>onClick(item)} primary disabled={+item.numBooked >= +item.maxStudents} >{+item.numBooked < +item.maxStudents?"Book Now":"Class Full"}</Button>
          {/* ------------------
          <div className="row"/> */}
        </div>
      ))}

    </div>
  );
}
