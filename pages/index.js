import React, { useState } from "react";

import Nav from "../components/nav";
import Section from "../components/section";
import Link from "next/link";

// import Section from "../components/section";

export async function getStaticProps() {

  const treRes = await fetch(
    "https://newsapi.org/v2/top-headlines?language=en&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  );
  const treData = await treRes.json();


  const tecRes = await fetch(
    "https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  );
  const tecData = await tecRes.json();

  
  const ethRes = await fetch(
    "https://newsapi.org/v2/everything?q=ethereum&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  );
  const ethData = await ethRes.json();


  const blockRes = await fetch(
    "https://newsapi.org/v2/everything?q=blockchain&language=en&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  );
  const blockData = await blockRes.json();


  // const polRes = await fetch(
  //   "https://newsapi.org/v2/everything?q=polygon&language=en&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  // );
  // const polData = await polRes.json();


  // const cryRes = await fetch(
  //   "https://newsapi.org/v2/everything?q=crypto&language=en&pageSize=3&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  // );
  // const cryData = await cryRes.json();



  return {
    props: {

      

        
        trendingData : treData.articles,
      technologyData : tecData.articles,
      ethereumData : ethData.articles,
      blockchainData: blockData.articles,
      // polygonData: polData.articles,
      // cryptoData : cryData.articles,
  
    },
  };
}

// trendingData , technologyData , ethereumData , blockchainData , polygonData , cryptoData

// const  [Count, setCount] = useState(0)

//a6f1328365694d0788580c728c5249fb

// console.log(Count)

export default function Home (  {trendingData , technologyData , ethereumData , blockchainData }   ) { 
  return (
    <>
      <div className=" bg-[url('https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif')] bg-fixed ">
        <Nav /> {/* <Homo tital="nvjnfjn" /> */}

      
        
        <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2 pt-20 pb-10  text-gray-400">
        <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono"> Trending </div>
                <Link href = {"/pages"}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {trendingData.slice(0, 3).map((news , Index) => {
              return (

              <Section key={Index}  title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} index={Index} />
              )
            })}
          </div>
        </div>



            {/* technology */}
 
            <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2  pb-10  text-gray-400">
        <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl  text-gray-300 font-semibold font-mono"> Technology </div>
                <Link href={`pages/technology`}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {technologyData.slice(0, 3).map((news , Index) => {
              return (

              <Section key={Index}  title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} index={Index} />
              )
            })}
          </div>
        </div>




            
            {/* Ethereum */}
 
            <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2  pb-10  text-gray-400">
        <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono"> Ethereum </div>
                <Link href={"/pages/ethereum"}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {ethereumData.slice(0, 3).map((news , Index) => {
              return (

              <Section key={Index}  title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} index={Index} />
              )
            })}
          </div>
        </div>





              
            {/* blockchain */}
            <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2  pb-10  text-gray-400">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono"> Blockchain </div>
                <Link href={"/pages/blockchain"}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {blockchainData.slice(0, 3).map((news , Index) => {
              return (

              <Section key={Index}  title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} index={Index} />
              )
            })}
          </div>
        </div>





                    {/* polygon */}
                    {/* <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-gray-300">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl"> Polygon </div>
                <Link href={"/pages/polygon"}>
                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {polygonData.slice(0, 3).map((news, index) => {
              return (

                <Section title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} indes={index}/>
              )
            })}
          </div>
        </div>
 */}



                    
            {/* crypto */}
            {/* <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-gray-300">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl"> Crypto </div>
                <Link href={"/pages/crypto"}>
                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {cryptoData.slice(0, 3).map((news, index) => {
              return (

                <Section title={news.title} image={news.urlToImage} des={news.description} date= {" [ " + news.publishedAt + " ]"} link = {news.url} indes={index}/>
              )
            })}
          </div>
        </div>

 */}





      </div>

     
    </>
  );

}



