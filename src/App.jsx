// function App(){
//   return <h1>Hello world + Hi</h1>
// }

// export default App;

// function App() {

//   const password = "123"
//   return  <h1>{password === "1236" ? "Welcome" : "Go back"}</h1>
// }



// function App() {


//   return (
// <>
//   <h1>Mohamed</h1>
//   <span>1980</span>
//   {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem. */}

//   </>
    
//   )

// }

// function App() {

//   const students = ["Mohamed", "Hamdi", "Ali", "Maryan"]

  

//   return students.map(student => <h1>{student}</h1> )
// }

// function App() {

//   const password = '1234'
//   return (password === "1234" ? "Welcome" : "Go back")
// }


// function App () {

//   return (
//     <>

// <h1>Mohamed</h1>
// <h2>Ahmed Nor</h2>
// <span>Age 25</span>


// </>
//   )
// }



// function App() {
  
//   const students = ["Mohamed ", "Ali", "Faduma"]

//   return students.map(student => <p>{student}</p>)
// }


// import {Greeting,WelcomeMessage} from "./Greeting";
// function App() {

//   return   (
//   <>
//    <Greeting/>
//    <WelcomeMessage/>

//    </>
//    )
// }


import UserCardComponent from "./Exer1";
import { UserCardNamedComponent } from "./Exer1";



function UserCard() {
  return (
    <>

    <UserCardComponent/>
    <UserCardNamedComponent/>


    </>
  )

  

}


export default UserCard;