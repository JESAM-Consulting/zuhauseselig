import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step4() {
  const { step, setStep, userData, setUserData } = useContext(AppContext);

  return (
    <div
      data-show={step == 4 ? true : false}
      className="flex flex-col step md:justify-start justify-center md:items-start items-center">
      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold">
        Welche Finanzierung kommt für Sie in Frage?
      </h1>

      <div className="mt-8">
        <div className="grid md:grid-cols-3 grid-cols-2  md:gap-x-5 gap-x-1">
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step4: "Finanzieren",
              });

              setStep(step + 1);
            }}
            className="flex flex-col m-2 items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M73.5 75.75H58V33.25H76.5M76.5 33.25L90.5 47.25M76.5 33.25V47.25H90.5M90.5 47.25V53.75M65 47.25H71M65 56.75H83M65 66.25H73.5M80.5 69.75V75.75H86.5L95 67.25L89 61.25L80.5 69.75Z"
                stroke="#B29A89"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#B29A89" />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2">
              Finanzieren
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step4: "Kaufen",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M76.5052 77.549C85.1253 77.549 92.1132 70.5611 92.1132 61.941C92.1132 53.3209 85.1253 46.333 76.5052 46.333C67.8852 46.333 60.8972 53.3209 60.8972 61.941C60.8972 70.5611 67.8852 77.549 76.5052 77.549Z"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M76.5 78.216C73.2827 78.216 70.1377 77.2619 67.4627 75.4745C64.7876 73.6871 62.7027 71.1466 61.4715 68.1743C60.2403 65.2019 59.9182 61.9312 60.5458 58.7758C61.1735 55.6204 62.7227 52.722 64.9977 50.447C67.2726 48.1721 70.1711 46.6228 73.3265 45.9952C76.4819 45.3675 79.7526 45.6897 82.7249 46.9209C85.6973 48.152 88.2378 50.237 90.0252 52.912C91.8126 55.5871 92.7666 58.732 92.7666 61.9493C92.7596 66.2613 91.0435 70.3947 87.9944 73.4438C84.9454 76.4928 80.812 78.2089 76.5 78.216ZM76.5 46.9973C73.5464 46.9973 70.6592 47.8731 68.2034 49.514C65.7477 51.1549 63.8336 53.4872 62.7034 56.2159C61.5731 58.9446 61.2774 61.9472 61.8536 64.844C62.4298 67.7408 63.852 70.4016 65.9405 72.4901C68.029 74.5786 70.6898 76.0008 73.5866 76.577C76.4834 77.1532 79.486 76.8575 82.2147 75.7272C84.9434 74.597 87.2757 72.6829 88.9166 70.2271C90.5575 67.7714 91.4333 64.8842 91.4333 61.9306C91.4262 57.9722 89.8506 54.178 87.0516 51.379C84.2526 48.5799 80.4584 47.0043 76.5 46.9973Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M78.3666 69.5575C77.1984 69.5573 76.0442 69.3038 74.9834 68.8144C73.9226 68.3251 72.9806 67.6116 72.2222 66.7231C71.4638 65.8345 70.9071 64.7921 70.5905 63.6677C70.2738 62.5432 70.2048 61.3635 70.388 60.2098C70.5713 59.0561 71.0026 57.9558 71.6521 56.9849C72.3016 56.0139 73.1539 55.1953 74.1503 54.5856C75.1467 53.9758 76.2635 53.5893 77.4237 53.4528C78.5839 53.3163 79.7598 53.433 80.8706 53.7948L81.3292 53.9441V55.8108H79.9959V54.9441C79.0664 54.7048 78.0966 54.6665 77.1511 54.8319C76.2056 54.9973 75.3064 55.3625 74.5133 55.9031C73.7202 56.4438 73.0517 57.1474 72.5522 57.967C72.0528 58.7866 71.734 59.7034 71.6171 60.6561C71.5002 61.6087 71.5879 62.5754 71.8744 63.4914C72.1609 64.4075 72.6396 65.2519 73.2784 65.9682C73.9172 66.6845 74.7016 67.2563 75.579 67.6453C76.4564 68.0343 77.4068 68.2317 78.3666 68.2241C79.0063 68.2256 79.6429 68.1359 80.2572 67.9575V67.2535H81.5906V68.9041L81.1559 69.0668C80.262 69.3925 79.3179 69.5586 78.3666 69.5575Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M78.6759 62.6592H69.5773V63.9925H78.6759V62.6592Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M78.6759 59.0107H69.5773V60.3441H78.6759V59.0107Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M76.5266 28.7842H75.1932V41.8988H76.5266V28.7842Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M85.6679 35.8965H84.3346V41.8992H85.6679V35.8965Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M67.6599 35.8965H66.3265V41.8992H67.6599V35.8965Z"
                fill="#B29A89"
                stroke="#B29A89"
                className="stroke-green-1 hover:fill-white group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <rect x="0.5" y="0.5" width="152" height="106" stroke="#B29A89" />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2">
              Kaufen
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step4: "Beides",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M75.5683 75.1413H60.0167V32.5H78.5782M78.5782 32.5L92.6248 46.5466M78.5782 32.5V46.5466H92.6248M92.6248 46.5466V53.0682M67.04 46.5466H73.06M67.04 56.0781H85.0999M67.04 65.6097H75.5683"
                stroke="#B29A89"
                strokeWidth="3"
                strokeLinecap="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
                strokeLinejoin="round"
              />
              <path
                d="M88.1689 64.6385C88.7158 64.6518 89.2521 64.7857 89.7362 65.0295C90.2203 65.2734 90.639 65.6208 90.9599 66.0446C91.131 66.2593 91.3842 66.4002 91.6638 66.4365C91.9434 66.4728 92.2266 66.4015 92.4513 66.2382C92.5632 66.1564 92.6569 66.0541 92.7271 65.9374C92.7974 65.8206 92.8427 65.6917 92.8606 65.5581C92.8784 65.4245 92.8684 65.2889 92.831 65.159C92.7937 65.0291 92.7298 64.9076 92.6431 64.8015C92.1248 64.1299 91.4514 63.5819 90.6753 63.2001C89.8992 62.8184 89.0415 62.6132 88.1689 62.6006C86.9489 62.6345 85.7696 63.0275 84.7916 63.7259C83.8137 64.4242 83.0846 65.3941 82.7039 66.5032H81.1485C80.866 66.5032 80.5951 66.6105 80.3953 66.8016C80.1955 66.9927 80.0833 67.2519 80.0833 67.5221C80.0833 67.7924 80.1955 68.0515 80.3953 68.2426C80.5951 68.4337 80.866 68.5411 81.1485 68.5411H82.2138V69.56H81.1485C80.866 69.56 80.5951 69.6674 80.3953 69.8585C80.1955 70.0495 80.0833 70.3087 80.0833 70.579C80.0833 70.8492 80.1955 71.1084 80.3953 71.2995C80.5951 71.4906 80.866 71.5979 81.1485 71.5979H82.7039C83.0846 72.707 83.8137 73.6768 84.7916 74.3752C85.7696 75.0736 86.9489 75.4665 88.1689 75.5005C89.0415 75.4879 89.8992 75.2827 90.6753 74.901C91.4514 74.5192 92.1248 73.9711 92.6431 73.2996C92.7577 73.1977 92.8474 73.0729 92.9059 72.9341C92.9644 72.7953 92.9902 72.6459 92.9815 72.4964C92.9728 72.347 92.9298 72.2013 92.8555 72.0696C92.7812 71.9378 92.6776 71.8234 92.5518 71.7343C92.4261 71.6453 92.2814 71.5838 92.128 71.5543C91.9746 71.5248 91.8163 71.5279 91.6643 71.5635C91.5124 71.5991 91.3705 71.6663 91.2487 71.7603C91.127 71.8543 91.0284 71.9728 90.9599 72.1074C90.639 72.5312 90.2203 72.8786 89.7362 73.1225C89.2521 73.3664 88.7158 73.5002 88.1689 73.5135C87.5188 73.489 86.8874 73.2984 86.3404 72.9615C85.7934 72.6246 85.3506 72.1538 85.0582 71.5979H87.5403C87.8229 71.5979 88.0938 71.4906 88.2936 71.2995C88.4934 71.1084 88.6056 70.8492 88.6056 70.579C88.6056 70.3087 88.4934 70.0495 88.2936 69.8585C88.0938 69.6674 87.8229 69.56 87.5403 69.56H84.3977C84.3694 69.3913 84.3516 69.2212 84.3444 69.0505C84.3516 68.8799 84.3694 68.7097 84.3977 68.5411H87.5403C87.8229 68.5411 88.0938 68.4337 88.2936 68.2426C88.4934 68.0515 88.6056 67.7924 88.6056 67.5221C88.6056 67.2519 88.4934 66.9927 88.2936 66.8016C88.0938 66.6105 87.8229 66.5032 87.5403 66.5032H85.0582C85.3577 65.9568 85.8035 65.4963 86.35 65.1687C86.8966 64.8411 87.5242 64.6581 88.1689 64.6385Z"
                fill="#B29A89"
                className="group-hover:fill-white transition-all ease-in-out duration-150"
              />
              <rect x="0.5" y="0.5" width="152" height="107" stroke="#B29A89" />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2">
              Beides interessant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
