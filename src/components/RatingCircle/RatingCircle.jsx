import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moduleCss from './ratingCircle.module.css';

const RatingCircle = ({ rating }) => {
  const percentage = (rating / 10) * 100;

  return (
    <div className={moduleCss.circularProgressbar}>
      <CircularProgressbar className={moduleCss.CircularProgressbar}
        value={percentage}
        text={`${rating.toFixed(1)}/10`}
        styles={buildStyles({
          textSize: 'inherit',
          textColor: 'inherit',
          trailColor: 'inherit',
          backgroundColor: 'inherit',

          rotation: 0.25,
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        })}
      />
    </div>
  );
};

export default RatingCircle;
