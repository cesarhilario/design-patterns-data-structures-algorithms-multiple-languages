fun main(args: Array<String>) {
  val instanceA = Singleton.getInstance();
  val instanceB = Singleton.getInstance()

  if (instanceA == instanceB) {
    println("Singleton works")
  } else {
    println("Singleton failed")
  }
}