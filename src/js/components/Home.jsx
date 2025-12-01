import React from "react";

// Navbar component
import NavBar from "./NavBar";

// Jumbotron component
import Jumbotron from "./Jumbotron.jsx"

// Card component
import Card from "./Card.jsx"

// Footer component
import Footer from "./Footer.jsx"

// Home
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />

			<div className="cards-container container my-4" aria-label="Cards">
				<div className="card-item">
					<Card />
				</div>
				<div className="card-item">
					<Card />
				</div>
				<div className="card-item">
					<Card />
				</div>
				<div className="card-item">
					<Card />
				</div>
			</div>
			
			<Footer />
		</>
	);
};

export default Home;