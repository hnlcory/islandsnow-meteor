import React from 'react';
import { Container, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <Dropdown text='Men' className='midmenuitem'>
          <Dropdown.Menu>
            <Dropdown.Item text='New'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Women' className='midmenuitem'>
          <Dropdown.Menu>
            <Dropdown.Item text='New'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Kids' className='midmenuitem'>
          <Dropdown.Menu>
            <Dropdown.Item text='New'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Brands' className='midmenuitem'>
          <Dropdown.Menu>
            <Dropdown.Item text='New'/>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Sale' className='midmenuitem'>
          <Dropdown.Menu>
            <Dropdown.Item text='New'/>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    );
  }
}
