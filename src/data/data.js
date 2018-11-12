import moment from 'moment';

// Hardcode days for the sake of simplicity
// const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];


const days = [
  { value: 'Today', label: 'Today' },
  { value:  'Tomorrow', label: 'Tomorrow' },
  { value: moment().add(2, 'days').format('ddd, MMM D'), label: moment().add(2, 'days').format('ddd, MMM D') }
];


const times = [
  { value: '9:00 AM', label: '9:00 AM' },
  { value:  '11:10 AM', label: '11:10 AM' },
  { value: '12:10 AM', label: '12:10 AM' },
  { value: '1:10 PM', label: '1:10 PM' }

];

export const movies = [
  {
    brandName: 'La La Land',
    productImage: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    brandName: 'Paterson',
    productImage: 'https://i.imgur.com/pE0C9E0.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
  },
  {
    brandName: 'Jackie',
    productImage: 'https://i.imgur.com/VqUi1sw.jpg',
    genre: 'Drama/Biography',
    days,
    times,
  },
  {
    brandName: 'Lo and Behold Reveries ',
    productImage: 'https://i.imgur.com/s106X7S.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    brandName: '10 Cloverfield Lane',
    productImage: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    brandName: 'Birth of a Nation',
    productImage: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
    days,
    times,
  },
  {
    brandName: 'De Palma',
    productImage: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    brandName: 'Doctor Strange',
    productImage: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    brandName: 'Eddie the Eagle',
    productImage: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
    days,
    times,
  },
  {
    brandName: 'Pride and prejudice and zombies',
    productImage: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
    days,
    times,
  },
  {
    brandName: 'Finding Dory',
    productImage: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
  },
  {
    brandName: 'Green Room',
    productImage: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
  },
  {
    brandName: 'Kubo and the Two Strings',
    productImage: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    brandName: 'In a Valley of Violence',
    productImage: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    days,
    times,
  },
  {
    brandName: 'O.J.: Made in America',
    productImage: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    brandName: 'Rogue One: A Star Wars Story',
    productImage: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    days,
    times,
  },
  {
    brandName: 'Sing Street',
    productImage: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    brandName: 'Zoolander 2',
    productImage: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
  },
];