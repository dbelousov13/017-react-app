import "./App.css";
// import Greeting from "./components/Greeting";
import React from "react";
import Counter from "./components/Counter";
//rfce

function App() {
  return <Counter />;
}

export default App;

// class App extends Component {
//   // rconst
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Vasia",
//       isGreeting: false,
//     };
//   }

//   // Дописать в стейт isGreeting и передавать в пропсы

//   render() {
//     const { name, isGreeting } = this.state;
//     return <Greeting name={name} isGreeting={isGreeting} />;
//   }
// }
// //rcc

// export default App;

// function App() {
//   return <Greeting name="Vasia" />;
// }
// props = {name:"Vasia"}
// Greeting(props)
