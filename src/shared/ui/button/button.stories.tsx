import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
   title: 'Components/Button',
   component: Button,
   tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
   args: {
      children: 'Кнопка',
      size: 'sm',
      variant: 'default',
      className: ''
   }
}