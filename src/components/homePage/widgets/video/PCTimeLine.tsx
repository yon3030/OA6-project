"use client";

import {
  TimeLineContainer,
  TimeLineUnactiveProgress,
  TimeLineActiveProgress,
} from "./classNames";

interface PCTimeLineProps {
  currentTime: number;
  duration: number;
}

const PCTimeLine: React.FC<PCTimeLineProps> = ({ currentTime, duration }) => {
  return (
      <div className={TimeLineContainer}>
        <div className={TimeLineUnactiveProgress}>
          <div
            className={TimeLineActiveProgress}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </div>
  );
};

export default PCTimeLine;
