// import { getStaticProps } from "..";
import Nav from "../../components/nav";
import Section from "../../components/section";

// const query = () =>{

//     const router = useRouter();

// const  q  = router.query;

// return{
//   param: {
//     quer: q,
//   },
// }

// }
// query()

export async function getServerSideProps(context) {
  // const path = async () =>{

  //   const router = await useRouter();
  //   const  {q}  = await router.query;
  //   console.log({q})
  //   return({q})
  // }
  // // path()
  console.log(context.query.searchIn);

  const q = context.query.q.toString();
  const searchIn = context.query.searchIn;


  const url = `https://newsapi.org/v2/Everything?q=${q}&searchIn=${searchIn || "title,description,content"}&language=en&pageSize=50&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb`;
  // console.log(trendingData)
  const treRes = await fetch(url);
  const treData = await treRes.json();

  // console.log(treData);
  if (treData.totalResults == 0) {
    return {
      props: {
        searchData: false,
      },
    };
  } else {
    return {
      props: {
        searchData: treData.articles,
      },
    };
  }
}
// getStaticProps()

// console.log(props)

const search = ({ searchData }) => {
  return (
    <>
      <div className=" bg-[url('https://nebigdatahub.org/wp-content/uploads/2019/11/7T9364v.gif')] bg-fixed ">
        <Nav />

        <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2 pt-20 pb-10  text-gray-400">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono"> Search Reasults </div>
                {/* <Link href = {"/trending"}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link> */}
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {
              searchData == false ? <div className=" flex items-center justify-center text-4xl m-10"> Sorry No Data found</div> : 

            searchData.map((news) => {
              return (
                <Section
                  key={news.index}
                  title={news.title}
                  image={news.urlToImage}
                  des={news.description}
                  date={" [ " + news.publishedAt + " ]"}
                  link={news.url}
                />
              );
            }) 
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default search;
