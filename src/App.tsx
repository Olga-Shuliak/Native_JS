import React from 'react';
import './App.css';


function App() {
  let names = ['Olga', 'Leonid', 'Svetlana', 'Zakhar']
  const liElements = names.map(n => <li>{n}</li>)

  let users = [{name: 'Olga'},{name: 'Leonid'},{name: 'Svetlana'},{name: 'Zakhar'}]
  const listLiElements = users.map((u, index) => <li key={index}>{u.name}</li>)
  return (
      <div className="App">
        <ul>
          {liElements}
          {listLiElements}
        </ul>
      </div>
  );
}

export default App;
