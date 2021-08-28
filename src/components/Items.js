import React from 'react';

import { Table, Button, Card, Accordion } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>
        <Accordion defaultActiveKey="0">
          {
          this.props.itemsList.map((item, idx) =>
            <Card key={idx}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {item.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{item.description}</Card.Body>
              </Accordion.Collapse>
              <Button data-testid={`delete-button-${item.name}`} onClick={() => { this.props.handleDelete(item._id) }}>Delete Item</Button>
            </Card>)}
        </Accordion>
      </section>
    );
  }
}

export default Items;
