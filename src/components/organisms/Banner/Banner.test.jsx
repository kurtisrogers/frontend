import { describe, expect, vi, beforeEach, afterEach, it } from "vitest"
import { render } from "@solidjs/testing-library"
import Banner from '.';

describe("Banner", () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state initially", () => {
    const { getByText } = render(() => <Banner title="Something" />);
    expect(getByText("Something")).toBeInTheDocument();
  });
});
