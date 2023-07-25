class Singleton private constructor() {
  companion object {
    @Volatile
    private lateinit var instance: Singleton;

    fun getInstance(): Singleton {
      synchronized(this) {
        if (!::instance.isInitialized) {
          instance = Singleton();
        }
        return instance;
      }
    }
  }
}