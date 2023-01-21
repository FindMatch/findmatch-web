import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'UI/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  icon: 'alert'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  icon: 'alert'
};
