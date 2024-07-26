import { SVGIconProps } from "../types"
export default function HomeIcon(props: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || "24px"}
      height={props?.height || "24px"}
      fill={props?.fill || "currentColor"}
      viewBox="0 0 256 256"
    >
      <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
    </svg>
  )
}
