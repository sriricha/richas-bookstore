import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="40" viewBox="40 10 256 256" xmlSpace="preserve">
                <defs>
                </defs>
                <g path="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 24.158 57.091 h 54.898 c 2.293 0 4.313 -1.509 4.964 -3.709 l 5.841 -19.759 c 0.633 -2.141 -0.972 -4.289 -3.204 -4.289 H 16.95 L 24.158 57.091 z" path="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,196,224); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 79.585 69.894 H 27.091 c -0.687 0 -1.287 -0.464 -1.46 -1.129 L 14.404 25.529 c -0.421 -1.62 -1.883 -2.751 -3.557 -2.751 H 1.508 C 0.675 22.778 0 22.103 0 21.27 s 0.675 -1.508 1.508 -1.508 h 9.339 c 3.048 0 5.711 2.06 6.476 5.01 l 10.935 42.106 h 51.327 c 0.833 0 1.508 0.676 1.508 1.508 C 81.093 69.219 80.417 69.894 79.585 69.894 z" path="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,196,224); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <circle cx="36.176" cy="80.436" r="6.536" path="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,196,224); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <circle cx="69.15599999999999" cy="80.436" r="6.536" path="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,196,224); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 52.063 35.406 l -0.487 -0.271 c -3.791 -2.115 -9.698 -7.086 -12.154 -10.229 c -5.174 -6.624 -6.25 -14.46 -2.557 -18.632 c 1.767 -1.996 4.247 -3.146 6.985 -3.241 c 2.893 -0.105 5.773 1.001 8.213 3.115 c 2.44 -2.116 5.34 -3.218 8.212 -3.115 c 2.738 0.095 5.219 1.246 6.985 3.241 l 0 0 c 3.692 4.171 2.617 12.007 -2.557 18.632 c -2.457 3.144 -8.363 8.115 -12.153 10.229 L 52.063 35.406 z" path="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(230,126,126); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}