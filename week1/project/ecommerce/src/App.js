import './App.css';
import React from 'react';
import Categories from './components/Categories';


const Header = (props) => {
  return<h1>{props.title}</h1>
}


function App() {
  return (
    <div className='App'>
      <Header title='Products'/>
      <Categories />
    </div>
  );
}

export default App;