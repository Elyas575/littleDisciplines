import DisciplineList from "../components/disciplines/DisciplineList";
import DisciplineItem from "../components/disciplines/DisciplineItem";
import { useEffect , useState } from "react";


const Home = () => {
  const [loadedDisciplines,setloadedDisciplines] = useState([])
  const [isLoading,setIsLoading] = useState(true)

 useEffect( () => {
  fetch("https://disciplines-92cb5-default-rtdb.firebaseio.com/disciplines.json", 
{
 
})
  .then( (res) => { return res.json() })
   .then( (data) => {

    const disciplines = []

    for(const key in data){
      console.log(key)
      const discipline = {
        id:key,
        ...data[key]
      }

      disciplines.push(discipline);

    }



    setIsLoading(false);
    setloadedDisciplines(disciplines)

   })
 }
 
 , [])
  
if(isLoading){
  return <h1> Loading.. </h1>
}


  return (
    <div>
      

      <DisciplineList dis={loadedDisciplines} />
    </div>
  );
};

export default Home;
