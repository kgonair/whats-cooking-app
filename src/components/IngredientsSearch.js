import React from "react";
import Recipe from './Recipe';

const IngredientsSearch = () => {


    return (
        <div>
            <h5>Quick Search</h5>
            <form className="search-form" type="text"onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
    </div>
    );
}


export default IngredientsSearch;
