import React from 'react'
import {Labels, DayFilter, Search} from '../components';
import {horizontalLine} from "../assets"

/**
 * label for sidebar headings
 * seperator are required for fitering proccessing, mapped with clesses data keys
 */ 
export const SideBar  = () => {
  return (
    <div className="side-menu shadow-cart">
        <Search label="Find Classes"/>
        <img className="Line-65" alt="bar" src={horizontalLine} />
        <Labels label="Class Types" seperator="classType" />
        <img className="Line-65" alt="bar" src={horizontalLine} />
        <Labels label="Experience Label" seperator="level" />
        <img className="Line-65" alt="bar" src={horizontalLine} />
        <Labels label="Times" seperator="scheduledStartAmPm" />
        <DayFilter seperator="calendar" />
        <img className="Line-65" alt="bar" src={horizontalLine} />
      </div>
  )
}
