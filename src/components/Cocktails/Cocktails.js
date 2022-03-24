import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cocktails = (props) => {
  console.log(props.cocktail);
    const {idDrink,strCategory,strDrinkThumb,strInstructions}=props.cocktail
    return (
        <div>
    <Col>
      <Card className='p-2'>
        <Card.Img variant="top" src={strDrinkThumb} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>
            {strInstructions.slice(0,100)}
          </Card.Text>
        </Card.Body>
        <Link to={`/drinkdetail/${idDrink}`}> <Button variant="danger">More Details</Button>  </Link>
      </Card>
    </Col>
        </div>
    );
};

export default Cocktails;