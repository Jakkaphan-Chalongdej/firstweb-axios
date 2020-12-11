import { Nav, Navbar } from "react-bootstrap";
import { FaWeightHanging } from "react-icons/fa";
import Image from "next/image";

const pathnames = [
  // { href: "/", label: "Home" },
  { href: "/", label: "Technology" },
  { href: "/#about", label: "Design" },
  { href: "/#solution", label: "Solution" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];
export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light"
      >
        <Navbar.Brand>
          <Image src="/logo-title.png" alt="AST" width="50" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-uppercase ">
            {pathnames.map((pathname) => (
              <li key={pathname.label}>
                <Nav.Link href={pathname.href}>
                  <a className={` ${pathname.href ? "" : ""}`}>
                    {pathname.label}
                  </a>
                </Nav.Link>
              </li>
            ))}
          </Nav>
          <Nav className={"px-2"}>
            <a
              className="snipcart-checkout snipcart-summary"
              href="/#"
              style={{ textDecoration: "none" }}
            >
              <FaWeightHanging />
              <span className="snipcart-total-price">$0.00</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

Header;
