import { useState } from "react";
import "./App.css";
import FormTable from "./components/FormTable";
import TableList from "./components/TableList";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App container-fluid px-6">
      <div className="row">
        <div className="col-6">
          <TableList show={show} setShow={setShow} />
        </div>
        <div className="col-6">{show ? <FormTable /> : null}</div>
      </div>
    </div>
  );
}

export default App;
