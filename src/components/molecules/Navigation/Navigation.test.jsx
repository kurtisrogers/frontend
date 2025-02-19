import { render } from '@solidjs/testing-library';
import { A, Router, Route } from '@solidjs/router';

describe('<LinkButton />', () => {
    it('renders correctly and links to the correct route', () => {
        const { getByText } = render(() => <A href='/about'>Go to About</A>,
        { wrapper: (props) => <Router><Route>{props.children}</Route></Router> });

        const linkButton = getByText('Go to About');
        expect(linkButton).toBeInTheDocument();
        expect(linkButton).toHaveAttribute('href', '/about');
    });
});
