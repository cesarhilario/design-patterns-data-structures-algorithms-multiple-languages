type Listener = (value: string) => void;

type Unsubscribe = { unsubscribe: () => void };

class EventService {
  private listeners: Listener[] = [];

  protected static _instance: EventService | null = null;

  private constructor() {}

  static get instance(): EventService {
    if (EventService._instance === null) {
      EventService._instance = new EventService();
    }

    return EventService._instance;
  }

  public emit(value: string) {
    this.notifyListeners(value);
  }

  public subscribe(listener: Listener): Unsubscribe {
    this.listeners.push(listener);
    return {
      unsubscribe: () => {
        this.listeners = this.listeners.filter(
          (anotherListener) => anotherListener !== listener
        );
      },
    };
  }

  private notifyListeners(value: string) {
    this.listeners.forEach((listener) => listener(value));
  }
}

const eventService = EventService.instance;

const eventSubscription = eventService.subscribe((event) => console.log(event));

eventService.emit("First Event");

EventService.instance.emit("Second Event");

eventSubscription.unsubscribe();

EventService.instance.emit("Third event"); // Will not emit
