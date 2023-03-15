public class Unsubscribe {
  private final Runnable unsubscribe;

  public Unsubscribe(Runnable unsubscribe) {
    this.unsubscribe = unsubscribe;
  }

  public void unsubscribe() {
    unsubscribe.run();
  }
}