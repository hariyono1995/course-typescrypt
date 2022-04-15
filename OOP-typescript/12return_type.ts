class Burung {
  private _kaki: number = 2;

  getKaki(): number {
    return this._kaki;
  }

  terbang(): void {
    console.log("Terbang");
  }

  async makan(): Promise<string> {
    return "Makan ";
  }
}
