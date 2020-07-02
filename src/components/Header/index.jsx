import React from 'react';
import './Header.scss';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

Header.propTypes = {

};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header_link header_title"
                            href="https://tinhte.vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Photo App
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header_link"
                            to="/photos"
                            activeClassName="header_link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;