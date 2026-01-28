// Định nghĩa kiểu dữ liệu cho Quote
export interface Quote {
  text: string;
  author?: string;
}

// 25 Câu chúc Good Morning (GM)
export const GM_QUOTES: Quote[] = [
  { text: "Rise and shine! Today is full of possibilities." },
  { text: "Good morning! Make today amazing." },
  { text: "Wake up with determination, go to bed with satisfaction." },
  { text: "Every morning is a chance at a new day." },
  { text: "The sun is up, time to shine!" },
  { text: "Good morning! Chase your dreams today." },
  { text: "New day, new opportunities, new blessings." },
  { text: "Morning coffee and positive vibes only." },
  { text: "Today is a good day to have a good day." },
  { text: "Wake up and be awesome!" },
  { text: "Good morning! Your potential is endless." },
  { text: "The early bird catches the worm." },
  { text: "Start your day with a grateful heart." },
  { text: "Good morning! Believe in yourself." },
  { text: "Today is your canvas, paint it beautiful." },
  { text: "Morning sunshine brings new hope." },
  { text: "Good morning! Time to make magic happen." },
  { text: "Embrace the day with open arms." },
  { text: "Good morning! You got this!" },
  { text: "A new day means new strength and new thoughts." },
  { text: "Good morning! Stay positive, work hard." },
  { text: "The morning was full of sunlight and hope." },
  { text: "Good morning! Make it count." },
  { text: "Today is a perfect day to start living your dreams." },
  { text: "Good morning! Spread kindness like confetti." }
];

// 25 Câu chúc Good Night (GN)
export const GN_QUOTES: Quote[] = [
  { text: "Good night! Dream big, sleep tight." },
  { text: "May your dreams be as sweet as you are." },
  { text: "Rest well, tomorrow is another adventure." },
  { text: "Good night! Let the stars guide your dreams." },
  { text: "Sleep is the best meditation." },
  { text: "Good night! Recharge for tomorrow's greatness." },
  { text: "Close your eyes and drift away to dreamland." },
  { text: "Good night! May peace be with you." },
  { text: "Sweet dreams and peaceful sleep." },
  { text: "Good night! Tomorrow is a new beginning." },
  { text: "Rest your mind, heal your soul." },
  { text: "Good night! The best is yet to come." },
  { text: "Sleep tight, wake up bright." },
  { text: "Good night! Let go of today's worries." },
  { text: "Dream big dreams tonight." },
  { text: "Good night! You deserve a peaceful rest." },
  { text: "The night is here, time to unwind." },
  { text: "Good night! See you in your dreams." },
  { text: "Rest well, warrior. Tomorrow awaits." },
  { text: "Good night! May your sleep be deep and peaceful." },
  { text: "Close your eyes and find your happy place." },
  { text: "Good night! Stars are shining just for you." },
  { text: "Sweet dreams are made of moments like these." },
  { text: "Good night! Gratitude for today, hope for tomorrow." },
  { text: "Sleep peacefully, dream beautifully." }
];

// GIẢI PHÁP TẠM THỜI: Dùng Unsplash (public CDN) để test
// Sau khi confirm hoạt động, bạn có thể upload ảnh của mình lên Cloudinary hoặc ImgBB

// 10 Links hình ảnh meme Good Morning 
export const GM_MEMES: string[] = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop", // Coffee
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=600&fit=crop", // Sunrise
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // Mountains
  "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=600&fit=crop", // Morning sky
  "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop", // Sunrise beach
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop", // Morning coffee 2
  "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800&h=600&fit=crop", // Sunrise golden
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=800&h=600&fit=crop", // Dawn
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", // Lake morning
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop"  // Morning city
];

// 10 Links hình ảnh meme Good Night
export const GN_MEMES: string[] = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop", // Night stars
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // Night mountains
  "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800&h=600&fit=crop", // Moon
  "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=800&h=600&fit=crop", // Night sky
  "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&h=600&fit=crop", // Night city
  "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&h=600&fit=crop", // Stars field
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=600&fit=crop", // Milky way
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=600&fit=crop", // Aurora
  "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800&h=600&fit=crop", // Sunset to night
  "https://images.unsplash.com/photo-1509993498131-0e5f57c1b42b?w=800&h=600&fit=crop"  // Moon close
];
