import cn from 'classnames';

import s from './Button.module.css';
import { ButtonColor, ButtonSize } from './Button.types';

interface ButtonProps {
  /**
   * Texto del botón.
   */
  label: string;

  /**
   * Color del botón.
   */
  color?: ButtonColor;

  /**
   * Tamaño del botón.
   */
  size?: ButtonSize;

  /**
   * Marca el botón como deshabilitado.
   */
  disabled?: boolean;

  /**
   * Convierte el texto del botón a mayúsculas.
   */
  upper?: boolean;

  /**
   * Función onClick del botón.
   */
  onClick?: () => any;
}

/**
 * Componente UI del botón
 */
export const Button = ({
  label,
  color = 'primary',
  size = 'normal',
  disabled = false,
  upper = false,
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button
      className={cn(s.btn, s[`btn--${color}`], s[`btn--${size}`])}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {upper ? label.toUpperCase() : label}
    </button>
  );
};
