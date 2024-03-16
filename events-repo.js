class EventsRepository {
    constructor() {
      this.events = [];
    }
  
    addEvent(event) {
      event.eventId = Math.floor(Math.random() * 1000000); // Assigning a random eventID
      this.events.push(event);
    }
  
    updateEvent(updatedEvent) {
      const index = this.events.findIndex(event => event.eventId === updatedEvent.eventId);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    }
  
    deleteEvent(eventId) {
      this.events = this.events.filter(event => event.eventId !== eventId);
    }
  
    getEventsByParticipant(participantId) {
      return this.events.filter(event => event.participants.some(participant => participant.participantId === participantId));
    }
  
    findUpcomingEvents(date) {
      return this.events.filter(event => event.date > date);
    }
  
    getEventParticipantsSummary(eventId) {
      const event = this.events.find(event => event.eventId === eventId);
      if (event) {
        const totalParticipants = event.participants.length;
        const genderCount = event.getParticipantCountByGender();
        return {
          eventInfo: {
            eventId: event.eventId,
            eventName: event.eventName,
            date: event.date,
            location: event.location,
          },
          totalParticipants,
          genderCount,
        };
      }
      return null;
    }
  }
  
  export default EventsRepository;
  