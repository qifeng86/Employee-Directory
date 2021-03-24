import React from "react";


function searchBox(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter First or Last Name"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}


export default searchBox;