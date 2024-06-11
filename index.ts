interface Event {
  name: string;
  location: string;
  dateTime: Date;
  guestLists: string;
  typeStyle: string;
}

class eventManager {
  events: Event[];

  constructor() {
    this.events = [];
  }
  createEvent(event: Event): void {
    this.events.push(event);
  }
}