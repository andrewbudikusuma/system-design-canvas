import Button from '@canvas-ds/react/src/Button';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Canvas/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Demo Button Example',
};
