import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Background() {
  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card 1 Title</Card.Title>
          <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }} />
          <Card.Text>
            Some quick example text for Card 1.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card 2 Title</Card.Title>
          <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }} />
          <Card.Text>
            Some quick example text for Card 2.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card 3 Title</Card.Title>
          <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }} />
          <Card.Text>
            Some quick example text for Card 3.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Background;
