import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step2() {
  const { step, setStep, userData, setUserData } = useContext(AppContext);

  return (
    <div data-show={step == 2 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-4xl md:text-3xl  text-xl font-bold lg:max-w-xl md:max-w-md">
        Welche Dachform hat Ihr Haus?
      </h1>

      <div className="mt-10">
        <div className="flex lg:space-x-8 lg:flex-nowrap flex-wrap">
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step2: "Flachdach",
              });

              setStep(step + 1);
            }}
            className="flex flex-col m-2 items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-yellow-1"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_201_195)">
                <path
                  d="M81.0798 51.4311V29.5H36.4858V79.5H116.514V51.4311H81.0798ZM44.7956 77.1393V60.1893H55.2299V77.0921L44.7956 77.1393ZM42.4348 57.8286V77.0921H38.8466V31.8607H78.7191V77.1393H57.4726V57.8286H42.4348ZM87.2885 77.0921V67.8617H108.275V77.1393L87.2885 77.0921ZM108.275 65.4537H87.3593V60.1893H108.346L108.275 65.4537ZM114.083 77.0921H110.707V57.8286H84.9986V77.0921H81.0798V53.7918H114.13L114.083 77.0921Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
                <path
                  d="M57.5907 35.7324H42.4349V50.8646H57.5907V35.7324ZM55.23 48.5039H44.7956V38.0931H55.23V48.5039Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
                <path
                  d="M75.721 35.7324H60.5652V50.8646H75.721V35.7324ZM73.3603 48.5039H62.9259V38.0931H73.3603V48.5039Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
                <path
                  d="M75.721 57.8281H60.5652V72.9839H75.721V57.8281ZM73.3603 70.6232H62.9259V60.1888H73.3603V70.6232Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
              </g>
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#A1A09C" />
              <defs>
                <clipPath id="clip0_201_195">
                  <rect
                    width="80.0283"
                    height="50"
                    fill="white"
                    transform="translate(36.4858 29.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="font-visby md:text-xl text-sm text-yellow-1 mt-2">
              Flachdach
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step2: "Pultdach",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="154"
              height="109"
              viewBox="0 0 154 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-yellow-1"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_201_198)">
                <path
                  d="M94.4319 46.2901V29.3994H83.7464V41.6306L52.25 27.9209V81.0795H102.25V49.7175L94.4319 46.2901ZM85.9866 31.6395H92.1918V45.3044L85.9866 42.6162V31.6395ZM81.7079 78.8394V62.8447H92.1918V78.8394H81.7079ZM100.01 78.8394H94.4319V60.6046H79.4677V78.8394H54.4901V31.3483L100.01 51.1736V78.8394Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
                <path
                  d="M75.3011 52.9209H58.164V71.9621H75.3011V52.9209ZM73.0609 69.722H60.4041V55.161H73.0609V69.722Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
              </g>
              <rect
                x="1.25"
                y="0.5"
                width="152"
                height="108"
                stroke="#A1A09C"
              />
              <defs>
                <clipPath id="clip0_201_198">
                  <rect
                    width="50"
                    height="53.1586"
                    fill="white"
                    transform="translate(52.25 27.9209)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="font-visby md:text-xl text-sm text-yellow-1 mt-2">
              Pultdach
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step2: "Satteldach",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-yellow-1"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_201_192)">
                <path
                  d="M76.7867 29.5L51.0291 58.6155H56.4345V79.5H95.5008V58.2879H101.971L76.7867 29.5ZM80.636 77.4525H72.446V64.5328H80.636V77.4525ZM93.4533 56.2404V77.4525H82.6835V62.4853H70.3985V77.4525H58.482V56.5885H55.5745L76.7867 32.5917L97.4664 56.2404H93.4533Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
                <path
                  d="M76.5 45.5117C75.4026 45.5117 74.3298 45.8371 73.4173 46.4468C72.5048 47.0565 71.7936 47.9231 71.3736 48.937C70.9537 49.9509 70.8438 51.0666 71.0579 52.143C71.272 53.2193 71.8004 54.208 72.5765 54.984C73.3525 55.76 74.3411 56.2885 75.4175 56.5026C76.4938 56.7167 77.6095 56.6068 78.6234 56.1868C79.6373 55.7668 80.5039 55.0556 81.1136 54.1432C81.7233 53.2307 82.0487 52.1579 82.0487 51.0604C82.0487 49.5888 81.4641 48.1775 80.4235 47.1369C79.3829 46.0963 77.9716 45.5117 76.5 45.5117ZM76.5 54.5617C75.8075 54.5617 75.1306 54.3563 74.5548 53.9716C73.979 53.5869 73.5303 53.0401 73.2653 52.4003C73.0003 51.7605 72.9309 51.0566 73.066 50.3774C73.2011 49.6982 73.5346 49.0744 74.0243 48.5847C74.5139 48.0951 75.1378 47.7616 75.8169 47.6265C76.4961 47.4914 77.2001 47.5607 77.8399 47.8257C78.4796 48.0907 79.0264 48.5395 79.4112 49.1153C79.7959 49.691 80.0012 50.368 80.0012 51.0604C80.0012 51.989 79.6323 52.8796 78.9757 53.5362C78.3191 54.1928 77.4286 54.5617 76.5 54.5617Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
              </g>
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#A1A09C" />
              <defs>
                <clipPath id="clip0_201_192">
                  <rect
                    width="50.9418"
                    height="50"
                    fill="white"
                    transform="translate(51.0291 29.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="font-visby md:text-xl text-sm text-yellow-1 mt-2">
              Satteldach
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step2: "Andere",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-yellow-1"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_201_204)">
                <path
                  d="M100.941 65.5126L94.5951 59.1871V56.5946H99.0955V50.1447L89.0784 45.2917C89.0784 41.4249 87.5424 37.7165 84.8081 34.9822C82.0739 32.248 78.3655 30.7119 74.4987 30.7119C70.6319 30.7119 66.9234 32.248 64.1892 34.9822C61.455 37.7165 59.9189 41.4249 59.9189 45.2917C59.9189 45.5406 59.9189 45.7894 59.9189 46.0383L51.395 50.5595V56.5946H55.5429V78.2258H94.5951V71.3403L94.844 71.5892C95.0599 71.8068 95.3167 71.9795 95.5997 72.0973C95.8827 72.2152 96.1862 72.2759 96.4928 72.2759C96.7993 72.2759 97.1028 72.2152 97.3858 72.0973C97.6688 71.9795 97.9256 71.8068 98.1415 71.5892L100.941 68.7894C101.369 68.3515 101.609 67.7634 101.609 67.151C101.609 66.5386 101.369 65.9505 100.941 65.5126ZM97.0216 54.5207H92.5212V57.1131L87.4608 52.032C88.2121 50.571 88.71 48.9932 88.9333 47.3656L97.0216 51.5135V54.5207ZM74.4987 57.8805C71.5247 57.8916 68.645 56.8373 66.3813 54.9084C64.1177 52.9795 62.6197 50.3037 62.1587 47.3656L75.1208 40.6668L86.963 46.5153C86.6922 49.6288 85.2597 52.5264 82.9504 54.6321C80.641 56.7378 77.6239 57.8974 74.4987 57.8805ZM74.4987 32.8481C77.6038 32.8584 80.5947 34.0198 82.8932 36.1076C85.1917 38.1953 86.6343 41.0612 86.9423 44.151L75.0794 38.3025L62.0136 45.0636C62.0735 41.7958 63.4166 38.6828 65.7527 36.3971C68.0888 34.1115 71.2304 32.8366 74.4987 32.8481ZM78.9369 76.1519H71.7403V64.5378H78.9369V76.1519ZM92.5212 76.1519H81.0108V62.4639H69.6664V76.1519H57.6168V54.5207H53.4689V51.8246L60.2092 48.3196C60.6564 50.5563 61.6242 52.6561 63.0343 54.4489C64.4445 56.2417 66.2572 57.677 68.3256 58.6385C70.3939 59.6 72.6598 60.0606 74.9394 59.9829C77.219 59.9053 79.4482 59.2916 81.4463 58.1916L92.5212 69.2664V76.1519ZM99.4689 67.3169L96.669 70.1789H96.3165L83.2299 57.0924C84.4183 56.1946 85.4667 55.1252 86.3408 53.9193L92.5626 60.1411L99.4274 67.0265C99.4641 67.0643 99.488 67.1128 99.4954 67.165C99.5029 67.2171 99.4936 67.2703 99.4689 67.3169Z"
                  className="fill-yellow-1 group-hover:fill-white transition-all ease-in-out duration-150"
                />
              </g>
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#A1A09C" />
              <defs>
                <clipPath id="clip0_201_204">
                  <rect
                    width="50.21"
                    height="47.4517"
                    fill="white"
                    transform="translate(51.395 30.7744)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="font-visby md:text-xl text-sm text-yellow-1 mt-2">
              Andere
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
