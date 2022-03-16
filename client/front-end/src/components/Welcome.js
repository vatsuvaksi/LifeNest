import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Welcome(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };

    return (
        <Jumbotron className="bg-dark text-white">
            <h1>{props.heading}</h1>

            <blockquote className="blockquote mb-0">
                <p>
                    {props.quote}
                </p>
                <footer className="blockquote-footer">
                    {props.footer}
                </footer>
            </blockquote><br></br><br />

            <Slider {...settings}>
            <div>
                    <img style={{ marginLeft: "240px" }} src="https://media.istockphoto.com/vectors/medical-team-wearing-face-masks-vector-id1214206519?k=20&m=1214206519&s=170667a&w=0&h=rowWJzOnm65E5rfnPdaqFf5iKkJhXNw2fOuvIREkIgg=" width="505" height="285" alt="brand" />
                </div>

            <div>
                    <img style={{ marginLeft: "240px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dITlf26PPiObleSFt5yXTtFq0ny1EymN-w&usqp=CAU" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGNUyTN6pTVn6FXPpQQyN_NO_-fkVWTFSqw&usqp=CAU" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDbW9CT6kt5-2cU4uLkNZCdaAjdI-ehWsZw&usqp=CAU" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEpPLsMPleJQhwh9GkZPNk8orJpepLj0y2A&usqp=CAU" width="505" height="285" alt="brand" />
                </div>
                
               
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://d3srkhfokg8sj0.cloudfront.net/wp-content/uploads/sites/669/0219_STD_AskDoc_feature-final-696x313.jpg" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="data:image/jpeg;base64,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" width="505" height="285" alt="brand" />
                </div>
            </Slider>
        </Jumbotron>
    );
} 