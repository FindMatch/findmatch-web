import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'normal'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'normal'
};
