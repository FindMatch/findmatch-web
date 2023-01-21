import cn from 'classnames';

import { SpinnerSize, SpinnerColor } from './Spinner.types';

import s from './Spinner.module.css';

interface SpinnerProps {
  color?: SpinnerColor;
  size?: SpinnerSize;
  className?: string;
  style?: React.CSSProperties;
}

export const Spinner = ({ color = 'primary', size = 'normal', className, style }: SpinnerProps) => {
  return (
    <div
      style={{ ...style }}
      className={cn(s.loader, s[`loader--${color}`], s[`loader--${size}`], className)}
    ></div>
  );
};
