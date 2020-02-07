import React, { useState } from "react";
import { map } from "lodash";

const SINGER_X = 50;
const SINGER_Y = 50;
const SINGER_HEIGHT = 100;
const SINGER_WIDTH = 200;
const SINGER_BUFFER = 10;

export default function MicMap() {
  const [singers, setSingers] = useState(["Singer 1", "Singer 2"]);

  return (
    <div>
      <svg height="1000" width="1000">
        {map(singers, (s, i) => (
          <g transform={`translate(${SINGER_X},${SINGER_Y + i * (SINGER_BUFFER + SINGER_HEIGHT)})`}>
            <rect fill="white" x={0} y={0} height={SINGER_HEIGHT} width={SINGER_WIDTH} />
            <text x={10} y={10}>
              {s}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
