import { Button, Card } from "react-bootstrap"
import Rating from '../components/Rating'
import { CartState } from "./context/Context"
const SingleProducts = ({ prod }) => {

    const { state: { cart }, dispatch, } = CartState();


    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' className="pro-image" src={prod.image} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹{prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    {
                        cart.some((p) => p.id === prod.id) ? (
                            <Button onClick={()=>{
                                dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload: prod,
                                });
                            }} variant="danger">Remove From Cart</Button>
                           
                           
                        ) : (
                            <Button onClick={()=>{
                                dispatch({
                                    type:"ADD_TO_CART",
                                    payload: prod,
                                });
                            }} disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"} </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProducts
