'use client';

import React from 'react';
import { useThemeContext } from '@/context/theme.context';
import classNames from 'classnames/bind';
import styles from './ThemeToggle.module.scss';

const cx = classNames.bind(styles);

function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <button type="button" className={cx({ switch: true, switch_dark: theme === 'dark' })} onClick={toggleTheme} />;
}

export default ThemeToggle;
