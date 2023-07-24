@main
public struct clientCode {
    public static func main() {
      let eventService = EventService.shared;

      let eventSubscription = eventService.subscribe { value in
        print(value);
      }

      let eventSubscription2 = eventService.subscribe { value in
        print("\(value) eventSubscription2");
      }

      eventService.emit(value: "First event");
      eventService.emit(value: "Second event");

      eventSubscription.unsubscribe();

      eventService.emit(value: "Third event");

      eventService.emit(value: "Fourth event");

      eventSubscription2.unsubscribe();

    }
}
