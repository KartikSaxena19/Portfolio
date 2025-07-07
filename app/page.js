import Link from "next/link";
import Image from "next/image";
import UpperHead from "./components/UpperHead";
import LowerHead from "./components/LowerHead";


export default function Home() {
  
  return (
    <>
      <div className="background ">
        <div className="flex flex-col justify-center items-center">
          <UpperHead />

          <div className="flex">
            <div className="img flex justify-center items-center bg-amber-100 bg- rounded-full hover:scale-110 transition-all duration-300 my-19 md:-my-10">
              <Image alt="logo" src={"/logo.png"} height={180} width={180}></Image>
            </div>


            
          </div>
            <div className="cv flex justify-center items-center md:my-16 my-0 py-2">
              <Link href={'/KartikSaxenaCV.pdf'}  download={'Kartik-Saxena-CV.pdf'} passHref>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm cursor-pointer font-medium text-gray-900 rounded-lg group dark:text-white dark:hover:text-gray-900 hover:bg-amber-50">
                <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent font-bold ">
                  Download CV
                </span>
              </button>
              </Link>
            </div>
        </div>
        <div>
          <LowerHead/>
        </div>
      </div>
    </>
  );
}
