export default function AnnouncementBar({
  text = "AUTHENTIC GUJARATI FARALI CHIVDA | KELA FARALI CHIVDA TIKHA & MEETHA | 100% SATVIK UPVAS SNACK | PURE ROCK SALT • ZERO PALM OIL | BHAGVAT PRASADAM"
}) {
  return (
    <div className="bg-[#B83220] text-white py-2 px-4 text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 overflow-hidden shadow-sm">
      <span className="truncate">{text}</span>
    </div>
  );
}
