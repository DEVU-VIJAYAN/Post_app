import logo from './logo.svg';
import './App.css';
import AddPost from './component/AddPost';
import SearchPost from './component/SearchPost';
import DeletePost from './component/DeletePost';
import AddNav from './component/AddNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPost from './component/ViewPost';

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AddPost/>}/>
    <Route path="/SearchPost" element={<SearchPost/>}/>
    <Route path="/DeletePost" element={<DeletePost/>}/>
    <Route path="/ViewPost" element={<ViewPost/>}/>

    



    </Routes>
    
    
    </BrowserRouter>


    
  );
}

export default App;
