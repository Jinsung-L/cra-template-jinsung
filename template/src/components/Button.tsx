import React from 'react'
import './Button.css'

export interface ButtonProps {
  /** Button label */
  label?: string
  /** Is button primary? */
  primary: boolean
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Button color */
  color?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
  /** Button has responsive size */
  responsive: boolean
  /** onClick event handler */
  onClick?: () => {}
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  primary = true,
  size = 'md',
  color = 'green',
  responsive = false,
  onClick,
}) => (
  <button
    className={[
      'Button',
      size && `Button--${size}`,
      primary
        ? ` text-white bg-${color}-400`
        : `text-${color}-500 bg-${color}-200`,
      responsive && 'sm:Button--sm md:Button--md lg:Button--lg xl:Button--xl',
    ]
      .filter(Boolean)
      .join(' ')}
    onClick={onClick}
  >
    {label}
  </button>
)

/**
 * dont-purge:
 * Button--sm Button--md Button--lg Button--xl
 * bg-red-400 bg-red-200 text-red-500
 * bg-orange-400 bg-orange-200 text-orange-500
 * bg-yellow-400 bg-yellow-200 text-yellow-500
 * bg-green-400 bg-green-200 text-green-500
 * bg-teal-400 bg-teal-200 text-teal-500
 * bg-blue-400 bg-blue-200 text-blue-500
 * bg-indigo-400 bg-indigo-200 text-indigo-500
 * bg-purple-400 bg-purple-200 text-purple-500
 * bg-pink-400 bg-pink-200 text-pink-500
 */
