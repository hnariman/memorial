import { SVGIconProps } from '../types';

export default function EmailIcon(props: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || "24px"}
      height={props?.height || "24px"}
      fill={props?.fill || "currentColor"}
      viewBox="0 0 256 256"
    >
      <path d="M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
    </svg>

  )
}
