import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import css from './Eat.module.css'

const AssignItem = () => {
    
   const [isChecked, setIsChecked] = useState(false);
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

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
        <div>
      <div className="eat">
        <input
          type="checkbox"
          id="eat"
          // name="topping"
          value="Eaten"
          // checked={isChecked}
          onChange={handleOnChange}
        />
        Eaten
      </div>
      <div className="result">
        {/* Above checkbox is {isChecked ? "checked" : "un-checked"}. */}
      </div>
         <div className="donate">
        <input
          type="checkbox"
          id="donate"
          // name="topping"
          value="Donate"
          // checked={isChecked}
          onChange={handleOnChange}
        />
        Donated
      </div>
             <div className="Waste">
        <input
          type="checkbox"
          id="waste"
          // name="topping"
          value="Waste"
          // checked={isChecked}
          onChange={handleOnChange}
        />
        Wasted
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Done</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<AssignItem />);


export default AssignItem