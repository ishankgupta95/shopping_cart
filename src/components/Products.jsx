/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

export default function Products() {

    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if(status === 'loading'){
      return <p>Loading...</p>
    }

    if(status === 'error'){
      return <p>Error, try later</p>
    }

    const addToCart = (product) => {
      dispatch(add(product))
    }

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
            <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    ))

  return (
    <>
        <div>Products</div>
        <div className="row">
          {cards}
        </div>

    </>
  )
}
