import React, {useState, useEffect}  from 'react';
import { useSelector,  useDispatch  } from 'react-redux';
import { filterClasses } from '../actions';
import Calendar from 'react-calendar';

export default  props => {
  const {seperator="calendar"} = props;
  const dispatch = useDispatch()
  
  return (
    <div>
      <Calendar onChange={date=>dispatch(filterClasses({key:date, type:"scheduledStart", seperator}) )} />
    </div>
  );
};