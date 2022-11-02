import React from "react";
import { useRef } from "react";
import "./AddNewDisciplineForm.css";
function AddNewDisciplineForm(props) {
  const titleRefObject = useRef();
  const startTime = useRef();
  const finishTime = useRef();
  const description = useRef();
  const img = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const titleRefInput = titleRefObject.current.value;
    const startTimeInput = startTime.current.value;
    const finishTimeInput = finishTime.current.value;
    const descriptionInput = description.current.value;
    const imgInput = img.current.value;

    const formData = {
      title: titleRefInput,
      startTime: startTimeInput,
      finishTime: finishTimeInput,
      description: descriptionInput,
      img: imgInput,
    };

    props.onAddDiscipline(formData);
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title"> Discipline Title </label>
          <input type="text" id="title" ref={titleRefObject} />
        </div>

        <div>
          <label htmlFor='start-time"'> start-time </label>
          <input type="text" id="start-time" ref={startTime} />
        </div>

        <div>
          <label htmlFor="finish-time"> finish-time </label>
          <input type="text" id="finish-time" ref={finishTime} />
        </div>

        <div>
          <label htmlFor="img"> img </label>
          <input type="url" id="img" ref={img} />
        </div>

        <div>
          <label htmlFor="description"> description </label>
          <textarea type="textarea" id="description" ref={description}>
          
          </textarea>
        </div>

        <div>
          <button type="submit"> Add Discipline </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewDisciplineForm;
