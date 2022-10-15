import Image from "next/image";
import Link from "next/link";

export default function Card({data}){

    return (
        <div className="p-4 min-w-[250px] max-w-[300px]">
            <div className="text-center mb-4 opacity-90">
              <div className="relative mx-auto object-cover rounded-full h-40 w-40 overflow-hidden">
                <Image src={data.photo} alt={data.name} objectFit="cover" layout="fill" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                {data.name}
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                {data.job}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                {data.name} , {data.born}
              </p>
            </div>
            <div className="pt-4 ss:pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center gap-x-4 sm:gap-x-8">
              {data.socialMedia.map((social, index) => (
                <a href={`https://${social.link}`} target="_blank" key={index}>
                  {social.icon}
                </a>
              ))}
            </div>
        </div>       
    )
}