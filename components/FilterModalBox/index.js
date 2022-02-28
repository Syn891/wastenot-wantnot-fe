import { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'

function FilterModalBox(props) {

    const dietaryReqs = ['vegan', 'vegetarian', 'nut-free', 'gluten-free', 'soy-free', 'dairy-free', 'egg-free', 'sesame-free']
    const [meal, setMeal] = useState('')
    const [health, setHealth] = useState([])
    const [isChecked, setChecked] = useState(new Array(dietaryReqs.length).fill(false))
   

    function handleChange(text, position) {

       isChecked.map((item, index)=> {
            if (position === index) {
                const checked = [...isChecked];
                checked[index] = !item;
                setChecked(checked)
                setHealth([...health, text])
            }
        })
    }

    function closeButton() {
        props.onHide()
        props.onChange(health)
    }

    function handleMeal(meal) {
        setMeal(meal)
        props.onClick(meal)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Apply Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label htmlFor="inputPassword5">Dietary Requirements</Form.Label>

  {dietaryReqs.map((type, index) => (
    <div key={type} className="mb-3">
      <Form.Check type='checkbox' id={`check-api-${type}`}>
        <Form.Check.Input type='checkbox' isValid onChange={()=>{handleChange(type, index)}}/>
        <Form.Check.Label>{`${type}`}</Form.Check.Label>
      </Form.Check>
    </div>
  ))}
<br/>
<Form.Label htmlFor="inputPassword5">Meal Type</Form.Label>

    <div key='breakfast' className="mb-3">
      <Form.Check type='radio' id={`check-api-breakfast`}>
        <Form.Check.Input name="groupOptions"type='radio' isValid readOnly checked='Breakfast'/>
        <Form.Check.Label>Breakfast</Form.Check.Label>
      </Form.Check>
    </div>
    <div key='lunch' className="mb-3">
      <Form.Check type='radio' id={`check-api-lunch`}>
        <Form.Check.Input name="groupOptions"type='radio' isValid readOnly checked='Lunch'/>
        <Form.Check.Label>Lunch</Form.Check.Label>
      </Form.Check>
    </div>
    <div key='dinner' className="mb-3">
      <Form.Check type='radio' id={`check-api-dinner`}>
        <Form.Check.Input name="groupOptions"type='radio' isValid readOnly checked='Dinner'/>
        <Form.Check.Label>Dinner</Form.Check.Label>
      </Form.Check>
    </div>

</Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeButton}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
 
  export default FilterModalBox