import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import "./AddMovie.css";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const [message, setMessage] = useState("");

  const [newMovie, setNewMovie] = useState({ title: "", rating: "", img: "" });
  const handleNewMovie = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const addNewMovie = (newMovie) => {
    if (
      newMovie.title === "" ||
      newMovie.rating === "" ||
      newMovie.img === ""
    ) {
      alert(
        "Movie title, rating and poster URL are required to add new movie !!"
      );
    } else {
      setMovies([...movies, newMovie]);
      setNewMovie({ ...newMovie, title: "", rating: "", img: "" });
      handleClose();
    }
  };

  /******************************* Version 0 ****************************/
  // const [newTitle, setNewTitle] = useState("");
  // const [newRating, setNewRating] = useState("");
  // const [newImgUrl, setNewImgUrl] = useState("");

  // const handleTitle = (e) => setNewTitle(e.target.value)
  // const handleRating = (e) => setNewRating(e.target.value)
  // const handleImgUrl = (e) => setNewImgUrl(e.target.value)

  // const addNewMovie = (newMovie) => {
  //     setMovies([...movies, newMovie])
  //     setNewTitle(""); setNewRating(""); setNewImgUrl("")
  // }

  return (
    <>
      <Button variant="success" onClick={handleShow} className="addBtn">
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter movie title ..."
            name="title"
            className="inputModal"
            value={newMovie.title}
            onChange={handleNewMovie}
          />
          <Form.Control
            type="number"
            min="1"
            max="5"
            placeholder="Enter movie rate ..."
            name="rating"
            className="inputModal"
            value={newMovie.rating}
            onChange={handleNewMovie}
          />
          <Form.Control
            type="text"
            placeholder="Enter movie poster url ..."
            name="img"
            className="inputModal"
            value={newMovie.img}
            onChange={handleNewMovie}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <span style={{ color: "red" }}>{message}</span> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              addNewMovie({
                id: Math.random(),
                title: newMovie.title,
                rating: newMovie.rating,
                img: newMovie.img,
              })
            }
            /******************************* Version 0 ****************************/
            // onClick={() => {
            //     addNewMovie({
            //         id: Math.random(),
            //         title: newTitle,
            //         rating: newRating,
            //         img: newImgUrl
            //     });
            //     handleClose()
            // }}
          >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
