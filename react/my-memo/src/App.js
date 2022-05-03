import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { Routes, Route } from 'react-router-dom';

import MemoTemplate from './components/MemoTemplate';
import MemoWrite from './components/MemoWrite';
import MemoList from './components/MemoList';

import { MemoProvider } from './contexts/MemoContext';

const theme = {
  button: "#ffd43b",
  memoBg: "#555555"
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    color: white;
    background: #e9ecef;
  }
`;

function App() {
  return (
    <MemoProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<MemoTemplate />}>
            <Route path="/" element={<MemoList />} />
            <Route path="/write" element={<MemoWrite />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </MemoProvider>
  );
}

export default App;
