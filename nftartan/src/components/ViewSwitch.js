import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../styles/ViewSwitch.css'

const ViewSwitch = () => {
  // "grid" or "list" two options
  const [firstViewSelected, setFirstViewSelected] = useState("dark")
  const [secondViewSelected, setSecondViewSelected] = useState("secondary")
  const toggleFirstView = () => {
    if (firstViewSelected == "secondary" && secondViewSelected == "dark") {
      setFirstViewSelected("dark")
      setSecondViewSelected("secondary")
    }
  }

  const toggleSecondView = () => {
    if (secondViewSelected == "secondary" && firstViewSelected == "dark") {
      setFirstViewSelected("secondary")
      setSecondViewSelected("dark")
    }
  }

  return (
    <div className="view-switch">
      <ButtonGroup aria-label="Basic example">
        <Button variant={firstViewSelected} onClick={() => toggleFirstView()}> 
          <svg className="view-icons" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.25 0.25V6.25H6.25V0.25H0.25ZM4.75 4.75H1.75V1.75H4.75V4.75ZM0.25 7.75V13.75H6.25V7.75H0.25ZM4.75 12.25H1.75V9.25H4.75V12.25ZM7.75 0.25V6.25H13.75V0.25H7.75ZM12.25 4.75H9.25V1.75H12.25V4.75ZM7.75 7.75V13.75H13.75V7.75H7.75ZM12.25 12.25H9.25V9.25H12.25V12.25Z" fill="white"/>
          </svg>
        </Button>
        <Button variant={secondViewSelected} onClick={() => toggleSecondView()}> 
          <svg className="view-icons" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.75H10C10.4125 4.75 10.75 4.4125 10.75 4C10.75 3.5875 10.4125 3.25 10 3.25H7C6.5875 3.25 6.25 3.5875 6.25 4C6.25 4.4125 6.5875 4.75 7 4.75ZM7 7.75H10C10.4125 7.75 10.75 7.4125 10.75 7C10.75 6.5875 10.4125 6.25 10 6.25H7C6.5875 6.25 6.25 6.5875 6.25 7C6.25 7.4125 6.5875 7.75 7 7.75ZM7 10.75H10C10.4125 10.75 10.75 10.4125 10.75 10C10.75 9.5875 10.4125 9.25 10 9.25H7C6.5875 9.25 6.25 9.5875 6.25 10C6.25 10.4125 6.5875 10.75 7 10.75ZM3.25 3.25H4.75V4.75H3.25V3.25ZM3.25 6.25H4.75V7.75H3.25V6.25ZM3.25 9.25H4.75V10.75H3.25V9.25ZM13 0.25H1C0.5875 0.25 0.25 0.5875 0.25 1V13C0.25 13.4125 0.5875 13.75 1 13.75H13C13.4125 13.75 13.75 13.4125 13.75 13V1C13.75 0.5875 13.4125 0.25 13 0.25ZM12.25 12.25H1.75V1.75H12.25V12.25Z" fill="white"/>
          </svg>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ViewSwitch