const quote: string =
  "In this section, you will be able to study and compare real estate properties that you liked.";

const ComingSoonSaved = () => {
   // const marginValue = window.innerHeight - 950;
  return (
    <>
      <div className="max-w-[calc(100vw-1rem)] md:max-w-screen md:w-full h-[calc(100vh-12rem)] md:h-[85vh] relative gradient-border gradient-default-border gradient-border-rounded-30px bg-coming-soon-saved-back bg-no-repeat bg-cover text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-default rounded-[30px] z-[-10]"></div>
        <div className="flex flex-col  px-4 py-[22px] md:px-[76px] md:py-[70px] place-content-between  md:h-auto h-[calc(100vh-200px)]">
          <div className="flex flex-col   w-full md:w-[80%]">
            <span className="text-[64px] md:text-[100px] lg:text-[150px] font-bold">
              Coming
            </span>
            <div className="h-auto relative flex">
              <div className="hidden md:block absolute max-w-[480px] lg:-top-10 -left-10 w-full h-full bg-[rgba(27,27,27,0.1)] shadow-coming-soon backdrop-blur-[5px]"></div>
              <span className="text-[64px] md:text-[100px] lg:text-[150px] font-bold lg:mt-[-100px]">soon</span>
            </div>
            <span className="text-[18px] md:text-[28px] max-w-[550px] md:max-w-[720px] tracking-[-1px] font-normal font-montserrat">
              {quote}
            </span>
          </div>
          
          {/* <div className={`flex flex-col w-full ${marginValue > 0 ? `md:mt-[calc(100vh-950px)]` : ''}`}> */}
          <div className="flex flex-col w-full md:mt-[calc(100vh-950px)]">
            <span className="font-medium font-montserrat text-[14px] my-4">
              Subscribe to our news to stay tuned!
            </span>
            <div className="md:flex flex-col md:flex-row w-full  md:items-center justify-items-end grid">
              <input
                className="bg-[#414141] w-full h-[38px] sm:h-11 rounded-lg sm:rounded-[10px] py-3 px-[10px] sm:px-[20px] placeholder:text-[#646464] placeholder:font-montserrat placeholder:font-thin md:max-w-[380px]"
                placeholder="Enter your email"
              />
              <button className="bg-primary-light text-base font-montserrat font-semibold h-[42px] w-[130px] sm:w-[165px] mt-2 md:mt-0 md:ml-2 relative gradient-border gradient-default-border gradient-border-rounded-30px">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonSaved;
