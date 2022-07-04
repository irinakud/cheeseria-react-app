import { render } from "@testing-library/react";
import {PriceCalculator} from "./PriceCalculator";

describe("PriceCalculator", () => {
  it("can render", () => {
      expect.hasAssertions();

      const { baseElement } = render(<PriceCalculator/>)
    
      expect(baseElement).toMatchSnapshot();
  });

  // TODO: more tests to add
});
