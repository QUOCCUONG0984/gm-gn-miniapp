'use client';

import { useState, useEffect, useCallback } from 'react';
import sdk from '@farcaster/miniapp-sdk';
import { GM_QUOTES, GN_QUOTES, GM_MEMES, GN_MEMES } from './data';

export default function Home() {
  const [mode, setMode] = useState<'GM' | 'GN'>('GM');
  const [quote, setQuote] = useState<string>("");
  const [meme, setMeme] = useState<string>("");
  
  // SỬA LỖI: Thêm tên biến isSDKLoaded
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  // Hàm chọn ngẫu nhiên
  const randomizeContent = useCallback((currentMode: 'GM' | 'GN') => {
    const quotes = currentMode === 'GM' ? GM_QUOTES : GN_QUOTES;
    const memes = currentMode === 'GM' ? GM_MEMES : GN_MEMES;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].text;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    setQuote(randomQuote);
    setMeme(randomMeme);
  }, []); // SỬA LỖI: Thêm dependency array

  // Khởi tạo SDK
  useEffect(() => {
    const init = async () => {
      randomizeContent('GM'); // Mặc định là GM
      try {
        await sdk.actions.ready(); // Báo cho Farcaster biết app đã sẵn sàng
        setIsSDKLoaded(true);
      } catch (err) {
        console.error("SDK init error (normal if running in browser):", err);
      }
    };
    init();
  }, [randomizeContent]);

  // Xử lý khi bấm nút chuyển chế độ
  const handleModeChange = (newMode: 'GM' | 'GN') => {
    setMode(newMode);
    randomizeContent(newMode);
  };

  // Xử lý khi bấm nút "Tạo" (Share)
  const handleCreateCast = async () => {
    if (!quote || !meme) return;
    
    try {
      // Gọi SDK để mở trình soạn thảo Cast
      await sdk.actions.composeCast({
        text: `${quote}\n\n#${mode} #${mode === 'GM' ? 'Morning' : 'Night'} via MyMiniApp`,
        embeds: [meme] // Đính kèm link ảnh meme
      });
    } catch (error) {
      console.error("Error composing cast:", error);
      alert("Please open this in Farcaster to post!");
    }
  };

  return (
    <main className={`flex flex-col h-screen w-full transition-colors duration-500 ${
      mode === 'GM' ? 'bg-orange-50' : 'bg-slate-900'
    }`}>
      
      {/* --- PHẦN TRÊN: Nút GM / GN Ngang hàng --- */}
      <div className="flex w-full p-4 gap-4 h-[15%] items-end shrink-0">
        <button
          onClick={() => handleModeChange('GM')}
          className={`flex-1 h-14 rounded-xl font-bold text-xl shadow-lg transition-transform active:scale-95 ${
            mode === 'GM' 
              ? 'bg-orange-500 text-white ring-4 ring-orange-200' 
              : 'bg-white text-gray-400'
          }`}
        >
          ☀️ GM
        </button>
        <button
          onClick={() => handleModeChange('GN')}
          className={`flex-1 h-14 rounded-xl font-bold text-xl shadow-lg transition-transform active:scale-95 ${
            mode === 'GN' 
              ? 'bg-indigo-600 text-white ring-4 ring-indigo-300' 
              : 'bg-white text-gray-400'
          }`}
        >
          🌙 GN
        </button>
      </div>

      {/* --- PHẦN GIỮA: Meme và Quote --- */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-y-auto">
        {/* Card chứa nội dung */}
        <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-2xl flex flex-col gap-4">
          
          {/* Hình ảnh Meme */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-200">
            {meme && (
              <img 
                src={meme} 
                alt="Daily Meme" 
                className="w-full h-full object-cover"
              />
            )}
            {/* Nút nhỏ để đổi meme khác mà không đổi chế độ */}
            <button 
              onClick={() => randomizeContent(mode)}
              className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full text-xs hover:bg-black/70"
            >
              🔄 Shuffle
            </button>
          </div>

          {/* Câu Quote */}
          <div className={`text-center font-medium font-serif italic p-2 ${
            mode === 'GM' ? 'text-gray-800' : 'text-gray-100'
          }`}>
            "{quote}"
          </div>
        </div>
      </div>

      {/* --- PHẦN DƯỚI: Nút Tạo --- */}
      <div className="h-[15%] w-full flex items-start justify-center p-4 bg-transparent shrink-0">
        <button
          onClick={handleCreateCast}
          className="w-full max-w-md py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          ✨ Tạo Cast
        </button>
      </div>
    </main>
  );
}
