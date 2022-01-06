import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';


function App() {
  return (<div align="center">
    <h1>Umo Shuttle</h1>

    <img src="/img/bus-outlined.png" alt="Shuttle"/>

    <Table><tr align="center"><td>
    <Dropdown>
      <Dropdown.Toggle variant="success">Select City</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            City1
          </Dropdown.Item>
          <Dropdown.Item href="#">
            City2
          </Dropdown.Item>
          <Dropdown.Item href="#">
            City3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </td></tr>
      <tr align="center"><td>
      <Dropdown>
      <Dropdown.Toggle variant="success">Select Hotel</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Hotel1
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Hotel2
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Hotel3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </td></tr></Table>
    </div>
  );
}

export default App;
