import './ConnectedBankingCss.css';
function FeaturesConnectedBanking() {
    const features = [
  {
    image: "../../../../../public/image/ConnectedBanking/featureImg1.png",
    heading: "Multi-Bank Account Management",
    paragraph:
      "Easily link all your current bank accounts and manage them conveniently from a single dashboard with complete control over your finances.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg2.png",
    heading: "Real-Time Syncing",
    paragraph:
      "Get real-time updated on balances, transactions, and activity across all your linked business accounts for accurate tracking and control.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg3.png",
    heading: "API Integrations",
    paragraph:
      "Seamlessly connect our tools with your existing systems, ensure smooth operations, and access clear & concise documentation for efficient implementation.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg4.png",
    heading: "Bulk Payments & Payouts",
    paragraph:
      "Easily make bulk payments to vendors or employees by uploading an excel file in just a single click for secure processing.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg5.png",
    heading: "Multiple Payment Mode",
    paragraph:
      "Choose from IMPS, NEFT, and RTGS to make your payments smooth, secure and timely-ensuring reliable transfers whenever you need them.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg6.png",
    heading: "Cash Flow Management",
    paragraph:
      "Get complete cash flow visibility by linking multiple accounts and tracking all outgoing transactions from a single dashboard.",
  },
    {
    image: "../../../../../public/image/ConnectedBanking/featureImg1.png",
    heading: "Bulk Payments & Payouts",
    paragraph:
      "Easily make bulk payments to vendors or employees by uploading an excel file in just a single click for secure processing.",
  },
]
  return (
   <>
    <section className="max-w-screen-lg lg:mx-auto lg:mt-[131px] mt-[100px]">
      <div className='mx-4'>
       <p className="max-[375px]:text-[22px] text-[28px] lg:text-[32px] font-semibold text-white text-center">Key Features of  Zyro Connected Banking</p> 
      <div className='flex justify-center'>
         <p className="max-[375px]:text-[12.5px] max-[375px]:pt-[13px] text-[14px] lg:text-[20px] font-normal text-[#9E9C9F] text-center  pt-[22px] lg:w-[750px]">Run your business smarter with connected banking by managing, automating, and tracking all your finances on a single platform.</p>
      </div>
      </div>
      <div className="h-[500px] lg:h-[400px] pr-4 overflow-auto feature-scrollbar ml-4 mt-[50px]">
         {features.map((feature,index) => (
          <div key={index} className="border-[0.688px] border-[#434343] rounded-[16.516px] px-[20px] py-[18px]  flex gap-[18px] mt-[25px] first:mt-0 bg-[#0B051E]">
            <img src={feature.image} className="h-[50px] w-[50px]"></img>
            <div>
                  <p className="max-[375px]:text-[15.5px] text-[#F1F1F1] text-[17px] lg:text-[20px] font-medium ">{feature.heading}</p>
                  <p className="max-[375px]:text-[12.5px] text-[#9E9C9F] text-[14px] lg:text-[16px] font-normal pt-[12px]">{feature.paragraph}</p>
                </div>
            </div>
         ))}
      </div>
    </section>
   </>
  )
}

export default FeaturesConnectedBanking