import { Svg, G, Path } from "@react-pdf/renderer";

const PhoneIcon = (props) => (
  <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M18.9998 17.5V6.5C19.0627 5.37366 18.6774 4.2682 17.9279 3.42505C17.1784 2.5819 16.1258 2.06958 14.9998 2H8.99981C7.87387 2.06958 6.82121 2.5819 6.07175 3.42505C5.32228 4.2682 4.9369 5.37366 4.99982 6.5V17.5C4.9369 18.6263 5.32228 19.7317 6.07175 20.5748C6.82121 21.418 7.87387 21.9303 8.99981 21.9999H14.9998C16.1258 21.9303 17.1784 21.418 17.9279 20.5748C18.6774 19.7317 19.0627 18.6263 18.9998 17.5V17.5Z"
        stroke="#202021"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5H10"
        stroke="#202021"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default PhoneIcon;
