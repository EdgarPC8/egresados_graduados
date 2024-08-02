import { Svg, G, Path } from "@react-pdf/renderer";

const IdentificationIcon = (props) => (
  <Svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H12H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V12V9Z"
        stroke="#202021"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z"
        stroke="#202021"
        strokeWidth={2}
      />
      <Path
        d="M11.6521 15C11.1982 14.2388 10.3888 14 9.00001 14C8.11946 14 7 14 7 14"
        stroke="#202021"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M12 9L17 9"
        stroke="#202021"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 12L17 12"
        stroke="#202021"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15H17"
        stroke="#202021"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default IdentificationIcon;
