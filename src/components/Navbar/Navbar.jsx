import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <nav>
        <div className="nav_content">
          <ul className="nav__ul">
            <li className="nav__links">OnlineStore</li>
            <li className="nav__links">Home</li>
            <li className="nav__links">Products</li>
            <li className="nav__links">About</li>
            <li className="nav__links">Sign in</li>
            <li className="nav__links hamburger " ref={btnRef} onClick={onOpen}>
              <MenuIcon />
            </li>
          </ul>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Welcome</DrawerHeader>
              <DrawerBody className="mobile_nav">
                <Link to="/">Home</Link>
              </DrawerBody>
              <DrawerBody>
                <Link to="/">Products</Link>{' '}
              </DrawerBody>
              <DrawerBody>
                <Link to="/">About</Link>{' '}
              </DrawerBody>
              <DrawerFooter>
                <Button colorScheme="blue">Sign in</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
