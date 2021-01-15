import { CustomService } from "./custom.service";
import { ServiceLocator } from "./service-locator";

export class Test {
  public static serviceMessage(): string {
    const customService: CustomService = ServiceLocator.injector.get(
      CustomService
    );

    return customService.getTestValue();
  }
}
