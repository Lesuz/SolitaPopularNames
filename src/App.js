
import './App.css';
import data from './names';
import {useState} from 'react';
import ReactDOM from 'react-dom';



function App() {

  const [list, setList] = useState(displayData);


  // using reduce() to calculate amount of names in the array
  const totalNames = data.names.reduce((amountOfNames, amountOfName) => amountOfNames + amountOfName.amount, 0)
  console.log(totalNames)

  function displayData() {
    console.log("hi")
    
    return (
      <div>
        <div>
          <h2>Unordered List</h2>
        </div>
        <div className="names">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
              {data.names.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  function orderedByAmounts() {
  // Order names by amounts and list output onto UI
    console.log("orderedlist")

    data.names.sort(function(a,b) {
      if(a.amount < b.amount) { return 1;}
      if(a.amount > b.amount) { return -1;}
      return 0;
    })

    const orderAmount = (
      <div>
        <div>
          <h2>Ordered by amount</h2>
        </div>
        <div className="names">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
              {data.names.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    )
    ReactDOM.render(orderAmount, document.getElementById('list'));
  }
  function orderedAplhabetically() {
    // Order names in an alphabetical order and output onto UI
    console.log("aplhabetically")

    data.names.sort(function(a,b) {
      if(a.name < b.name) { return -1;}
      if(a.name > b.name) { return 1;}
      return 0;
    })

    const orderAplha = (
      <div>
        <div>
          <h2>Ordered Aplhabetically</h2>
        </div>
        <div className="names">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
              {data.names.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    )
    ReactDOM.render(orderAplha, document.getElementById('list'));
  }

  function searchForName() {
    console.log("lookup name")

    const inputName = document.getElementsByName("name")[0].value

    console.log(inputName)

    for(var i = 0; i < data.names.length; i++){
      
      if(inputName === "Susanna"){
        console.log("HAIIII")
      }else {
        console.log("Name not found")
      }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Most popular names at <span>Solita</span></h1>
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
          onClick={orderedAplhabetically}
        >Order aplhabetically</button>
      </div>
      <div>
          <label>Name:</label>
          <input placeholder="Search for name..." type="text" name="name" />
          <button onClick={searchForName}>Search</button>
      </div>
      <div className="list" id="list">
        {list}
      </div>
    </div>
  );
}

export default App;
