/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result))
    }, [])

    const cards = products.map(product => ( 
      <div className="col-md-3 text-center"  key={product.id} style={{marginBottom: '10px'}}>
        <Card style={{ width: '18rem' }} className="h-100">
          <div className="text-center">
            <Card.Img variant="top" src={product.image} style = {{width: '100px', height: '130px'}}/>
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{background: '#fff'}}>
            <Button variant="primary">Add To Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    ))
    console.log(cards)

  return (
    <>
        <div>Products</div>
        <div className="row">
          {cards}
        </div>

    </>
  )
}
