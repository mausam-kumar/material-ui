import React from "react";
import GridCollection from './components/grid/GridCollection.jsx'
import Form from './components/grid/Form.jsx'
import ModalComp from './components/grid/ModalComp.jsx'

function App() {
  return <div className="App">
	  <GridCollection />
    <Form />
    <ModalComp />
  </div>;
}

export default App;
