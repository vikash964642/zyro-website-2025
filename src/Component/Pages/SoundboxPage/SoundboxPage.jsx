// import React from 'react'
import Herosection from './Section/Herosection';
import Features from './Section/Features';
import MultiLanguage from './Section/MultiLanguage';
import SoundboxFeatures from './Section/SoundboxFeatures';
import FeaturesComparison from './Section/FeaturesComparison';
import Form from './Section/Form';

function SoundboxPage() {
  return (
    <div>
        <Herosection/>
        <Features/>
        <MultiLanguage/>
        <SoundboxFeatures/>
        <FeaturesComparison/>
        <Form/>
    </div>
  )
}

export default SoundboxPage