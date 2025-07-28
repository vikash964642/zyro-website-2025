// import React from 'react'
import Herosection from './Section/Herosection';
import Features from './Section/Features';
import MultiLanguage from './Section/MultiLanguage';
// import SoundboxFeatures from './Section/SoundboxFeatures';
import FeaturesComparison from './Section/FeaturesComparison';

function SoundboxPage() {
  return (
    <div>
        <Herosection/>
        <Features/>
        <MultiLanguage/>
        {/* <SoundboxFeatures/> */}
        <FeaturesComparison/>
    </div>
  )
}

export default SoundboxPage