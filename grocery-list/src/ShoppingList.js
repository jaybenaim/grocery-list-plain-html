import React from 'react';
import Product from './Product'

class ShoppingList extends React.Component { 
    state = { 
        value: 0, 
        name: this.props.name, 
        category: this.props.category, 
    }
    updateItem = (newValue) => { 
        this.setState ({ value: newValue })
    }
    
    render(){ 
        return (
            <ul id="shoppingList" className="shoppinglist">
                <Product value={this.state.value} name={"Steaks"} category={"meat"} handleNewValue={this.updateItem}/> 
                <Product value={this.state.value} name={"Apples"} category={"prod"} handleNewValue={this.updateItem}/> 
                <Product value={this.state.value} name={"Milk (1L, 2%)"} category={"dairy"} handleNewValue={this.updateItem}/> 
                <Product value={this.state.value} name={"Baguettes"} category={"bakery"} handleNewValue={this.updateItem}/> 
            </ul>
        )
    } 
}

export default ShoppingList; 
