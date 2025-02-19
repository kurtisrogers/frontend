// src/components/LinkButton.test.jsx
import { render } from '@solidjs/testing-library';
import { Router } from '@solidjs/router';
import Header from '.';
import { describe, it, expect } from 'vitest';

describe('<Header />', () => {
  it('renders correctly and links to the correct route', () => {
    const { getByText } = render(() => (
      <Router>
        <Header />
      </Router>
    ));

    const linkButton = getByText('About');
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', '/about');
  });
});
