import React from "react";
import employees from "../employees";
import Moment from "moment";
import "./style.css"
import employees from "../../data/employee.json"


class SearchForm extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            employee: employee,
            search: ""
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)})
    }

    defaultValue(event){
        this.setState({search: ""})
    }

    render (){
        let filteredEmployees = this.state.emplopyee.filter(emp => emp.name.first.toLowerCase().indexof(this.state.search.toLocaleLowerCase()) !== -1 |  emp.anme.last.toLowerCase().indexof(this.state.search.toLocaleLowerCase()) !== -1);
        
        Moment.locale("en")

        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-12 col-md-3 align-self-center">
                    <form className="text-center input-group">
                        <input type="text" placeholder="Search" name="searchField" className="form-control"value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                        <div className="input-group-append">
                            <span className="input-group-text"type="button" onClick={this.deleteValue.bind(this)}>x</span>
                        </div>
                    </form>
                    </div>
                </div>
            <div className="row">
                <div className="col">
                
                            <Employees
                                allEmp={filteredEmployees} 
                            />
                     
                </div>
            </div>

        </div>
        )
    }
}

export default SearchForm;