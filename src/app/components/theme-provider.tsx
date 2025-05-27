'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<ThemeProviderProps>;

const ThemeProvider = ({ children, ...props }: Props) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
