import { expect } from 'chai';
import EventsRepository from '../events-repo.js';
import EventModel from '../event.js';
import Participant from '../participant.js';

describe('EventsRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new EventsRepository();
  });

  it('should add an event', () => {
    const event = new EventModel(null, 'Test EventModel', new Date(), 'Test Location');
    repo.addEvent(event);
    expect(repo.events.length).to.equal(1);
  });

  it('should delete an event', () => {
    const event = new EventModel(null, 'Test EventModel', new Date(), 'Test Location');
    repo.addEvent(event);
    repo.deleteEvent(event.eventId);
    expect(repo.events.length).to.equal(0);
  });

  it('should update an event', () => {
    const event = new EventModel(null, 'Test EventModel', new Date(), 'Test Location');
    repo.addEvent(event);
    const updatedEvent = new EventModel(event.eventId, 'Updated EventModel', new Date(), 'Updated Location');
    repo.updateEvent(updatedEvent);
    expect(repo.events[0].eventName).to.equal('Updated EventModel');
  });

  it('should find upcoming events', () => {
    const event1 = new EventModel(null, 'EventModel 1', new Date('2024-03-20'), 'Location 1');
    const event2 = new EventModel(null, 'EventModel 2', new Date('2024-03-25'), 'Location 2');
    repo.addEvent(event1);
    repo.addEvent(event2);
    const upcomingEvents = repo.findUpcomingEvents(new Date('2024-03-22'));
    expect(upcomingEvents.length).to.equal(1);
    expect(upcomingEvents[0].eventName).to.equal('EventModel 2');
  });

  it('should get event participants summary', () => {
    const event = new EventModel(null, 'Test EventModel', new Date(), 'Test Location');
    const participant1 = new Participant(1, 'John', 'Doe', 'male', 'john@example.com');
    const participant2 = new Participant(2, 'Jane', 'Doe', 'female', 'jane@example.com');
    event.addParticipant(participant1);
    event.addParticipant(participant2);
    repo.addEvent(event);
    const summary = repo.getEventParticipantsSummary(event.eventId);
    expect(summary.totalParticipants).to.equal(2);
    expect(summary.genderCount.male).to.equal(1);
    expect(summary.genderCount.female).to.equal(1);
  });
});
