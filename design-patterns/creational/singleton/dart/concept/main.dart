import 'Singleton.dart';

void main() {
  var instanceA = Singleton();
  var instanceB = Singleton();

  if (identical(instanceA, instanceB)) {
    print("Singleton works");
  } else {
    print("Singleton not works");
  }
}
