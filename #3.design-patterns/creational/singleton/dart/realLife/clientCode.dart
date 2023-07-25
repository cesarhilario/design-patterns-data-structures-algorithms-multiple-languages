import 'EventService.dart';

void main() {
  var eventService = EventService();

  var eventSubscription = eventService.subscribe((value) {
    print(value);
  });

  var eventSubscription2 = eventService.subscribe((value) {
    print("${value} eventSubscription2");
  });

  eventService.emit("First event");
  eventService.emit("Second event");

  eventSubscription.unsubscribe();

  eventService.emit("Third event");
  eventService.emit("Fourth event");

  eventSubscription2.unsubscribe();
}
