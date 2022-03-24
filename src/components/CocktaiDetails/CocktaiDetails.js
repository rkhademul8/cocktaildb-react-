import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CocktaiDetails = () => {

    const {drinkid}=useParams()
    const [detail, setDetail]=useState([])

    useEffect(()=>{
       const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkid}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setDetail(data.drinks[0]))
    },[])
    return (
        <div>
        <Col className=' w-25 mx-auto'>
        <h1>Id{drinkid}</h1>
      <Card className='p-2'>
        <Card.Img variant="top" src={detail.strDrinkThumb} />
        <Card.Body>
          <Card.Title> {detail.strCategory}</Card.Title>
          <Card.Text>
          {detail.strInstructions}
          </Card.Text>
        </Card.Body>
        
      </Card>
    </Col>
        </div>
    );
};

export default CocktaiDetails;