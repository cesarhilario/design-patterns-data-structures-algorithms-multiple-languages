export class Singleton {
  protected static _instance: Singleton | null = null;

  private constructor() {}

  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}
