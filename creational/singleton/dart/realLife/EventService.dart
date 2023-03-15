typedef Listener = void Function(String value);

class Unsubscribe {
  final void Function() unsubscribe;
  Unsubscribe({required this.unsubscribe});
}

class EventService {
  static final EventService _singleton = EventService._internal();

  factory EventService() {
    return _singleton;
  }

  EventService._internal();

  final List<Listener> _listeners = [];

  void emit(String value) {
    notifyListeners(value);
  }

  Unsubscribe subscribe(Listener listener) {
    _listeners.add(listener);
    return Unsubscribe(unsubscribe: () => _listeners.remove(listener));
  }

  void notifyListeners(String value) {
    _listeners.forEach((listener) => listener(value));
  }
}
