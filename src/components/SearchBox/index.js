import React from "react"
import "./style.css";

function SearchBox(props) {

    return (
        <div>
            <header>
                <div>
                    <div>
                        <h1>Employee Directory</h1>
                    </div>
                    <br></br>
                    <div>
                        <div>
                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                type="text"
                                name="search"
                                placeholder="Search by last name" />
                        </div>
                        <br></br>
                        <div>
                            <button
                                type="submit"
                                onClick={props.handleSearch}>Search</button>
                        </div>
                        <br></br>
                    </div>
                </div>
            </header>
        </div >
    )
}

export default SearchBox