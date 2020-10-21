import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />
const TemplateDual: Story<ButtonProps> = (args) => (
  <div>
    <div className="inline-block m-2">
      <Button {...args} primary={true} />
    </div>
    <div className="inline-block m-2">
      <Button {...args} primary={false} />
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  primary: false,
}

export const Small = TemplateDual.bind({})
Small.args = {
  ...Primary.args,
  size: 'sm',
}

export const Large = TemplateDual.bind({})
Large.args = {
  ...Primary.args,
  size: 'lg',
}

export const ExtraLarge = TemplateDual.bind({})
ExtraLarge.args = {
  ...Primary.args,
  size: 'xl',
}

export const Responsive = TemplateDual.bind({})
Responsive.args = {
  label: "I'm responsive",
  size: 'lg',
  responsive: true,
}

export const Red = TemplateDual.bind({})
Red.args = {
  ...Primary.args,
  color: 'red',
}

export const Orange = TemplateDual.bind({})
Orange.args = {
  ...Primary.args,
  color: 'orange',
}

export const Yellow = TemplateDual.bind({})
Yellow.args = {
  ...Primary.args,
  color: 'yellow',
}

export const Green = TemplateDual.bind({})
Green.args = {
  ...Primary.args,
  color: 'green',
}

export const Teal = TemplateDual.bind({})
Teal.args = {
  ...Primary.args,
  color: 'teal',
}

export const Blue = TemplateDual.bind({})
Blue.args = {
  ...Primary.args,
  color: 'blue',
}

export const Indigo = TemplateDual.bind({})
Indigo.args = {
  ...Primary.args,
  color: 'indigo',
}

export const Purple = TemplateDual.bind({})
Purple.args = {
  ...Primary.args,
  color: 'purple',
}

export const Pink = TemplateDual.bind({})
Pink.args = {
  ...Primary.args,
  color: 'pink',
}
