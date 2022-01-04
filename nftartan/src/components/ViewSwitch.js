import React, { useState} from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ViewSwitch = () => {
  return (
    <div className="view-switch">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary"> 1 </Button>
        <Button variant="secondary"> 2 </Button>
      </ButtonGroup>
    </div>
  )
}

export default ViewSwitch