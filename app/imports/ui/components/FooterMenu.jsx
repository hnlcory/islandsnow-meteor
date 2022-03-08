import React from 'react';
import { Container, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <Container>
        <div className="ui three column grid container">
          <div className="column">
            <div className="ui list">
              <div className="item">About Us</div>
              <div className="item">Store Locations</div>
              <div className="item">Employment</div>
              <div className="item">Videos</div>
              <div className="item">Shipping</div>
              <div className="item">Terms</div>
              <div className="item">Privacy</div>
            </div>
          </div>

          <div className="column">
            <div className="ui list">
              <div className="item">Men</div>
              <div className="item">Women</div>
              <div className="item">Kids</div>
              <div className="item">Brands</div>
              <div className="item">Sale</div>
            </div>
          </div>

          <div className="column">
            <div className="ui list">
              <div className="item">Join our mailing list for updates</div>
              <div className="item">Sign up to receive our email updates!</div>
              <Input action={{ icon: 'mail' }} placeholder='Enter Email Address' size='mini'/>

            </div>
          </div>

        </div>
      </Container>
    );
  }
}
