import React from 'react';
import '../App.css';
import ml1 from '../assets/ml1.jpg';
import networks from '../assets/networks.jpg';
import TS from '../assets/TS.jpg';


const events = [
	{
		title: 'MACHINE INTELLIGENCE',
		
		image: ml1,
		description:
			'Machine Intelligence Group focuses on research and applications in areas like Computer Vision, Natural Language and Data Mining.',
	},
	{
		title: 'SYSTEMS & NETWORKS',
		date: 'February 2024',
		image: networks,
		description:
			'Systems and Networks group focuses on research and applications in areas like OS, DBMS and Computer Networks.',
	},
	{
		title: 'THEORETICAL COMPUTER SCIENCE',
		date: 'January 2024',
		image: TS,
		description:
			'Theoretical CS focuses on research and applications in areas like DSA, Computationl Complexity Theory and Cryptography.',
	}
];

function EventsPage() {
	return (
		<div className="events-page">
			<h1>Our Interest Groups</h1>
			<div className="events-grid">
				{events.map((event, idx) => (
					<div className="event-card" key={idx}>
						<div className="event-image-wrapper">
							<img
								src={event.image}
								alt={event.title}
								className="event-image"
							/>
						</div>
						<div className="event-content">
							<h2 className="event-title">{event.title}</h2>
							<span className="event-date">{event.date}</span>
							<p className="event-description">{event.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="no-events-message">
            No event right now.
        </div>
		</div>
	);
}

export default EventsPage;

