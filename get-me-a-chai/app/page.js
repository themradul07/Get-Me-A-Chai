import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[85vh] z-[-2] h-auto w-[100%] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ">



      <div className="gap-6 flex-col  text-white  h-[65vh] flex justify-center items-center">
        <div className="flex items-center">

          <div className="font-bold text-6xl">
            Get Me A Chai
          </div>
          <div className="w-20 relative">
            <img src="/tea.gif" className="relative top-[-10px]" alt="" />
          </div>
        </div>
        <p className="text-center">A crowd funding platforms for creators.Get funded by fans and followers. Start </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-slate-800 w-[100%] h-1"></div>

      <div className="text-white flex flex-col gap-16 p-6 py-6  items-center">

        <h1 className="text-3xl py-6 font-bold">Your Fans can buy you a Chai </h1>


        <div className="flex flex-row w-[100%]  px-4 py-3 justify-center items-center">
          <div className="w-1/3 flex flex-col gap-3 items-center justify-center ">
            <div className="image bg-white w-24 rounded-full">
              <img src="./fund3.gif" alt="" />
            </div>
            <div className="title text-lg font-bold"> Fund Yourself</div>
            <div className="desc">Lorem ipsum dolor sit amet.</div>

          </div>


          <div className="w-1/3 flex flex-col gap-3 items-center justify-center ">
            <div className="image bg-white w-24 rounded-full">
              <img src="./fund1.gif" className="rounded-full" alt="" />
            </div>
            <div className="title text-lg font-bold"> Tranfer Anywhere</div>
            <div className="desc">Lorem ipsum dolor sit amet.</div>

          </div>


          <div className="w-1/3 flex flex-col gap-3 items-center justify-center ">
            <div className="image bg-white w-24 rounded-full">
              <img src="./fund6.gif" className="rounded-full" alt="" />
            </div>
            <div className="title text-lg font-bold"> Transfer Anytime</div>
            <div className="desc">Lorem ipsum dolor sit amet.</div>

          </div>

        </div>
      </div>
      <div className="bg-slate-800 w-[100%] h-1 mt-12"></div>

      <div className="text-white flex flex-col gap-16 p-6 py-6  items-center">

        <h1 className="text-3xl font-bold py-4">Learn more about Us </h1>


        <div className="flex flex-row w-[100%]  px-4 mb-12 justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NL1KZkS_xVU?si=Dt990cz0kKXjIFS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         

        </div>
      </div>
      <div className="bg-slate-800 w-[100%] h-1 mt-4"></div>
    </div>

  );
}
