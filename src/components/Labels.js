import React, {useState, useEffect}  from 'react';
import { useSelector,  useDispatch  } from 'react-redux';
import { filterClasses } from '../actions';
const timesArr= ["All", "AM", "PM"]
export default props => {
  const {label, seperator="classType"} = props;
  const {tempClasses=[]} = useSelector(state => state.classes );
  // array can also be placed as constant values ["Dance", "Cardio" ...];
  let array = seperator==="scheduledStartAmPm"?timesArr:tempClasses.length>0?["All",...new Set(tempClasses.map(item =>item[seperator]))]:[]
  const [selects, onSelect] = useState([]);
  const dispatch = useDispatch()
  const type = seperator==="scheduledStartAmPm"?"scheduledStart":seperator;
  const onLabelClick = (value) => {
    value==="All"?onSelect(["All"]):
    onSelect(selects.indexOf(value)>-1?selects.filter(elm=>elm!==value):[...selects, value].filter(sel=>sel!=="All"))
  }
  useEffect(()=>{dispatch(filterClasses({key:selects.indexOf("All")>-1?array:selects, type, seperator,}))},[selects])

  return (
    <div>
      <div className="row" />
      <p className="chip-label">{label}</p>
      <ul className="chip-ul " >
        {array.length > 0 && array.map( seperator => (
          <li className={`${selects.indexOf(seperator)>-1?"chip-li chip-li-selected" : "chip-li"}`}>
            <ul className="inner-ul ">
              <li className="inner-li" onClick={() => onLabelClick(seperator)} key={seperator}>
                <span className="chip-name">{seperator}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};