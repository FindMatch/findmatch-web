import cn from 'classnames';

import { UIColor } from '../../common/types/uiColor.type';
import { Icons, IconsList } from './Icon.enum';

import s from './Icon.module.css';

interface IconProps {
  /**
   * Icono a mostrar (debe existir dentro del listado de iconos en SVG)
   */
  icon: Icons;

  /**
   * Tamaño del icono.
   */
  size?: number;

  /**
   * Color del icono.
   */
  color?: UIColor | 'light';

  /**
   * Extiende las clases desde el componente padre.
   */
  className?: string;

  /**
   * Extiende los estilos desde el componente padre.
   */
  style?: React.CSSProperties;
}

export const Icon = ({ icon, size = 18, color = 'secondary', className, style }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ ...style }}>
      <path d={IconsList[icon]} className={cn(s[`icon--${color}`], className)}></path>
    </svg>
  );
};
