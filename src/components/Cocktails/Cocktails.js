import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cocktails = (props) => {
    const {strCategory,strDrinkThumb,strInstructions}=props.cocktail
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={strDrinkThumb} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>
            {strInstructions.slice(0,100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Cocktails;