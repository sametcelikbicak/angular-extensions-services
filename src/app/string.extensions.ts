import { CustomService } from "./custom.service";
import { ServiceLocator } from "./service-locator";

declare global {
  interface String {
    messageFromService(): string;
  }
}

String.prototype.messageFromService = function(): string {
  const customService: CustomService = ServiceLocator.injector.get(
    CustomService
  );

  return customService.getTestValue();
};

export {};
