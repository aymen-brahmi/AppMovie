import React from 'react';
import {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

export default function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Element
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Give The title of the movie" />
    <Form.Label>Movie Description</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description of the movie" />
    <Form.Label>Poster URL</Form.Label>
    <Form.Control type="email" placeholder="Give the URL of the poster" />
    <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Give the Rate of the movie" />

  </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

