

import moment from "moment";
import { CLASSES_FAILED,CLASSES_SUCCESS,CLASSES_REQUEST, RESET, FILTER_CLASSES } from '../constants';

const searchMatcher = ["title", "classType", "classSubType", "description", "level", 
                        "visibility", "status", "instructorDetails.name", "enterpriseDetails.name"];
const initialState = { 
  classes : [],
  tempClasses:[],
  loading: false,
  error: '' 
};

/**
 * helper function for searching and filtering through seach box ,class types and experience level
 * @param {*} search 
 * @param {*} obj 
 */
const filterWithSearchKeys = (search = "", obj={}) =>
      searchMatcher.map(item =>
        obj[item]?
        obj[item].toString().toLowerCase().indexOf(search.toString().toLowerCase()) >-1
        : false
    )
const mapFunctionToFilter =  {
    search :(array, key) => array.filter(item=> filterWithSearchKeys(key, item).indexOf(true)>-1),
    classType:(array, keys, seperator) => array.filter(item=> keys.indexOf(item[seperator])>-1),
    level:(array, keys, seperator) => array.filter(item=> keys.indexOf(item[seperator])>-1),
    scheduledStartAmPm:(array, date, seperator) => 
                                array.filter(item=> item[seperator]?date.indexOf(moment(item[seperator]).format('A')) >-1:false ),
    calendar:(array, date, seperator) => array.filter(item=> item[seperator]?
                                        moment(date).format("YYYY-MM-DD")===moment(item[seperator]).format('YYYY-MM-DD') :false ),
    undefined : (array)=>array,
    null : (array)=>array,
}
export default function classes(state = initialState, action) {


  switch (action.type) {
    case CLASSES_REQUEST: 
        return {
            ...state,
            loading: true,
            error:''
        };
    
    case CLASSES_SUCCESS: 
        return {
            ...state,
            classes: action.classes,
            tempClasses: action.classes,
            loading: false
        }
    
    case CLASSES_FAILED: 
        return {
            ...state,
            loading: false,
            error: action.error
        };
    case FILTER_CLASSES :
      const {filter = {}} = action;
      const {key="_", type="search", seperator="search"} = filter;
      const filtered = mapFunctionToFilter[seperator]?mapFunctionToFilter[seperator](state.tempClasses, key, type):null
        return {...state,  classes: filter?filtered:state.tempClasses };

    case RESET :
        return initialState;
    default: {
        return state;
    }
}
}
