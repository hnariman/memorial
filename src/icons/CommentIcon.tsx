import { SVGIconProps } from "../types";

export default function CommentIcon(props: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || "24px"}
      height={props?.height || "24px"}
      fill={props?.fill || "currentColor"}
      viewBox="0 0 256 256"
    >
      <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z" />
    </svg>
  )
}
