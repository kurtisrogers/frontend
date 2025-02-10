import { test, expect, vi, screen, waitFor } from "vitest"
import { render } from "@solidjs/testing-library"
// import userEvent from "@testing-library/user-event"
// For reference: https://docs.solidjs.com/guides/testing#components-testing
import Header from './Header';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello from the client!' }),
  })
);

describe('MyComponent', () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear mocks after each test
  });

  test('renders loading state initially', () => {
    render(() => <Header />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  test('renders client-only data after fetch', async () => {
    render(() => <Header />);
    
    // Wait for the loading state to change
    await waitFor(() => expect(screen.getByText('Hello from the client!')).toBeInTheDocument());
  });

  test('that the Logo text is correct', () => {
    const { getByRole } = render(() => <Header />)
    const headerText = getByRole('A');
    expect(headerText).toHaveTextContent("Kurtis Rogers")
  });
})
