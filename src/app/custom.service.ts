import { Injectable } from "@angular/core";

@Injectable()
export class CustomService {
  constructor() {}

  public getTestValue(): string {
    return "Bu veri servisten geliyor";
  }
}
