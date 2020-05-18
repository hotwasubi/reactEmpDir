import React from "react";
import "./empStyle.css";
import Table from "react-bootstrap/table";
import Moment from "moment";

class Employees extends React.Component {
    constructor(props){
        super(props)
        const { allEmp } = this.props
        this.state = {
            currentState: "arrow_down",
            employeeList: allEmp
        }
    }


    sortName = () => {
        const { allEmp } = this.props
        const { currentState } = this.state

        let newEmp;
        let newState;

        if (currentState === "arrow_down"){
            newEmp = allEmp.sort((a,b) => {if(a.name.first.toLowerCase() < b.name.first.toLowerCase())return -1 } )
            newState = "arrow_up"
        }else if (currentState === "arrow_up"){
            newEmp = allEmp.sort((a,b) => {if(a.name.first.toLowerCase() < b.name.toLowerCase()) return -1} )
            newState = "arrow_down"
        }else{
            newEmp = this.props.allEmp
            newState = "sort"
            return 0
        }
        this.setState({
            currentState: newState,
            employeeList: newEmp
        })
    }

    sortPhone = () => {
        const { allEmp } = this.props
        const { currentState } = this.state

        let newEmp;
        let newState;

        if (currentState === "arrow_down"){
            newEmp = allEmp.sort((a,b) => {if(a.phone < b.phone ) return -1 } )
            newState = "arrow_up"
        }else if (currentState === "arrow_up"){
            newEmp = allEmp.sort((a,b) => {if(a.phone < b.phone) return -1} )
            newState = "arrow_down"
        }else{
            newEmp = this.props.allEmp
            newState = "sort"
            return 0
        }
        this.setState({
            currentState: newState,
            employeeList: newEmp
        })
    }
    sortEmail = () => {
        const { allEmp } = this.props
        const { currentState } = this.state

        let newEmp;
        let newState;

        if (currentState === "arrow_down"){
            newEmp = allEmp.sort((a,b) => {if(a.email < b.email ) return -1 } )
            newState = "arrow_up"
        }else if (currentState === "arrow_up"){
            newEmp = allEmp.sort((a,b) => {if(a.email < b.email) return -1} )
            newState = "arrow_down"
        }else{
            newEmp = this.props.allEmp
            newState = "sort"
            return 0
        }
        this.setState({
            currentState: newState,
            employeeList: newEmp
        })
    }
    sortBday = () => {
        const { allEmp } = this.props
        const { currentState } = this.state

        let newEmp;
        let newState;

        if (currentState === "arrow_down"){
            newEmp = allEmp.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") < Moment(b.dob.date).format("M/D/YYY")) return -1 } )
            newState = "arrow_up"
        }else if (currentState === "arrow_up"){
            newEmp = allEmp.sort((a,b) => {if(Moment(a.dob.date).format("M/D/YYY") < Moment(b.dob.date).format("M/D/YYY")) return -1} )
            newState = "arrow_down"
        }else{
            newEmp = this.props.allEmp
            newState = "sort"
            return 0
        }
        this.setState({
            currentState: newState,
            employeeList: newEmp
        })
    }

    onSortChangeName = (event) => {
        this.sortName()
    }
    onSortChangePhone = (event) => {
        this.sortPhone()
    }
    onSortChangeEmail = (event) => {
        this.sortEmail()
    }
    onSortChangeBday = (event) => {
          this.sortBday()
    }

    render() {
        const { allEmp } = this.props
        const { currentState } = this.state

        Moment.locale("en")
        return (
            <div className="table-responsive">
        <Table className="tableStyle text-center" striped>
                <thead>
                    <tr>
                    <th scope="col">
                        Image
                    <button  className="btn text-left" disabled>
                    <i className="fas fa-user" />
                        </button>
                        
                    </th>
                    <th scope="col">
                        Name
                        <button type="button" className="btn"onClick={this.onSortChangeName} >
                                <i className="material-icons">
                                {currentState}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        Phone
                        <button type="button" className='btn' onClick={this.onSortChangePhone} >
                                <i className="material-icons">
                                {currentState}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        Email
                        <button type="button" className='btn' onClick={this.onSortChangeEmail} >
                                <i className="material-icons">
                                {currentState}
                                </i>
                        </button>
                    </th>
                    <th scope="col">
                        DOB
                        <button type="button" className='btn' onClick={this.onSortChangeDob} >
                                <i className="material-icons">
                                {currentState}
                                </i>
                        </button>
                    </th>
                    </tr>
                </thead>
    
                <tbody>
                    {allEmp.map(empInfo =>
                    <tr key={empInfo.id.value}>
                    <td><img alt={empInfo.name.first} src={empInfo.picture.thumbnail} className="img-fluid profPic"/></td>
                    <td>{empInfo.name.first} {empInfo.name.last}</td>
                    <td>{empInfo.phone}</td>
                    <td>{empInfo.email}</td>
                    <td>{Moment(empInfo.dob.date).format("M/D/YYYY")}</td>
                    </tr>
                    )}
                </tbody>
        </Table> 
        </div>
        )
    }
}