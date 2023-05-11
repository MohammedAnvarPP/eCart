import { Badge, Button, Container, Dropdown, FormControl, Image, Nav, Navbar } from "react-bootstrap"
import './main.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from "./context/Context"
import { AiFillDelete } from "react-icons/ai"
const Header = () => {
  const { state: { cart },dispatch,productDispatch } = CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">eCart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{ width: 350 }} placeholder='Search a product'
          onChange={(e)=>{
            productDispatch({
              type:"FILTER_BY_SEARCH",
              payload:e.target.value,
          })
          }}
          />

        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge bg=''>
                {cart.length}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropDown">
              {
                cart.length > 0 ? (
                  <>
                    {
                      cart.map((prod => (
                        <span className="cartitem" key={prod.id}>
                          <img className="cartItemImg" src={prod.image} alt={prod.name} />
                          <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span>₹{prod.price.split(".")[0]}</span>
                          </div>
                          <AiFillDelete
                          fontSize='20px'
                          style={{cursor:"pointer"}}
                          onClick={()=> dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:prod,
                          })}
                          />
                        </span>
                      )))
                    }
                    <Link to='/cart'>
                      <Button style={{width:"95%",margin:"0 10px"}}>
                        Go To Cart
                      </Button>
                    </Link>

                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!!</span>
                )
              }

            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
