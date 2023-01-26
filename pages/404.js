import Nav from "../components/nav";


const errorPage =() =>{
    return(
        <>
           

<div className=" bg-[url('https://nebigdatahub.org/wp-content/uploads/2019/11/7T9364v.gif')] bg-fixed h-screen  ">
        <Nav />

        <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2 pt-20 pb-10  text-gray-400">
          <div className=" sm:border-2 m-4 pt-2 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
            <div>
              <div className=" hover:underline-offset-4  pb-2 flex justify-between ">
                <div className="text-2xl text-gray-300 font-semibold font-mono"> Error </div>
               
              </div>
            </div>

            <div className=" w-auto h-1 rounded-2xl border-2 border-red-500"></div>



            

            <div className="flex items-center justify-center pt-10 font-semibold font-mono text-9xl  ">

            404
            
            </div>

            <div className=" flex items-center justify-center m-5 ">
                <div>
                    This page could not found
                </div>
            </div>
          </div>
        </div>
      </div>



        </>
    )

}

export default errorPage