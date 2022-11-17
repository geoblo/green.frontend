import Average from "./components/22-04-25/Average";
import InfoCustomHook from "./components/22-04-25/InfoCustomHook";
import RefSample from "./components/22-04-25/RefSample";

// const App = () => {
//   return (
//     <MyComponent name="김재현" number={7}>
//       <p>dd</p>
//       리액트
//     </MyComponent>
//   );
// };

// const App = () => {
//   return <Counter></Counter>;
// };

// const App = () => {
//   return <Says></Says>;
// };

// const App = () => {
//   return <ComponentExam />;
// };

// const App = () => {
//   return <EventPractice />;
// };

// const App = () => {
//   return <EventPracticeFunc />;
// };

// const App = () => {
//   return <ValidationSample />;
// };

// import React, { Component } from 'react';
// import LifeCycleSample from './components/22-04-22/LifeCycleSample';
// import Average from './components/22-04-25/Average';
// import InfoCustomHook from './components/22-04-25/InfoCustomHook';
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox 
//           ref={(ref) => (this.scrollBoxRef = ref)}
//         />
//         <button onClick={() => this.scrollBoxRef.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <IterationSample />;
// };

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: '#000000',
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }


// function App(props) {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div>
//       {/* <Info /> */}

//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <InfoEffect />}
//     </div>
//   );
// }

// function App(props) {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }


// function App(props) {
//   return (
//     <div>
//       <InfoReducer />
//     </div>
//   );
// }

// function App(props) {
//   return (
//     <div>
//       <Average />
//     </div>
//   );
// }

// function App(props) {
//   return (
//     <div>
//       <RefSample />
//     </div>
//   );
// }


function App(props) {
  return (
    <div>
      <InfoCustomHook />
    </div>
  );
}

export default App;