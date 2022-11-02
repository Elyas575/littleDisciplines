// import { createContext, useState } from "react";

// const DisciplineContext = createContext({
//   disciplines:[],
//   totalDisciplines:0,
//   addDisciplines: (discipline) => {},
//   removeDisciplineHandler: (disciplineId) => {}

  

// });



// export const DisciplineContextProvider = (props) => {


//   const addDisciplineHandler = (newDiscipline) => {
//     setUserDisciplines((previousDisciplines) => {
//       return previousDisciplines.concat(newDiscipline)
//     }
//      )
//   }
//   // 3 4
//   // 2 3
//   // 1 1
  
//   const removeDisciplineHandler = (disciplineId) => {
//     setUserDisciplines( (previousDisciplines) => {
//       return previousDisciplines.filter( (discipline) => discipline.id !== disciplineId  )
//     })
//   // if true we keep it
//   // if false we discard it
//   }
  


//   const [userDisciplines,setUserDisciplines] = useState([])
//   const context = {
//     favorites: userDisciplines,
//     totalDisciplines:disciplines.length,
//     addFavorite:addDisciplineHandler,
//     removeDiscipline:removeDisciplineHandler

//    }
 
 
//  return <DisciplineContext.Provider value={context}>
//     {props.children}
//     </DisciplineContext.Provider> 
// }


// export default DisciplineContext;