import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import css from "./AddItemModal.module.css";

function AddItemModal(props) {
  const initialState = {
    name: "",
    est_exp: "",
    category: "",
    quantity: "",
    measurement: "",
  };
  const [searchInput, setSearchInput] = useState(initialState);

  function handleChange(event) {
    event.preventDefault();
    let value = event.target.value;

    if (event.target.name === "quantity") {
      value = value.toString();
    }

    setSearchInput({ ...searchInput, [event.target.name]: value });
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
          Add Item To List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={css.grp}>
        <InputGroup className={css.inputGroup}>
          <FormControl
            placeholder="Item name"
            onChange={handleChange}
            name="name"
            type="text"
            className={css.formControl}
          />
          <FormControl
            placeholder="Expiry date"
            onChange={handleChange}
            name="est_exp"
            type="date"
            className={css.formControl}
          />
          <FormControl
            placeholder="Category"
            onChange={handleChange}
            name="category"
            type="text"
            className={css.formControl}
          />

          <FormControl
            placeholder="Quantity"
            onChange={handleChange}
            name="quantity"
            className={css.formControl}
            type="text"
          />

          <FormControl
            placeholder="Measurement"
            onChange={handleChange}
            name="measurement"
            className={css.formControl}
            type="text"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.save(searchInput)}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddItemModal;
