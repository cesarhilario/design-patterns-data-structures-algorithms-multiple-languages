public class ClientCode {
  public static void main(String[] args) {
    final EventService eventService = EventService.getInstance();
    
    final Unsubscribe eventSubscription = eventService.subscribe(new Listener() {
      @Override
      public void invoke(String value) {
        System.out.println(value);
      }
    });

    final Unsubscribe eventSubscription2 = eventService.subscribe(new Listener() {
      @Override
      public void invoke(String value) {
        System.out.println(value + "eventSubscription2");
      }
    });
    
    eventService.emit("First event");
    eventService.emit("Second event");
    
    eventSubscription.unsubscribe();

    eventService.emit("Third event");
    eventService.emit("Fourth event");
    
    eventSubscription2.unsubscribe();
  }
}
