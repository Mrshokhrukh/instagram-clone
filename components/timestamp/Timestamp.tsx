import { cn } from "@/lib/utils";
import React from "react";

import TimeAgo from "react-timeago";

type TimestampProps = {
  createdAt: Date | number;
  className?: string;
};

const Timestamp: React.FC<TimestampProps> = ({ createdAt, className }) => {
  return (
    <div>
      <TimeAgo
        className={cn(
          "font-medium text-neutral-500 dark:text-neutral-400 text-xs"
        )}
        date={createdAt}
        formatter={(
          value: any,
          unit: any,
          suffix: any,
          epochMilliseconds: any,
          nextFormatter: any
        ) => {
          // if (suffix == "now") {
          //   return `${suffix}`;
          // }
          if (unit) {
            return `${value}${unit[0]} ago`;
          } else {
            return nextFormatter?.(value, unit, suffix, epochMilliseconds);
          }
        }}
      />
    </div>
  );
};
export default Timestamp;
