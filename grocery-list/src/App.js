import React from 'react';
import './App.css';
import Header from './Header'; 
import NewItemForm from './NewItem'
import FilterCategories from './FilterCategories'
import ShoppingList from './ShoppingList'

const App = () => {
return (
    <main className="layout" id="app">
        <Header />
        <NewItemForm /> 
        <FilterCategories /> 
        <ShoppingList /> 
    </main> 
);
}

export default App;
