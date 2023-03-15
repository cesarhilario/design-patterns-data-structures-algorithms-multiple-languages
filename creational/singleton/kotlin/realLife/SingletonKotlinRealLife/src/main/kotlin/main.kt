fun main(args: Array<String>) {
  val eventService = EventService.getInstance();

  val eventSubscription = eventService.subscribe { value -> println(value) };
  val eventSubscription2 = eventService.subscribe { value -> println("$value eventSubscription2")  }

  eventService.emit("First Event");
  eventService.emit("Second event");

  eventSubscription.unsubscribe();

  eventService.emit("Third event");
  eventService.emit("Fourth event");

  eventSubscription2.unsubscribe()

}