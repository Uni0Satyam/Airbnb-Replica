const sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...',
      filename: 'listingimage'
    },
    price: 1500,
    location: 'Malibu',
    country: 'United States',
    coordinates: { latitude: 34.0259, longitude: -118.7798 },
    category: ['TRENDING', 'AMAZING VIEWS', 'ICONIC CITIES'],
    __v: 2
  },
  {
    title: 'Modern Loft in Downtown',
    description: 'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
    image: {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?...',
      filename: 'listingimage'
    },
    price: 1200,
    location: 'New York City',
    country: 'United States',
    coordinates: { latitude: 40.7128, longitude: -74.0060 },
    category: ['TRENDING', 'ICONIC CITIES'],
    __v: 0
  },
  {
    title: 'Mountain Retreat',
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?...',
      filename: 'listingimage'
    },
    price: 1000,
    location: 'Aspen',
    country: 'United States',
    coordinates: { latitude: 39.1911, longitude: -106.8175 },
    category: ['AMAZING VIEWS', 'CAMPING'],
    __v: 1
  },
  {
    title: 'Historic Villa in Tuscany',
    description: 'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
    image: {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?...',
      filename: 'listingimage'
    },
    price: 2500,
    location: 'Florence',
    country: 'Italy',
    coordinates: { latitude: 43.7696, longitude: 11.2558 },
    category: ['CASTLES', 'AMAZING VIEWS'],
    __v: 1
  },
  {
    title: 'Secluded Treehouse Getaway',
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...',
      filename: 'listingimage'
    },
    price: 800,
    location: 'Portland',
    country: 'United States',
    coordinates: { latitude: 45.5051, longitude: -122.6750 },
    category: ['CAMPING', 'FARMS', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Beachfront Paradise',
    description: 'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
    image: {
      url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...',
      filename: 'listingimage'
    },
    price: 2000,
    location: 'Cancun',
    country: 'Mexico',
    coordinates: { latitude: 21.1619, longitude: -86.8515 },
    category: ['AMAZING POOLS', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Rustic Cabin by the Lake',
    description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
    image: {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...',
      filename: 'listingimage'
    },
    price: 900,
    location: 'Lake Tahoe',
    country: 'United States',
    coordinates: { latitude: 39.0968, longitude: -120.0324 },
    category: ['AMAZING VIEWS', 'CAMPING'],
    __v: 0
  },
  {
    title: 'Luxury Penthouse with City Views',
    description: 'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
    image: {
      url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...',
      filename: 'listingimage'
    },
    price: 3500,
    location: 'Los Angeles',
    country: 'United States',
    coordinates: { latitude: 34.0522, longitude: -118.2437 },
    category: ['TRENDING', 'ICONIC CITIES', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Ski-In/Ski-Out Chalet',
    description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
    image: {
      url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...',
      filename: 'listingimage'
    },
    price: 3000,
    location: 'Verbier',
    country: 'Switzerland',
    coordinates: { latitude: 46.0968, longitude: 7.2263 },
    category: ['ARCTIC', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Safari Lodge in the Serengeti',
    description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
    image: {
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...',
      filename: 'listingimage'
    },
    price: 4000,
    location: 'Serengeti National Park',
    country: 'Tanzania',
    coordinates: { latitude: -2.3333, longitude: 34.8333 },
    category: ['FARMS', 'CAMPING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Historic Canal House',
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...',
      filename: 'listingimage'
    },
    price: 1800,
    location: 'Amsterdam',
    country: 'Netherlands',
    coordinates: { latitude: 52.3676, longitude: 4.9041 },
    category: ['ICONIC CITIES', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Private Island Retreat',
    description: 'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
    image: {
      url: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?...',
      filename: 'listingimage'
    },
    price: 10000,
    location: 'Fiji',
    country: 'Fiji',
    coordinates: { latitude: -17.7134, longitude: 178.0650 },
    category: ['AMAZING VIEWS', 'AMAZING POOLS'],
    __v: 0
  },
  {
    title: 'Charming Cottage in the Cotswolds',
    description: 'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
    image: {
      url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?...',
      filename: 'listingimage'
    },
    price: 1200,
    location: 'Cotswolds',
    country: 'United Kingdom',
    coordinates: { latitude: 51.8336, longitude: -1.9594 },
    category: ['TRENDING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Historic Brownstone in Boston',
    description: 'Step back in time in this elegant historic brownstone located in the heart of Boston.',
    image: {
      url: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?...',
      filename: 'listingimage'
    },
    price: 2200,
    location: 'Boston',
    country: 'United States',
    coordinates: { latitude: 42.3601, longitude: -71.0589 },
    category: ['ICONIC CITIES', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Beachfront Bungalow in Bali',
    description: 'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
    image: {
      url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?...',
      filename: 'listingimage'
    },
    price: 1800,
    location: 'Bali',
    country: 'Indonesia',
    coordinates: { latitude: -8.3405, longitude: 115.0920 },
    category: ['AMAZING POOLS', 'TRENDING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Mountain View Cabin in Banff',
    description: 'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
    image: {
      url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...',
      filename: 'listingimage'
    },
    price: 1500,
    location: 'Banff',
    country: 'Canada',
    coordinates: { latitude: 51.1784, longitude: -115.5708 },
    category: ['AMAZING VIEWS', 'CAMPING'],
    __v: 0
  },
  {
    title: 'Art Deco Apartment in Miami',
    description: 'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
    image: {
      url: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...',
      filename: 'listingimage'
    },
    price: 1600,
    location: 'Miami',
    country: 'United States',
    coordinates: { latitude: 25.7617, longitude: -80.1918 },
    category: ['ICONIC CITIES', 'TRENDING', 'AMAZING POOLS'],
    __v: 0
  },
  {
    title: 'Tropical Villa in Phuket',
    description: 'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
    image: {
      url: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...',
      filename: 'listingimage'
    },
    price: 3000,
    location: 'Phuket',
    country: 'Thailand',
    coordinates: { latitude: 7.8804, longitude: 98.3923 },
    category: ['AMAZING POOLS', 'AMAZING VIEWS', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Historic Castle in Scotland',
    description: 'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
    image: {
      url: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?...',
      filename: 'listingimage'
    },
    price: 4000,
    location: 'Scottish Highlands',
    country: 'United Kingdom',
    coordinates: { latitude: 57.0000, longitude: -4.0000 },
    category: ['CASTLES', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Desert Oasis in Dubai',
    description: 'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
    image: {
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?...',
      filename: 'listingimage'
    },
    price: 5000,
    location: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: { latitude: 25.2048, longitude: 55.2708 },
    category: ['TRENDING', 'AMAZING POOLS', 'ICONIC CITIES'],
    __v: 0
  },
  {
    title: 'Rustic Log Cabin in Montana',
    description: 'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
    image: {
      url: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 1100,
    location: 'Montana',
    country: 'United States',
    coordinates: { latitude: 46.8797, longitude: -110.3626 },
    category: ['CAMPING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Beachfront Villa in Greece',
    description: 'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
    image: {
      url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 2500,
    location: 'Mykonos',
    country: 'Greece',
    coordinates: { latitude: 37.4467, longitude: 25.3289 },
    category: ['AMAZING VIEWS', 'AMAZING POOLS', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Eco-Friendly Treehouse Retreat',
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      url: 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 750,
    location: 'Costa Rica',
    country: 'Costa Rica',
    coordinates: { latitude: 9.6302, longitude: -84.0833 },
    category: ['CAMPING', 'FARMS', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Historic Cottage in Charleston',
    description: 'Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.',
    image: {
      url: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 1600,
    location: 'Charleston',
    country: 'United States',
    coordinates: { latitude: 32.7765, longitude: -79.9311 },
    category: ['TRENDING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Modern Apartment in Tokyo',
    description: 'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
    image: {
      url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 2000,
    location: 'Tokyo',
    country: 'Japan',
    coordinates: { latitude: 35.682839, longitude: 139.759455 },
    category: ['ICONIC CITIES', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Lakefront Cabin in New Hampshire',
    description: 'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
    image: {
      url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 1200,
    location: 'New Hampshire',
    country: 'United States',
    coordinates: { latitude: 43.68500, longitude: -71.57722 },
    category: ['CAMPING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'Luxury Villa in the Maldives',
    description: 'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
    image: {
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 6000,
    location: 'Maldives',
    country: 'Maldives',
    coordinates: { latitude: 3.250000, longitude: 73.000000 },
    category: ['AMAZING POOLS', 'AMAZING VIEWS', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Ski Chalet in Aspen',
    description: 'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
    image: {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 4000,
    location: 'Aspen',
    country: 'United States',
    coordinates: { latitude: 39.191097, longitude: -106.817535 },
    category: ['ARCTIC', 'AMAZING VIEWS', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Secluded Beach House in Costa Rica',
    description: 'Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.',
    image: {
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      filename: 'listingimage'
    },
    price: 1800,
    location: 'Costa Rica',
    country: 'Costa Rica',
    coordinates: { latitude: 9.6302, longitude: -84.0833 },
    category: ['AMAZING VIEWS', 'AMAZING POOLS', 'TRENDING'],
    __v: 0
  },
  {
    title: 'disney world - 2',
    description: 'Found your mickey here',
    image: {
      url: 'https://res.cloudinary.com/dbcmhzgab/image/upload/v1760894578/wanderlust_DEV/qtzux7ow00up73k6cphq.jpg',
      filename: 'wanderlust_DEV/qtzux7ow00up73k6cphq'
    },
    price: 4000,
    location: 'Florence',
    country: 'Ireland',
    coordinates: { latitude: 54.258, longitude: -7.755 },
    category: ['ICONIC CITIES', 'TRENDING'],
    __v: 1
  },
  {
    title: 'testing-location',
    description: 'Testing here',
    image: {
      url: 'https://res.cloudinary.com/dbcmhzgab/image/upload/v1760973141/wanderlust_DEV/gmwnny81zkaq3hlbnehy.jpg',
      filename: 'wanderlust_DEV/gmwnny81zkaq3hlbnehy'
    },
    price: 4120,
    location: 'Prayagraj',
    country: 'India',
    coordinates: { latitude: 25.4381302, longitude: 81.8338005 },
    category: ['TRENDING', 'AMAZING VIEWS'],
    __v: 0
  },
  {
    title: 'CyberPunk city',
    description: 'Sci-fi City of India',
    image: {
      url: 'https://res.cloudinary.com/dbcmhzgab/image/upload/v1760978619/wanderlust_DEV/axx0vccyha8puvx3nuhs.jpg',
      filename: 'wanderlust_DEV/axx0vccyha8puvx3nuhs'
    },
    price: 2000,
    location: 'Gurugram',
    country: 'India',
    coordinates: { latitude: 28.4646148, longitude: 77.0299194 },
    category: ['ICONIC CITIES', 'TRENDING'],
    __v: 0
  },
  {
    title: 'Testing category',
    description: 'alskjd',
    image: {
      url: 'https://res.cloudinary.com/dbcmhzgab/image/upload/v1761154016/wanderlust_DEV/csu01iair6lo8nyhfzzt.jpg',
      filename: 'wanderlust_DEV/csu01iair6lo8nyhfzzt'
    },
    price: 5200,
    location: 'Prayagraj',
    country: 'India',
    coordinates: { latitude: 25.4381302, longitude: 81.8338005 },
    category: ['TRENDING', 'AMAZING VIEWS', 'CASTLES', 'ARCTIC'],
    __v: 0
  },
];

module.exports = { data: sampleListings };