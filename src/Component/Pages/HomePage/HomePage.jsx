// import React from 'react'
import HeroSection from "./section/HeroSection";
import BankAccountManagement from "./section/BankAccountManagement";
import ZyroSoundBox from "./section/ZyroSoundBox";
import InstantPayment from "./section/InstantPayment";
import Scroller from "./section/Scroller";
import ZyroPosMachine from "./section/ZyroPosMachine";
import ManagingCorporate from "./section/ManagingCorporate";
import ExpenceControl from "./section/ExpenceControl";
import ConnectedBanking from "./section/ConnectedBanking";
import VerticleSlider from "./section/VerticleSlider";
import BusinessVerticleSlider from "./section/BusinessVerticleSlider";
import NewsletterBox from "./section/NewsletterBox";
import ControlFinance from "./section/ControlFinance";
import CardSliders from "./section/CardSliders";


export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Scroller/>
      <ConnectedBanking/>
      <BankAccountManagement/>
      <ZyroSoundBox/>
      <InstantPayment/>
      <ZyroPosMachine/>
      <CardSliders/>
      <ExpenceControl/>
      <ManagingCorporate />
      <BusinessVerticleSlider/>
      <VerticleSlider />
      <ControlFinance />
<NewsletterBox />
      
    </div>
  )
}
