
import './App.css';
// import list of names
import data from './names';
import { useState } from 'react';

// import the List component
import List from './List'

function App() {

  const [list, setList] = useState(data.names);
  const [title, setTitle] = useState('Unordered List')

  // using reducer to calculate the amount of all names
  function reducer(namesInTotal, amountOfName) {
    return namesInTotal + amountOfName.amount
  }

  // using reduce() to calculate amount of names in the array
  const totalNames = data.names.reduce(reducer, 0)


  // Order list by amount of names
  function orderedByAmounts() {

    // copy name list to another variable
    let listCopy = [...data.names]

    // using sort to order the names in the wanted way
    listCopy.sort(function(a,b) {
      if(a.amount < b.amount) { return 1;}
      if(a.amount > b.amount) { return -1;}
      return 0;
    })

    // setting new states for the variables
    setList(listCopy)
    setTitle("Ordered by amount")
  }

  // Order list in an alphabetical order
  function orderedAlphabetically() {

    // copy name list to another variable
    let listCopy = [...data.names]

    // using sort to order the names in the wanted way
    listCopy.sort(function(a,b) {
      if(a.name < b.name) { return -1;}
      if(a.name > b.name) { return 1;}
      return 0;
    })

    // setting new states for the variables
    setList(listCopy)
    setTitle("Ordered alphabetically")
  }

  // Using event as a parameter to prevent default reload of page
  function searchForName(event) {
    event.preventDefault()

    // save input value into a variable
    const inputName = document.getElementsByName("name")[0].value

    // using data.names to compare name to original list of names
    // copy name list to another variable
    let listCopy = [...data.names]

    // using filter to look for wanted names from list
    // listCopy is an array
    listCopy = listCopy.filter(item => item.name.toLowerCase().includes(inputName.toLowerCase()))

    // alert pops up when name not found in the list
    if (listCopy.length === 0) {
      alert("Name " + inputName + " not found.")
    } 

    // setting new states for the variables
    setList(listCopy)
    setTitle("Name searched: " + inputName)
  }

  return (
    <div>
      <div className="header">
        <h1>Most popular names at <span><br/>Solita</span></h1>
      </div>
      <div className="nameAmount">
        <h3>Names in total: {totalNames}</h3>
      </div>
      <div className="question">
        <p>How would like the names be displayed?</p>
      </div>
      <div className="buttons">
        <button 
          onClick={orderedByAmounts}
        >Order by amount</button>
        <p>or</p>
        <button
          onClick={orderedAlphabetically}
        >Order alphabetically</button>
      </div>
      <div className="searchbar">
        <p>Or search by name</p>
        <form className="inputform" onSubmit={searchForName}>
            <label>Name:</label>
            <input placeholder="Search for name..." type="text" name="name" />
            <input type="submit" value="Search" />
        </form>
      </div>
      <div className="list" id="list">
        {/* Using List component*/}
        <List table={list} title={title} />
      </div>
    </div>
  );
}

export default App;
