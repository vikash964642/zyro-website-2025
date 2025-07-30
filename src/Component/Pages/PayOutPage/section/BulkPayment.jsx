
import posBulkPayments from '../../../../../public/image/PayOut/posBulkPayments.webp';
import './PayOut.css';
function BulkPayment() {
  return (
       <section className="max-w-screen-lg mx-auto lg:mt-[150px] mt-[100px] px-[20px] xl:px-[0px]">
        <div className='lg:flex gap-[30px] items-center '>
            <div className='lg:w-[50%] lg:h-[350px] lg:flex flex-col justify-end'>
                <h2 className='max-[360px]:text-[22px] max-[375px]:text-[23px] text-[24px] text-center lg:text-left lg:text-[34px] font-semibold bulkPaymentHeaderGradient'>Disburse Bulk Payments in a Single Click</h2>
                <p className='max-[360px]:text-[13px]  text-[14px] font-normal text-[#959595] text-center lg:text-[16px] lg:text-left pt-[23px] '>Zyro Bulk Payouts simplify all your disbursements, from salaries and vendor payments to commissions and refunds, through a single dashboard. Just upload an Excel or CSV file, review the details, and send payments quickly.</p>
                <p className='max-[375px]:text-[14px] text-[16px] font-medium text-[#FFF] text-center lg:text-left pt-[18px] lg:pt-[5px]'>No delays | No manual work | No complexity</p>
            </div>
            <div className='max-[375px]:h-[260px] h-[310px] lg:h-[350px] lg:w-[50%] flex justify-center mt-[60px] lg:mt-0'>
                <img className='h-[100%]' src={posBulkPayments}/>
            </div>
        </div>
       </section>
  )
}

export default BulkPayment