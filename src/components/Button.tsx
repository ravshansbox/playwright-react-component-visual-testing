import { ButtonHTMLAttributes, ComponentType } from 'react';

export const Button: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  return <button {...props} />;
};
