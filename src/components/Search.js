import React, {useState}  from 'react';
import { useSelector,  useDispatch  } from 'react-redux';
import { filterClasses } from '../actions';

export default props => {
  const {array, label,onClick} = props;
  const [select, onSelect] = useState(false);
  const dispatch = useDispatch()
  const filter = search => dispatch(filterClasses({key:search, type:"search"}))

     return (
        <div className="wrap">
          <p className="chip-label">{label}</p>
          <div className="search">
              <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={(e)=>filter(e.target.value)} />
          </div>
        </div>
      )
}