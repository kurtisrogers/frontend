import type { Meta, StoryObj } from 'storybook-solidjs';
import Header from '@/components/organisms/Header/Header';
import { Router, Route } from '@solidjs/router';

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'something',
  },
}

const Template = (args: any) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({})
Default.args = {
  title: 'something',
} as any;
