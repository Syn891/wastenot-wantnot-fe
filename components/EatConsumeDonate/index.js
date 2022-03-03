import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import css from './Eat.module.css'


const AssignItem = ({onClick}) => {
    
   const [isChecked, setIsChecked] = useState(false);
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("foo");

  const radios = [
    { name: "Eaten", value: "Eaten" },
    { name: "Wasted", value: "Wasted" },
    { name: "Donated", value: "Donated" }
  ];
function temp(event){
  setRadioValue(event.target.value);
  console.log(event.target.value)

}
  return (
    <>
    <div >
      <button  className={css.box} onClick={handleShow} >
        Assign ‘status’ to checked item(s):
Eaten,  Donated, or Wasted!
      </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eat, Donate or Waste?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form>
    
      <ButtonGroup toggle className='mb-3'>
      
        {radios.map((radio, index) => (
          <ToggleButton
            key={index}
            type="radio"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={e => temp(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
        
      </ButtonGroup>
     
   </Form>
       


    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"onClick={onClick}>Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<AssignItem />);


export default AssignItem

