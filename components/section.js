


import Link from "next/link";

  
  const section =(par) => {  

    return (

        
        <div className="" >
       

          <div>
            <div className=" block mt-6 sm:mt-6 sm:ml-6 sm:mr-6 sm:flex    border-black">
              <div className="    sm:w-1/4 h-48 sm:h-44 bg-teal-300">
                <img
                  className=" w-full h-full object-cover  "
                  src={par.image}
                ></img>
              </div>
              <div className=" sm:w-3/4 pt-4 sm:p-4 ">
                {/* tital */}
                <div className=" text-xl font-medium  text-slate-200">
                  {par.title}{" "}
                  <span className=" text-slate-400">
                    {par.date}
                  </span>
                </div>
                <div className=" mt-2 mb-2 w-auto h-1 rounded-2xl border-2 border-red-300"></div>
                <span className="  text-slate-300 mt-2">{par.des}</span>
                <Link href={par.link}>
                  <a className=" text-sky-600 "> read more </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
   
  }

  export default section;











//   <div key={index}>
//                   {/* <div> hellow from home page</div>
//                             <div>{news.title}</div> */}

//                   <div>
//                     <div className=" block mt-6 sm:mt-6 sm:ml-6 sm:mr-6 sm:flex    border-black">
//                       <div className="   sm:w-1/4 h-48 sm:h-44 bg-teal-300">
//                         <img
//                           className=" w-full h-full object-cover  "
//                           src={news.urlToImage}
//                         ></img>
//                       </div>
//                       <div className=" sm:w-3/4 pt-4 sm:p-4 ">
//                         {/* tital */}
//                         <div className=" text-xl font-medium">
//                           {news.title}{" "}
//                           <span className=" text-slate-400">
//                             {" [ " + news.publishedAt + " ]"}
//                           </span>
//                         </div>
//                         <div className=" mt-2 mb-2 w-auto h-1 rounded-2xl border-2 border-red-300"></div>
//                         <span className="   mt-2">{news.description}</span>
//                         <Link href={`/section/${index}`}>
//                           <a className=" text-sky-600 ">read more</a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );