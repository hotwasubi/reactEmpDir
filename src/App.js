import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
// import employees from "./components/employees";
import "./app.css"



class App extends React.Component {
 
  render() {


    return(
      <Wrapper>
        <NavBar />
        <SearchForm />
      </Wrapper>
    )
  }




}

export default App

