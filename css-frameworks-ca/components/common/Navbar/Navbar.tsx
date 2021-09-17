import { FC } from 'react'
import Link from 'next/link'

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const _Navbar: FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand className='font-playfair text-primary'>
          The YAY Company
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {pages.map((page) => (
              <Link href={page.href} passHref key={page.href}>
                <Nav.Link>{page.name}</Nav.Link>
              </Link>
            ))}
          </Nav>
          <Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <Button className='rounded-tr-md rounded-br-md'>Go</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default _Navbar
