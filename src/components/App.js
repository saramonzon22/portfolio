
import '../styles/App.scss';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Who from './Who';
import Projects from './Projects';
import Rrss from './Rrss';



function App() {
  return (
    <div><body><Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Main />
          </>}>
      </Route>
      <Route path='/who' element={
        <>
          <Header />
          <Who /></>
      }></Route>
      <Route path='/projects' element={
        <>
          <Header />
          <Projects /></>
      }></Route>
      <Route path='/networks' element={
        <>
          <Header />
          <Rrss /></>
      }></Route>
    </Routes></body></div>

  );
}

export default App;