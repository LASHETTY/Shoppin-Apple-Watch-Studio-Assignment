'use client'

import Head from 'next/head'
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export default function SEO({
  title = 'Apple Watch Studio',
  description = 'Customize and design your perfect Apple Watch',
  keywords = 'Apple Watch, Watch Studio, Customization, Design',
  ogImage = '/images/og-image.jpg'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
    </Head>
  )
}
