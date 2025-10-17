'use client';
import { useEffect, useState } from 'react';

export default function ShareButtons({ title, customUrl }: { title?: string; customUrl?: string }) {
  const [postUrl, setPostUrl] = useState('');
  const [postTitle, setPostTitle] = useState('');

  useEffect(() => {
    const url = customUrl ?? window.location.href;
    const t = title ?? document.title;
    setPostUrl(encodeURIComponent(url));
    setPostTitle(encodeURIComponent(t));
  }, [customUrl, title]);

  const openShare = (url: string) => window.open(url, '_blank');
  const copy = async () => {
    await navigator.clipboard.writeText(decodeURIComponent(postUrl));
    alert('✅ Link copied to clipboard!');
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <button onClick={() => openShare(`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${postTitle}`)} className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">LinkedIn</button>
      <button onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`)} className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Facebook</button>
      <button onClick={() => { copy(); openShare('https://medium.com/new-story'); }} className="px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Medium</button>
      <button onClick={() => { copy(); openShare('https://www.kitab.exchange'); }} className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Kitab Exchange</button>
      <button onClick={copy} className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Copy Link</button>
    </div>
  );
}