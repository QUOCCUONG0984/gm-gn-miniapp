// app/data.ts

export interface Quote {
  id: number;
  text: string;
}

// 25 Câu chúc Good Morning (GM)
export const GM_QUOTES: Quote =;

// 25 Câu chúc Good Night (GN)
export const GN_QUOTES: Quote =;

// Để đảm bảo ứng dụng chạy ngay, tôi dùng API placeholder với keywords.
// Trong thực tế, bạn nên thay thế các URL này bằng link ảnh thật của bạn (Imgur, AWS S3, v.v.)
export const GM_MEMES = Array.from({ length: 25 }, (_, i) => 
  `https://api.memegen.link/images/custom/GM_Meme_Number_${i+1}/Have_a_great_day.png?background=https://source.unsplash.com/random/600x600/?morning,coffee&sig=${i}`
);

export const GN_MEMES = Array.from({ length: 25 }, (_, i) => 
  `https://api.memegen.link/images/custom/GN_Meme_Number_${i+1}/Sleep_Tight.png?background=https://source.unsplash.com/random/600x600/?night,sleep&sig=${i}`
);
