import React from 'react'
import Rate from './Rate'
import {InputGroup,FormControl,} from 'react-bootstrap';
function Filter() {
  return (
    <div className="filter" >
      <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
    <FormControl
      placeholder="Search Movie By Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
      />
      </InputGroup>
      <Rate/>
    </div>
  )
}

export default Filter