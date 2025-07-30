import soundbox from "/image/soundbox/soundbox.webp";
import newSoundbox from "/image/soundbox/newSoundbox.webp";
function SoundboxFeatures() {
  return (
    <section className="max-w-screen-lg mx-auto relative mt-[161px]">
      <div className="soundboxFeatures-gradient hidden lg:block"></div>
      <div className="lg:bg-black lg:relative lg:h-[663px] pt-[25px]">
        <div className="bg-black lg:bg-transparent flex flex-col lg:flex-row  justify-between items-center ">
          <div className="lg:ml-[113px]">
            <p className="text-[#FFFFFF]  text-[34.2px] leading-[41.32px] font-semibold w-[200px]">
              High-Quality Speaker
            </p>
            <p className="text-[#ffffff] text-[13.54px] leading-[22.8px] font-medium pt-[15px] w-[289px]">
              Loud and clear payment sounds, even in the busiest places.
            </p>
          </div>
          <div className="bg-[#080219] rounded-[30px] p-[20px] lg:mr-[70px] w-[370px] h-[370px] flex justify-center items-center">
            <img src={soundbox} alt="" height={"326px"} width={"241.5px"} />
          </div>
        </div>
        <div className="bg-black lg:bg-transparent flex flex-col-reverse lg:flex-row justify-between lg:items-end items-center lg:absolute lg:top-[300px] w-full mt-[70px] lg:mt-0">
          <div className="bg-[#080219] rounded-[25px] p-[20px] lg:ml-[113px] w-[370px] lg:w-[314px] h-[408px] lg:h-[347px] flex justify-center items-center">
            <img src={newSoundbox} alt="" height={"222px"} width={"248.5px"} />
          </div>
          <div className="lg:mr-[40px]">
            <p className="text-[#FFFFFF]  text-[34.2px] leading-[41.32px] font-semibold w-[216px]">
              Better Visible QR Code
            </p>
            <p className="text-[#ffffff] text-[13.54px] leading-[22.8px] font-medium pt-[15px] w-[266px]">
              Customer can scan from a distance for hassle-free payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoundboxFeatures;
