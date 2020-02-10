import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { map } from "lodash";

const SINGER_X = 50;
const SINGER_Y = 50;
const SINGER_HEIGHT = 100;
const SINGER_WIDTH = 200;
const SINGER_BUFFER = 10;

export default function MicMap() {
  const [singers, setSingers] = useState(["Singer 1", "Singer 2"]);
  const [scale, setScale] = useState(1);

  const handleChange = ({}, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  return (
    <div>
      <Slider value={scale} onChange={handleChange} min={1} max={4} step={0.1} />
      <svg height="1000" width="1000">
        {map(singers, (s, i) => {
          const x = SINGER_X * scale;
          const y = SINGER_Y + i * (SINGER_BUFFER + SINGER_HEIGHT) * scale;

          return (
            <g transform={`translate(${x},${y}) scale(${scale})`}>
              <rect
                fill="white"
                x={0}
                y={0}
                height={SINGER_HEIGHT}
                width={SINGER_WIDTH}
                stroke="black"
              />
              <text x={10} y={10}>
                {s}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
