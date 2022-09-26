import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import CardList from '../components/CardList';
import { useAppSelector } from '../hooks/Redux';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const PaintersList = () => {
  const { painters } = useAppSelector((state) => state.painters);
  return (
    <main className={cx('main')}>
      <Link to="profile/1">
        <CardList painters={painters} />
      </Link>
    </main>
  );
};
