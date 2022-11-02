import AddNewDisciplineForm from "../components/disciplines/AddNewDisciplineForm";

const AddDisciplines = () => {
  const getData = () => {
    fetch(
      "https://disciplines-92cb5-default-rtdb.firebaseio.com/disciplines.json"
    ).then( (res) => res.json).then( (data) => data )
  };
  const onAddDisciplineHandler = (formData) => {
    fetch(
      "https://disciplines-92cb5-default-rtdb.firebaseio.com/disciplines.json",
      {
        method: "post",
        body: JSON.stringify(formData),
        header: {
          "application-json": "Json-Data",
        },
      }
    );

    alert("Data Sent!");
  };
  getData();
  return (
    <div>
      Add Disciplines page
      <AddNewDisciplineForm onAddDiscipline={onAddDisciplineHandler} />
    </div>
  );
};

export default AddDisciplines;
