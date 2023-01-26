import Nav from "../../components/nav";
import Section from "../../components/section";

export async function getStaticPaths() {

  return {
    paths: [
      { params: { newsNum: "blockchain" } },
    //   { params: { newsNum: "polygon" } },
      // { params: { newsNum: "crypto" } },
      ,
      { params: { newsNum: "ethereum" } },
    ],

    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  var type = context.params.newsNum;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${type}&language=en&pageSize=30&sortBy=publishedAt&apiKey=a6f1328365694d0788580c728c5249fb`
  );
  const Data = await res.json();
  return {
    props: {
      pureData: Data.articles,
      tital: type,
    },
  };
};

const individual = ({ pureData, tital }) => {
  return (
    <>
    <div className=" bg-[url('https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif')] bg-fixed ">
        <Nav />

        <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2 pt-20 pb-10  text-gray-400">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl capitalize text-gray-300 font-semibold font-mono"> {tital}</div>
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>

            {pureData.map((news , Index) => {
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

export default individual;
