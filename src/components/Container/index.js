import API from "../../utils/api";
import React, { Component } from "react"
import SearchBox from "../SearchBox/index"
import EmployeeData from "../EmployeeData/index"


class Container extends Component {

    state = {
        search: "",
        employees: [],
        searchByLastName: [],
        searchByFirstName: []

    };


    componentDidMount() {
        API.search().then(res => this.setState({
            employees: res.data.results,
            searchByLastName: res.data.results,
            searchByFirstName: res.data.results
        })).catch(err => console.log(err))
    }



    sortByLastName = () => {
        const search = this.state.searchByLastName;
        if (this.state.employee === "asc") {
            const sortby = search.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
            this.setState({
                searchByLastName: sortby,
                employee: "desc"
            })
        } else {

            const sortby = search.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1)
            this.setState({
                searchByLastName: sortby,
                employee: "asc"
            })

        }
    }


    sortByFirstName = () => {
        const search = this.state.searchByFirstName;
        if (this.state.employee === "asc") {
            const sortby = search.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                sortByFirstName: sortby,
                employee: "desc"
            })
        } else {

            const sortby = search.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                sortByFirstName: sortby,
                employee: "asc"
            })

        }
    }


    handleInputChange = event => {
        const employees = this.state.employees;
        const searchByLastName = employees.filter(employee => employee.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        const searchByFirstName = employees.filter(employee => employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        this.setState({
            searchByLastName,
            searchByFirstName
        });
    };

    render() {
        return (
            <div>
                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <EmployeeData
                    results={this.state.searchByLastName}
                    sortByFirstName={this.sortByFirstName}
                    sortByLastName={this.sortByLastName} />
            </div>
        )
    }
}

export default Container