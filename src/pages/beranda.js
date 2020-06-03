import React from 'react'
import {NavigationBar} from '../components/navbar'
import {Footer} from '../components/footer'
import FeaturedProgram from '../components/featuredprogram'
import BannerSlider from '../components/banner'

export const Beranda = () => (
    <React.Fragment>
    <NavigationBar />
    <BannerSlider />
    <FeaturedProgram />
    <Footer />
    </React.Fragment>

)


