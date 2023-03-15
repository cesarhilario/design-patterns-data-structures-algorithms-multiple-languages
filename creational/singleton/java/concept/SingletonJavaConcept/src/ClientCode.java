public class ClientCode {
  public static void main(String[] args) {
    Singleton instanceA = Singleton.getInstance();
    Singleton instanceB = Singleton.getInstance();
    
    if(instanceA == instanceB && instanceA.equals(instanceB)) {
      System.out.println("Singleton works");
    } else {
      System.out.println("Singleton not works");
    }
  }
}
