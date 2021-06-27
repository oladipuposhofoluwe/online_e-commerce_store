import React from 'react';
import Layout from './shared/Layout';
import Hero from './hero/Hero';
import MainsSection from './main-section/MainsSection';
import FeaturedCollection from './featured-collection/FeaturedCollection'; 


const Homepage = () => {
  return (
    <>
      <Layout>
        <Hero/>
        <MainsSection />
        <FeaturedCollection/>
      </Layout>
    </>
  )
}

export default Homepage
