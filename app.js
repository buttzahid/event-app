import Participant from './participant.js';
import EventModel from './event.js';
import EventsRepository from './events-repo.js';

// Sample usage
const repo = new EventsRepository();

const event1 = new EventModel(null, 'Event 1', new Date('2024-03-15'), 'Location 1');
const event2 = new EventModel(null, 'Event 2', new Date('2024-03-20'), 'Location 2');

const participant1 = new Participant(1, 'John', 'Doe', 'male', 'john@example.com');
const participant2 = new Participant(2, 'Jane', 'Doe', 'female', 'jane@example.com');

event1.addParticipant(participant1);
event1.addParticipant(participant2);

repo.addEvent(event1);
repo.addEvent(event2);

console.log(repo.getEventsByParticipant(1)); // Get events by participant with ID 1
console.log(repo.findUpcomingEvents(new Date('2024-03-18'))); // Find upcoming events after March 18, 2024
console.log(repo.getEventParticipantsSummary(event1.eventId)); // Get summary of participants for event 1
