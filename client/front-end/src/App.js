import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import ChatBot from '../src/components/ChatBot';
import Home from './Home';

export default function App() {

    const heading = "Welcome to LifeNest";
    const quote = "Always laugh when you can, it is cheapest medicine.";
    const footer = "Lord Byron";

    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} className={"margin-top"}>
                        <Switch>
                            <Route path="/" exact component={() => <Welcome heading={heading} quote={quote} footer={footer} />} />
                            <Route path="/register" exact component={Register} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/ChatBot" exact component={ChatBot}></Route>
                            <Route path="/Home" exact component={Home}></Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
}
