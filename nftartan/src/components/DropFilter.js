import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropFilter = (props) => {
  const [text, setText] = useState(props.text)

  return (
    <div className="dropdown-filter">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" className="dropdown-first">
          {text}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item href="#">Filter 1</Dropdown.Item>
          <Dropdown.Item href="#">Filter 2</Dropdown.Item>
          <Dropdown.Item href="#">Filter 3</Dropdown.Item>        
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropFilter