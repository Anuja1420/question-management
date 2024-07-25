import './App.css';
import {Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { lazy, Suspense } from 'react';

const Home=lazy(()=>import('./Components/Home'));
const CreateQuestion=lazy(()=> import('./Components/CreateQuestion'));
const UpdateQuestion=lazy(()=> import('./Components/UpdateQuestion'));
const ListQuestion=lazy(()=> import('./Components/ListQuestions'));
const ReadQuestion=lazy(()=> import('./Components/ReadQuestion'));


function App() {
  return (
    <div className="App">
      <Menu/>
      <Suspense fallback={
        <div className='container'>
            <div class="d-flex align-items-center" style={{"marginTop":100}}>
            <strong role="status">Loading...</strong>
            <div class="spinner-border ms-auto" aria-hidden="true"></div>
            </div>
        </div>
        }>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createquestion" element={<CreateQuestion/>}></Route>
        <Route path="/updatequestion/:id" element={<UpdateQuestion/>}></Route>
        <Route path="/listquestions" element={<ListQuestion/>}></Route>
        <Route path="/readquestion/:id" element={<ReadQuestion/>}></Route>
        
      </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
