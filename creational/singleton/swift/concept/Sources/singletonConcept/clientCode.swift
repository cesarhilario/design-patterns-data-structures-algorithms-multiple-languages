@main
public struct clientCode {
    public static func main() {
      let instanceA = Singleton.shared;
      let instanceB = Singleton.shared;

      if (instanceA === instanceB) {
        print("Singleton Works");
      } else {
        print("Singleton not works");
      }
    }
}
