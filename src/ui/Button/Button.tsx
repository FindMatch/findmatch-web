import cn from 'classnames';
import { useEffect, useState } from 'react';

import { UISize, UIColor } from '../../common/types';
import { Spinner } from '../Spinner';

import s from './Button.module.css';

interface ButtonProps {
  /**
   * Texto del botón.
   */
  label: string;

  /**
   * Color del botón.
   */
  color?: UIColor;

  /**
   * Tamaño del botón.
   */
  size?: UISize;

  /**
   * Marca el botón como deshabilitado.
   */
  disabled?: boolean;

  /**
   * Convierte el texto del botón a mayúsculas.
   */
  upper?: boolean;

  /**
   * Indica si se debe mostrar el loading.
   */
  loading?: boolean;

  /**
   * Extiende las clases personalizadas del componente padre.
   */
  className?: string;

  /**
   * Extiende los estilos personalizados del componente padre.
   */
  style?: React.CSSProperties;

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
  loading = false,
  className,
  style,
  onClick = () => {}
}: ButtonProps) => {
  const [labelText, setLabelText] = useState<JSX.Element | string>();

  useEffect(() => {
    handleTextButton();
  }, [loading, upper]);

  const handleTextButton = () => {
    if (loading) {
      setLabelText(<Spinner color="light" size="button" />);
    } else {
      setLabelText(upper ? label.toUpperCase() : label);
    }
  };

  return (
    <button
      style={{ ...style }}
      className={cn(s.btn, s[`btn--${color}`], s[`btn--${size}`], className)}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {labelText}
    </button>
  );
};
