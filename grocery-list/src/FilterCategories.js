import React from 'react';

const FilterCategories = () => {
     return ( 
       <section id="filterCategories">
            <ul className="filters">
                <li><input type="radio" name="category" defaultValue="all" id="filter0" defaultChecked /><label htmlFor="filter0">all</label></li>
                <li><input type="radio" name="category" defaultValue="meat" id="filter1" /><label htmlFor="filter1">meat</label></li>
                <li><input type="radio" name="category" defaultValue="prod" id="filter2" /><label htmlFor="filter2">prod</label></li>
                <li><input type="radio" name="category" defaultValue="dairy" id="filter3" /><label htmlFor="filter3">dairy</label></li>
                <li><input type="radio" name="category" defaultValue="bakery" id="filter4" /><label htmlFor="filter4">bakery</label></li>
            </ul>
            <form id="newCat" className="cat-new">
                <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
            </form>
        </section>
)
}

export default FilterCategories; 