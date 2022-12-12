import React from "react";

const Footer = () => {
  return (
    <div className="  grid place-items-center gap-6">
      <div className="flex gap-14">
        <span className="flex gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 22V12H15V22"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Home</p>
        </span>
        <span className="flex gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>About Me</p>
        </span>
        <span className="flex gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0001 16.9201V19.9201C22.0012 20.1986 21.9441 20.4743 21.8326 20.7294C21.721 20.9846 21.5574 21.2137 21.3521 21.402C21.1469 21.5902 20.9046 21.7336 20.6408 21.8228C20.377 21.912 20.0974 21.9452 19.8201 21.9201C16.7429 21.5857 13.7871 20.5342 11.1901 18.8501C8.77388 17.3148 6.72539 15.2663 5.19006 12.8501C3.50003 10.2413 2.4483 7.27109 2.12006 4.1801C2.09507 3.90356 2.12793 3.62486 2.21656 3.36172C2.30518 3.09859 2.44763 2.85679 2.63482 2.65172C2.82202 2.44665 3.04986 2.28281 3.30385 2.17062C3.55783 2.05843 3.8324 2.00036 4.11006 2.0001H7.11006C7.59536 1.99532 8.06585 2.16718 8.43382 2.48363C8.80179 2.80008 9.04213 3.23954 9.11005 3.7201C9.23668 4.68016 9.47151 5.62282 9.81006 6.5301C9.9446 6.88802 9.97372 7.27701 9.89396 7.65098C9.81421 8.02494 9.62892 8.36821 9.36005 8.6401L8.09006 9.9101C9.51361 12.4136 11.5865 14.4865 14.0901 15.9101L15.3601 14.6401C15.6319 14.3712 15.9752 14.1859 16.3492 14.1062C16.7231 14.0264 17.1121 14.0556 17.4701 14.1901C18.3773 14.5286 19.32 14.7635 20.2801 14.8901C20.7658 14.9586 21.2095 15.2033 21.5266 15.5776C21.8437 15.9519 22.0122 16.4297 22.0001 16.9201Z"
              stroke="#EEEEEE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Contact</p>
        </span>
      </div>
      <div className="">
        <div className="flex justify-center gap-5">
          <span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_25_10159)">
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <path
                  d="M35 15C34.0424 15.6755 32.9821 16.1922 31.86 16.53C31.2577 15.8376 30.4573 15.3467 29.567 15.124C28.6767 14.9012 27.7395 14.9572 26.8821 15.2845C26.0247 15.6118 25.2884 16.1944 24.773 16.9538C24.2575 17.7131 23.9877 18.6124 24 19.53V20.53C22.2426 20.5756 20.5013 20.1859 18.931 19.3955C17.3607 18.6051 16.0103 17.4387 15 16C15 16 11 25 20 29C17.9405 30.398 15.4872 31.099 13 31C22 36 33 31 33 19.5C32.9991 19.2215 32.9723 18.9436 32.92 18.67C33.9406 17.6635 34.6608 16.3928 35 15V15Z"
                  stroke="#EEEEEE"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_10159">
                  <rect width="48" height="48" rx="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_25_10156)">
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <rect width="48" height="48" rx="24" fill="#393E46" />
                <path
                  d="M29 14H19C16.2386 14 14 16.2386 14 19V29C14 31.7614 16.2386 34 19 34H29C31.7614 34 34 31.7614 34 29V19C34 16.2386 31.7614 14 29 14Z"
                  stroke="#EEEEEE"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 23.3701C28.1234 24.2023 27.9812 25.0523 27.5937 25.7991C27.2062 26.5459 26.5931 27.1515 25.8416 27.5297C25.0901 27.908 24.2384 28.0397 23.4077 27.906C22.5771 27.7723 21.8097 27.3801 21.2148 26.7852C20.6199 26.1903 20.2277 25.4229 20.094 24.5923C19.9604 23.7616 20.092 22.91 20.4703 22.1584C20.8485 21.4069 21.4541 20.7938 22.2009 20.4063C22.9477 20.0188 23.7977 19.8766 24.63 20.0001C25.4789 20.1259 26.2648 20.5215 26.8716 21.1284C27.4785 21.7352 27.8741 22.5211 28 23.3701Z"
                  stroke="#EEEEEE"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.5 18.5H29.51"
                  stroke="#EEEEEE"
                  stroke-opacity="0.75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_10156">
                  <rect width="48" height="48" rx="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#393E46" />
              <path
                d="M30 14H27C25.6739 14 24.4021 14.5268 23.4645 15.4645C22.5268 16.4021 22 17.6739 22 19V22H19V26H22V34H26V26H29L30 22H26V19C26 18.7348 26.1054 18.4804 26.2929 18.2929C26.4804 18.1054 26.7348 18 27 18H30V14Z"
                stroke="#EEEEEE"
                stroke-opacity="0.75"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <br />
        <br />
        <br />
        <p>
        ©2022 justchalchal. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
