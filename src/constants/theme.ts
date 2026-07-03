import '@/global.css';

import { Platform } from 'react-native';

/**
 * WomenLab Design System
 * v1.0
 */

export const Colors = {

  light: {

    // Fondo principal
    background: '#FBF8F3',

    // Tarjetas
    surface: '#FFFFFF',

    // Texto principal
    text: '#3A2A22',

    // Texto secundario
    textSecondary: '#7A6A60',

    // Color oficial WomenLab (Gerbera)
    primary: '#F0885A',

    // Hover / activo
    primaryDark: '#D85A30',

    // Tronco del Guayacán
    earth: '#8B5E3C',

    // Crecimiento
    growth: '#7D9471',

    // Bordes
    border: '#ECE5DA',

    // Fondo muy suave
    soft: '#F5EFE7',

    success: '#7D9471',

    warning: '#F4B942',

    white: '#FFFFFF',

  },

  dark: {

    background: '#1E1A18',

    surface: '#2A2522',

    text: '#FFFFFF',

    textSecondary: '#D7D1CC',

    primary: '#F0885A',

    primaryDark: '#D85A30',

    earth: '#A67B5B',

    growth: '#90A884',

    border: '#3A342F',

    soft: '#2F2926',

    success: '#90A884',

    warning: '#F4B942',

    white: '#FFFFFF',

  },

} as const;

export type ThemeColor =
  keyof typeof Colors.light &
  keyof typeof Colors.dark;

export const Fonts = Platform.select({

  ios: {

    sans: 'Roboto',

    serif: 'Roboto',

    rounded: 'Roboto',

    mono: 'Roboto',

  },

  android: {

    sans: 'Roboto',

    serif: 'Roboto',

    rounded: 'Roboto',

    mono: 'Roboto',

  },

  default: {

    sans: 'Roboto',

    serif: 'Roboto',

    rounded: 'Roboto',

    mono: 'Roboto',

  },

  web: {

    sans: 'Roboto, sans-serif',

    serif: 'Roboto, serif',

    rounded: 'Roboto, sans-serif',

    mono: 'monospace',

  },

});

export const Radius = {

  small: 8,

  medium: 16,

  large: 24,

  xlarge: 32,

} as const;

export const Spacing = {

  xs: 4,

  sm: 8,

  md: 16,

  lg: 24,

  xl: 32,

  xxl: 48,

  xxxl: 64,

} as const;

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 80,
  }) ?? 0;

export const MaxContentWidth = 900;