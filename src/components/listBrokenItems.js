import { Icon } from '@material-ui/core';
import { style } from '@mui/system';
import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap';


const theme = createTheme({
  palette: {
    primary: {
      light: '#5965b2',
      main: '#303f9f',
      dark: '#212c6f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d0d4ed',
      main: '#c5cae9',
      dark: '#898da3',
      contrastText: '#000',
    },
  },
});

let brokenItemList = [{
  'item_id': 'CM 30',
  'name': 'Coffee Machine N2',
  'location': "Zentrum H30",
  'status': false,
},{
  'item_id': 'CM 31',
  'name': 'Coffee Machine N21',
  'location': "Zentrum H10",
  'status': false,
},{
  'item_id': 'CM 32',
  'name': 'Coffee Machine N22',
  'location': "Zentrum H20",
  'status': false,
},{
  'item_id': 'CM 35',
  'name': 'Coffee Machine N5',
  'location': "Zentrum F30",
  'status': false,
}, {
  'item_id': 'CM 37',
  'name': 'Coffee Machine N42',
  'location': "Zentrum F18",
  'status': false,
}]

export default function ListBrokenItem() {
  const [user, setUser] = useState({});
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.state.data);
    setUser(location.state.data);
  },[location.state.data]);

  const handleFixItem = (item) => {
    console.log(item);
  }
  return(
    <div>
      {user.admin && <Row className="mt-5 d-flex align-items-end flex-column">
        <div>
        <Button variant="success" className="w-25">Add Items</Button> 
        </div>
        </Row>}
    <h2>List of Broken Items</h2>
    <Container>
    { brokenItemList.length <= 0 ? <h2> No Item is reported </h2> : 
      <Row className="justify-content-center mt-3">
        <ListGroup className="w-75 justify-self-center">
        <ListGroup.Item>
                <Row className="align-items-center justify-content-center">
                <p className="w-25">Name</p>
                <p className="w-25">Location</p>
                <p className="w-25">Status</p>
                </Row>
                </ListGroup.Item>
          {brokenItemList.map((item, idx) => (
            <ListGroup.Item>
                <Row className="align-items-center justify-content-center">
                <p className="w-25">{item.name}</p>
                <p className="w-25">{item.location}</p>
                {!item.status && <div className="w-25">
                  <Button variant="success" onClick={() => handleFixItem(item)}>Fixed</Button>
                </div>}
                </Row>
                </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    }
    </Container>
    </div>
  );
}