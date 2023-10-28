'use client';

import React from 'react';
import { useThemeContext } from '@/context/theme.context';
import classNames from 'classnames/bind';
import styles from './ThemeToggle.module.scss';

const cx = classNames.bind(styles);

function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <button type="button" className={cx({ switch: true, light: theme === 'dark' })} onClick={changeTheme} />;
}

export default ThemeToggle;
