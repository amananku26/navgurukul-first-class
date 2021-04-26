import React from 'react'
import styles from "./App.module.css"
import List from "./components/List"

class App extends React.Component {
 render(){ 
   const name = "navgurukul"
  return (
    <div className="App">
    <List props={name} />
    <p className={styles.aman}> aman </p> 
    <h1 className={styles.hello}>Hello</h1>   
    </div>
  );
}
}
export default App;

// class components