typealias Listener = (value: String) -> Unit;

data class Unsubscribe(val unsubscribe: () -> Unit)

class EventService private constructor() {
  companion object {
    @Volatile
    private lateinit var instance: EventService;

    fun getInstance(): EventService {
      synchronized(this) {
        if (!::instance.isInitialized) {
          instance = EventService();
        }
        return instance;
      }
    }
  }
  
  private var listeners: MutableList<Listener> = arrayListOf()
  
  fun emit(value: String) {
    this.notifyListeners(value)
  }

  fun subscribe(listener: Listener): Unsubscribe {
    listeners.add(listener)
    return Unsubscribe { listeners.remove(listener) }
  }
  
  private fun notifyListeners(value: String) {
    listeners.forEach { listener -> listener(value) }
  } 
}