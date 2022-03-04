import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'
import {useState} from 'react'
import css from './AddItemModal.module.css'

function AddItemModal(props) {

    const initialState = {
        name: "",
        est_exp: "",
        category: "",
        quantity: 0,
        measurement: ""
    }
    const [searchInput, setSearchInput] = useState(initialState)


    function handleChange(event) {
        let header = event.target.name
        setSearchInput({header: event.target.value})
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
            add item to pantry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className={css.grp}>
           <FormControl
           placeholder="Item name"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           value={searchInput.name}
           name="name"
           class={css.formControl}
           />
           <FormControl
           placeholder="Expiry date"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           name="est_exp"
           type='date'
           class={css.formControl}

           />
           <FormControl
           placeholder="Category"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           value={searchInput.category}
           name="category"
           type="dropdown"
           className={css.formControl}
           />

           <FormControl
           placeholder="Quantity"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           value={searchInput.quantity}
           name="quantity"
           className={css.formControl}
           />

           <FormControl
           placeholder="Measurement"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           value={searchInput.measurement}
           name="measurement"
           className={css.formControl}
           />
           
       </InputGroup>

 
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.onSave(searchInput)}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default AddItemModal;