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
      <ExpenceControl/>
      <ManagingCorporate />
    </div>
  )
}
