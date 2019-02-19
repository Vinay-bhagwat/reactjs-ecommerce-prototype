import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = props => {
  return (
    <div sm={3} lg={3} className="search-bar">
      <div>
        <SearchIcon className='search-icon'/>
      </div>
      <input type="text" name="name" placeholder='Search hotels, apartments, houses, hotels, destinations and influencers' className='search-input-bar'/>
         </div>
  );
};
export default SearchBar;
