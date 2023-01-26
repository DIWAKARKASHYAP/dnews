// import { getStaticProps } from "..";
import Nav from "../../components/nav";
import Section from "../../components/section";

export async function getStaticProps() {
  const tecRes = await fetch(
    "https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=50&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb"
  );
  const tecData = await tecRes.json();
  return {
    props: {
      technologyData: tecData.articles,
    },
  };
}
// getStaticProps()

// console.log(props)

const trending = ({ technologyData }) => {
  return (
    <>
      <div className=" bg-[url('https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif')] bg-fixed ">
        <Nav />

        <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2 pt-20 pb-10  text-gray-400">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono">
                  {" "}
                  Technology{" "}
                </div>
                {/* <Link href = {"/trending"}>

                <button className=" border rounded-lg  pl-2 pr-2 bg-black text-white border-sky-500  ">
                  View More
                </button>
                </Link> */}
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {technologyData.map((news, Index) => {
              return (
                <Section
                  key={Index}
                  title={news.title}
                  image={news.urlToImage}
                  des={news.description}
                  date={" [ " + news.publishedAt + " ]"}
                  link={news.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default trending;
