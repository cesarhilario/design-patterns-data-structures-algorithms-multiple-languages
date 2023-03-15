import Foundation;

struct Unsubscribe {
    var unsubscribe: () -> Void
}

typealias Listener = (_ value: String) -> Void


class EventService {
  static var shared: EventService = {
    let instance: EventService = EventService();
    return instance
  }()

  private init () {}

  private var listeners = Dictionary<String, Listener>();
}

extension EventService: NSCopying {
  func copy(with zone: NSZone? = nil) -> Any {
    return self
  }
}

// Business Logic

extension EventService {
  public func emit(value: String) -> Void {
    self.notifyListeners(with: value);
  }

  func subscribe(_ listener: @escaping Listener) -> Unsubscribe {
    let key = UUID().uuidString;
    listeners[key] = listener;

    return Unsubscribe {
      self.listeners.removeValue(forKey: key)
    }
  }

  private func notifyListeners(with value: String) {
    for listener in self.listeners {
      listeners[listener.key]?(value)
    }
  }
}
