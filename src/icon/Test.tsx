import { SVGProps } from 'react';

const Test = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id='Layer_1'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 1366 768'
    {...props}
  >
    <image
      width={1366}
      height={768}
    />
  </svg>
);

export default Test;