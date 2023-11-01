'use client';

import React, { useEffect, useState } from 'react';
// import { useThemeContext } from '@/context/theme.context';
import classNames from 'classnames/bind';
import { useTheme } from 'next-themes';
import styles from './ThemeToggle.module.scss';

const cx = classNames.bind(styles);

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme, setTheme]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null;
  }

  return <button type="button" className={cx({ switch: true, switch_dark: theme === 'dark' })} onClick={toggleTheme} />;
}

export default ThemeToggle;
