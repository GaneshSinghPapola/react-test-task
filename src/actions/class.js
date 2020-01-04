import { CLASSES_REQUEST,FILTER_CLASSES,FILTER_BY_LABEL } from '../constants';


export const setClasses = () => ({ type: CLASSES_REQUEST });
export const filterClasses = filter => ({type: FILTER_CLASSES, filter});
