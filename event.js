class EventModel {
    constructor(eventId, eventName, date, location) {
      this.eventId = eventId;
      this.eventName = eventName;
      this.date = date;
      this.location = location;
      this.participants = [];
    }
  
    addParticipant(participant) {
      this.participants.push(participant);
    }
  
    removeParticipant(participantId) {
      this.participants = this.participants.filter(participant => participant.participantId !== participantId);
    }
  
    getParticipants() {
      return this.participants;
    }
  
    updateParticipant(updatedParticipant) {
      const index = this.participants.findIndex(participant => participant.participantId === updatedParticipant.participantId);
      if (index !== -1) {
        this.participants[index] = updatedParticipant;
      }
    }
  
    getParticipantCountByGender() {
      const genderCount = {
        male: 0,
        female: 0,
      };
  
      this.participants.forEach(participant => {
        if (participant.gender === 'male') {
          genderCount.male++;
        } else if (participant.gender === 'female') {
          genderCount.female++;
        }
      });
  
      return genderCount;
    }
  }
  
  export default EventModel;
