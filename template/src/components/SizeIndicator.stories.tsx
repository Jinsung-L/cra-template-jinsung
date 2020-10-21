import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SizeIndicator } from './SizeIndicator'

export default {
  title: 'Size Indicator',
  component: SizeIndicator,
} as Meta

export const Responsive: Story = () => <SizeIndicator />
