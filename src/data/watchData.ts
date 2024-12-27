export interface WatchSize {
  id: string
  name: string
  description: string
}

export interface WatchCase {
  id: string
  name: string
  price: number
  image: string
  series?: string
  materials?: string[]
  colors?: string[]
}

export interface WatchBand {
  id: string
  name: string
  type: string
  price: number
  image: string
  colors?: string[]
}

export interface WatchCollection {
  id: string
  name: string
  description: string
  basePrice: number
}

export const WATCH_SIZES: WatchSize[] = [
  {
    id: '41mm',
    name: '41mm',
    description: 'The smaller size that fits most wrists',
  },
  {
    id: '45mm',
    name: '45mm',
    description: 'The larger size with more screen space',
  },
]

export const WATCH_CASES: WatchCase[] = [
  {
    id: 'aluminum-midnight',
    name: 'Aluminum Midnight',
    price: 399,
    image: '/images/watches/1.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Aluminum'],
    colors: ['Midnight']
  },
  {
    id: 'aluminum-starlight',
    name: 'Aluminum Starlight',
    price: 399,
    image: '/images/watches/2.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Aluminum'],
    colors: ['Starlight']
  },
  {
    id: 'aluminum-silver',
    name: 'Aluminum Silver',
    price: 399,
    image: '/images/watches/3.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Aluminum'],
    colors: ['Silver']
  },
  {
    id: 'stainless-gold',
    name: 'Stainless Steel Gold',
    price: 699,
    image: '/images/watches/4.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Stainless Steel'],
    colors: ['Gold']
  },
  {
    id: 'stainless-graphite',
    name: 'Stainless Steel Graphite',
    price: 699,
    image: '/images/watches/5.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Stainless Steel'],
    colors: ['Graphite']
  },
  {
    id: 'titanium-natural',
    name: 'Titanium Natural',
    price: 799,
    image: '/images/watches/6.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Titanium'],
    colors: ['Natural']
  },
  {
    id: 'titanium-black',
    name: 'Titanium Black',
    price: 799,
    image: '/images/watches/7.jpg',
    series: 'Apple Watch Series 10',
    materials: ['Titanium'],
    colors: ['Black']
  }
]

export const WATCH_BANDS: WatchBand[] = [
  {
    id: 'sport-band-midnight',
    name: 'Sport Band Midnight',
    type: 'Sport Band',
    price: 49,
    image: '/images/watches/1.jpg',
    colors: ['Midnight']
  },
  {
    id: 'sport-band-starlight',
    name: 'Sport Band Starlight',
    type: 'Sport Band',
    price: 49,
    image: '/images/watches/2.jpg',
    colors: ['Starlight']
  },
  {
    id: 'sport-band-silver',
    name: 'Sport Band Silver',
    type: 'Sport Band',
    price: 49,
    image: '/images/watches/3.jpg',
    colors: ['Silver']
  },
  {
    id: 'sport-loop-gold',
    name: 'Sport Loop Gold',
    type: 'Sport Loop',
    price: 49,
    image: '/images/watches/4.jpg',
    colors: ['Gold']
  },
  {
    id: 'sport-loop-graphite',
    name: 'Sport Loop Graphite',
    type: 'Sport Loop',
    price: 49,
    image: '/images/watches/5.jpg',
    colors: ['Graphite']
  },
  {
    id: 'braided-loop-natural',
    name: 'Braided Solo Loop Natural',
    type: 'Braided Solo Loop',
    price: 99,
    image: '/images/watches/6.jpg',
    colors: ['Natural']
  },
  {
    id: 'braided-loop-black',
    name: 'Braided Solo Loop Black',
    type: 'Braided Solo Loop',
    price: 99,
    image: '/images/watches/7.jpg',
    colors: ['Black']
  }
]

export const WATCH_COLLECTIONS: WatchCollection[] = [
  {
    id: 'series-10',
    name: 'Apple Watch Series 10',
    description: 'Latest generation with advanced health monitoring',
    basePrice: 399,
  },
  {
    id: 'hermes',
    name: 'Apple Watch Hermès',
    description: 'Luxury fashion meets innovation',
    basePrice: 1299,
  },
  {
    id: 'ultra',
    name: 'Apple Watch Ultra',
    description: 'The most rugged and capable Apple Watch',
    basePrice: 799,
  },
]
