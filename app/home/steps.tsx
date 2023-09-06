export default function Steps(){
    return (
      // place-items-center 
      <div className=" md:-mt-16 ">
           <div className="lg:grid lg:grid-cols-3 place-items-center ">
        {Array(1,2,3).map((ingredient, index) => (
          <div key="index" className="max-w-sm z-20  hover:border-b-blue-500 bg-white transition  hover:-translate-y-6  border-b-4	border-b-transparent duration-300 mx-4 basis-1/3 rounded overflow-hidden shadow">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
         ))}
      </div>
      </div>
    );
}