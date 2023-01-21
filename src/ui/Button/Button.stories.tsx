import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  color: 'secondary',
  onClick: () => console.log('¡¡click!!')
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  color: 'secondary',
  size: 'small',
  onClick: () => console.log('¡¡click!!')
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  color: 'secondary',
  size: 'large',
  onClick: () => console.log('¡¡click!!')
};

export const Block = Template.bind({});
Block.args = {
  label: 'Button',
  color: 'success',
  size: 'block',
  onClick: () => console.log('¡¡click!!')
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  color: 'secondary',
  disabled: true,
  onClick: () => console.log('¡¡click!!')
};
