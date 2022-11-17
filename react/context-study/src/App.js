import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';

// function App() {
//   return (
//     <ColorContext.Provider value={{ color: "red" }}>
//       <div className="App">
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   );
// }

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
