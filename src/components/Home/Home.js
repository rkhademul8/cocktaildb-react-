import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cocktails from '../Cocktails/Cocktails';

const Home = () => {

    const[cocktails, setCocktail]=useState([])

    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res=>res.json())
        .then(data=>setCocktail(data.drinks))
    },[])

    return (
        <div>

            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        cocktails.map(cocktail=> <Cocktails
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                        ></Cocktails>)
                    }
                </Row>

            </Container>
           
        </div>
    );
};

export default Home;