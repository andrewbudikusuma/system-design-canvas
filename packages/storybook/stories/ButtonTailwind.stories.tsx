import ButtonTailwind from '@canvas-ds/react/src/ButtonTailwind';
import { Meta, StoryFn } from '@storybook/react';
import '@canvas-ds/react/lib/output.css';

const meta: Meta<typeof ButtonTailwind> = {
  title: 'Canvas/ButtonTailwind',
  component: ButtonTailwind,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof ButtonTailwind> = (args) => (
  <ButtonTailwind {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Demo Button',
};
