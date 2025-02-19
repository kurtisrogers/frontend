// src/components/LinkButton.test.jsx
import { render } from '@solidjs/testing-library';
import { Router } from '@solidjs/router';
import Header from '.';
import { describe, it, expect } from 'vitest';

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>
  }
})

describe('<Header />', () => {
  it('renders correctly and links to the correct route', () => {
    const { getByText } = render(() => <Header />);
    const linkButton = getByText('loading');

    expect(linkButton).toMatchSnapshot()
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', '/');
  });
});
