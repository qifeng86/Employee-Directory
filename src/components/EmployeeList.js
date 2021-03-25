import React from "react";
import API from "../utils/api.js"
import Search from "./SearchBar"



class EmployeeList extends React.Component {

  state = {
    result: [],
    search: ""
  }


  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({ result: res.data.results })
      }).catch(err => console.log(err))
  }



  handleInputChange = event => {
    const name = event.target.value;
    this.setState({
      search: name
    })

  }


  export default EmployeeList;