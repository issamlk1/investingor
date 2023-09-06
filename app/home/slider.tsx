import Image from "next/image";

export default function Slider(){
    return(
        <section  className="container mx-auto z-10 px-8 py-8 h-screen  relative flex flex-col lg:flex-row items-center">
        <div className="font-kufi lg:w-1/2 flex flex-col items-center lg:items-end ">
          <h1 className=" text-right lg:text-right text-3xl sm:text-5xl font-light  leading-tight mb-4">
            <strong className="text-primarydark dark:text-primarydark">
              طريقك الآمن
            </strong>{" "}
            <span className="text-black"> نحو عالم الاستثمار</span>{" "}
          </h1>
          <p className="text-right lg:text-right sm:text-lg text-maintxt lg:pl-40 leading-relaxed">
            فريق من الخبراء المختصين في مجال الاستثمار وإدارة المخاطر لمساعدتك
            في طريقك نحو الاستقلال المادي
          </p>
          <a
            href="https://wa.me/+447366721362?text=Hello%0aI%20am%20client"
            className="bg-primarydark text-cairo hover:bg-opacity-90 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white "
            target="_blank"
          >
            تواصل مع خبير استثماري
          </a>
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/2 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8">
          <Image
            className="float-right h-4/5"
            src="/img.svg"
            alt="investment image"
            height="500"
            width="300"
          ></Image>
        </div>
      </section> 
    );
}