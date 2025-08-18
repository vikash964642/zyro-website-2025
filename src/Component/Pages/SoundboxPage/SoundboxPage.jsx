// import React from 'react'
import Herosection from './Section/Herosection';
import Features from './Section/Features';
import MultiLanguage from './Section/MultiLanguage';
import SoundboxFeatures from './Section/SoundboxFeatures';
import FeaturesComparison from './Section/FeaturesComparison';
import Form from './Section/Form';
import Faq from './Section/Faq';
import NeedsSpeaker from './Section/NeedsSpeaker';

function SoundboxPage() {
  return (
    <div>
        <Herosection/>
        <Features/>
        <MultiLanguage/>
        <SoundboxFeatures/>
        <NeedsSpeaker/>
        <FeaturesComparison/>
        <Faq/>
        <Form/>
    </div>
  )
}

export default SoundboxPage