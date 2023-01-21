import { useEffect, useState } from 'react';
import cn from 'classnames';

import { UISize, UIColor } from '../../common/types';
import { Spinner } from '../Spinner';

import { Icons } from '../Icon/Icon.enum';
import { Icon } from '../Icon/Icon';

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
   * Icono que se mostrara en el botón.
   */
  icon?: Icons;

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
  icon,
  className,
  style,
  onClick = () => {}
}: ButtonProps) => {
  const [labelText, setLabelText] = useState<JSX.Element | string>();

  useEffect(() => {
    handleTextButton();
  }, [loading, upper, icon]);

  const handleTextButton = () => {
    if (loading) {
      setLabelText(<Spinner color="light" size="button" />);
    } else {
      setLabelText(upper ? label.toUpperCase() : label);
    }

    if (!!icon && !loading) {
      setLabelText(text => (
        <>
          <Icon icon={icon} color="light" size={16} style={{ marginRight: '0.25rem' }} />
          {text}
        </>
      ));
    }
  };

  return (
    <button
      style={{ ...style }}
      className={cn(s.btn, s[`btn--${color}`], s[`btn--${size}`], className)}
      disabled={disabled || loading}
      onClick={() => onClick()}
    >
      {labelText}
    </button>
  );
};
