import React from 'react'
import {Labels, DayFilter, Search} from '../components';

/**
 * label for sidebar headings
 * seperator are required for fitering proccessing, mapped with clesses data keys
 */ 
export const SideBar  = () => {
  return (
    <div className="side-menu">
        <Search label="Find Classes"/>
        <Labels label="Class Types" seperator="classType" />
        <Labels label="Experience Label" seperator="level" />
        <Labels label="Times" seperator="scheduledStartAmPm" />
        <DayFilter seperator="calendar" />
      </div>
  )
}
