import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row,Spinner } from 'react-bootstrap';
import Cocktails from '../Cocktails/Cocktails';
import './Home.css'

import img1 from '../../images/m1.jpg'
import img2 from '../../images/m2.jpg'
import img3 from '../../images/m4.jpg'

const Home = () => {

    //  load data from api
    const[cocktails, setCocktail]=useState([])
    

    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res=>res.json())
        .then(data=>{
            
            setCocktail(data.drinks)})
    },[])


    // search handle 
    const searchHandle=(e)=>{
        const searcText=e.target.value
        setSearch(searcText)
       
    }

    const[search, setSearch]=useState('') 
    useEffect(()=>{
        const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCocktail(data.drinks))
    },[search])

    
    return (
        <div>

                {/* carousels  */}

                <Container className='my-5'>
                        <Carousel>

                            <Carousel.Item className='carousels'>
                                <img 
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className='carousels'>
                                <img 
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carousels'>
                                <img 
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </Container>

                {/*  serach  */}
                <Container>
                <div className="mb-3">
                <input 
                onChange={searchHandle}
                type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search you favourite drink" />
                </div>
                </Container>

                {/* cocktail map from api */}
            <Container className='my-5'>

            {cocktails.length===0 ? <Spinner className='d-block mx-auto' animation="border" /> : 
                <Row xs={1} md={3} className="g-4">
                    {
                        cocktails.map(cocktail=> <Cocktails
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                        ></Cocktails>)
                    }
                </Row>
                }
            </Container>
           
        </div>
    );
};

export default Home;