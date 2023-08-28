import { Button, Card } from "react-bootstrap"
import { useSelector, useDispatch} from "react-redux"
import { remove } from "../store/cartSlice"

export default function Cart() {

  const products = useSelector(state => state.cart)
  
  const dispatch = useDispatch()

  const removeFromCart = id => {
    dispatch(remove(id))
  }

  const cards = products.map(product => ( 
    <div className="col-md-12 text-center"  key={product.id} style={{marginBottom: '10px'}}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
    <div className="row">
      {cards}
    </div>
    </>
  )
}
