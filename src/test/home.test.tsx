import { render, screen } from "@testing-library/react";

import { Testcomp } from "@/components";

describe("<Home />", () => {
  it("renders a heading", () => {
    const { container } = render(<Testcomp />);

    const home = screen.getByText("Home");

    // expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
