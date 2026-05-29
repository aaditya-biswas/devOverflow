import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthCard = ({
  cardName,
  cardDesc,
  inputFields,
  buttonText,
}: {
  cardName: string;
  cardDesc?: string;
  inputFields?: string[];
  buttonText?: string;
}) => {
  return (
    <div id="root" className="flex h-screen w-full items-center justify-center">
      <div id="bounding_box" className="flex flex-col rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
        <div id="Top Bar" className="flex flex-row justify-around">
          <div id="account_header" className="font-inter text-2xl font-medium text-black dark:text-white">
            {cardName}
          </div>
          <Link href="/" className="ml-20 flex items-center gap-1">
            <Image src="/images/site-logo.svg" width={26} height={26} alt="DevFlow Logo"></Image>
          </Link>
        </div>
        <div id="desc_text" className="text-sm font-medium text-black dark:text-gray-400">
          {cardDesc}
        </div>
      </div>
    </div>
  );
};
export default AuthCard;
