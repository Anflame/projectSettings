import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../constants';
import { useAppSelector } from '../../hooks/useRedux';
import type { TPainters } from '../../store/types';
import Card from '../../ui/Card';

type PainterItemProps = {
  painter: TPainters;
};

export const PainterItem: FC<PainterItemProps> = ({ painter }) => {
  const { isAuth } = useAppSelector(({ auth }) => auth);
  return (
    <li key={painter._id}>
      {isAuth ? (
        <Link to={`/profile/${painter._id}`}>
          <Card
            title={painter.name}
            img={API + painter.mainPainting.image.src}
            id={painter._id}
            year={painter.yearsOfLife}
          />
        </Link>
      ) : (
        <Card
          title={painter.name}
          img={API + painter.mainPainting.image.src}
          id={painter._id}
          year={painter.yearsOfLife}
        />
      )}
    </li>
  );
};
