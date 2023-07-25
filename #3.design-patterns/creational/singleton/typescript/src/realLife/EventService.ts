type Listener = (value: string) => void;

type Unsubscribe = { unsubscribe: () => void };

export class EventService {
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
