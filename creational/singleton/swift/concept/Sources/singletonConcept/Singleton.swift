import Foundation;

class Singleton {
  static var shared: Singleton = {
    let instance: Singleton = Singleton();
    return instance
  }()

  private init () {}
}

extension Singleton: NSCopying {
    func copy(with zone: NSZone? = nil) -> Any {
      return self
    }
}