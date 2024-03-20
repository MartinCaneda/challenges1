import { render, screen } from "@testing-library/react";
import Navigation from ".";
import Link from "next/link";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation></Navigation>);
  const playLink = screen.getByRole("link", { name: "Play" });
  expect(playLink).toBeInTheDocument();
  const historyLink = screen.getByRole("link", { name: "History" });
  expect(historyLink).toBeInTheDocument();
});
