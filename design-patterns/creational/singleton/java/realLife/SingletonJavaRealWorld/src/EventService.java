import java.util.ArrayList;
import java.util.List;
public class EventService {
  private static EventService instance;

  private EventService() {}

  public static EventService getInstance() {
    if(instance == null) {
      instance = new EventService();
    }
    return instance;
  }
  
  private final List<Listener> listeners = new ArrayList<>();
  
  public void emit(String value) {
    notifyListeners(value);
  }
  
  public Unsubscribe subscribe(Listener listener) {
    listeners.add(listener);
    return new Unsubscribe(() -> listeners.remove(listener));
  }
  
  public void notifyListeners(String value) {
    for(Listener listener : listeners) {
      listener.invoke(value);
    }
  }
}
