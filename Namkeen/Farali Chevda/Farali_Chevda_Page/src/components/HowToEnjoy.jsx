import { Sparkles } from 'lucide-react';

export default function HowToEnjoy() {

  const rituals = [
    {
      step: '01',
      title: 'Sacred Upvas & Ekadashi Vrat',
      gujarati: 'પવિત્ર એકાદશી અને ઉપવાસ સ્પેશિયલ',
      occasion: 'Holy Fasting Days',
      pairing: 'Fresh Chilled Curd (Dahi) or Rajgira Puri',
      description:
        'The quintessential Satvik fast nourishment! High in natural banana energy, crunchy roasted peanuts, and seasoned with pure Sendha Namak to keep you revitalized.',
      image: '/images/farali/tikha/tikha-2.webp',
    },
    {
      step: '02',
      title: 'Daily Masala Chai Companion',
      gujarati: 'ગરમા-ગરમ કટિંગ ચા સાથે',
      occasion: 'The 4 PM Tea Ritual',
      pairing: 'Steaming Ginger-Cardamom Masala Chai',
      description:
        'A bowl of crunchy Tikha or Meetha Farali Chivda paired with piping hot tea. The nutty roasted peanuts and crisp banana batons cut through the tea for pure bliss.',
      image: '/images/farali/meetha/meetha-2.webp',
    },
    {
      step: '03',
      title: 'Festive Prasad & Farsan Platter',
      gujarati: 'દિવાળી અને નવરાત્રી ઉત્સવ થાળી',
      occasion: 'Festive Celebrations',
      pairing: 'Poicha Sweets, Kesar Peda & Dry Fruits',
      description:
        'Elevate your Diwali, Janmashtami, and Navratri sweet-farsan thali with the contrasting textures of sweet raisins, peanuts, and crisp spiced banana sticks.',
      image: '/images/farali/tikha/tikha-4.webp',
    },
    {
      step: '04',
      title: 'Travel & Office Energy Crunch',
      gujarati: 'મુસાફરી અને ઓફિસ હેલ્ધી સ્નેકિંગ',
      occasion: 'Sustained Energy Crunch',
      pairing: 'Fresh Coconut Water or Buttermilk (Chhas)',
      description:
        'Nutritious, clean snacking on the go! Resealable foil pouch keeps the banana chivda completely crisp during road trips, office hours, and pilgrimages.',
      image: '/images/farali/meetha/meetha-4.webp',
    },
  ];

  return (
    <section id="how-to-enjoy" className="py-10 sm:py-14 md:py-16 bg-[#FFFDF8] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3DF] border border-[#E8DCC8] text-xs font-bold text-[#8B4513] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A323]" />
            Culinary Traditions &amp; Moments
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            How Gujarat Truly Enjoys <br />
            <span className="text-[#F28C28]">Kela Farali Chivda</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            Four timeless culinary rituals celebrating the sweet and spicy crunch of Bhagvat Prasadam Farali Namkeen.
          </p>
        </div>

        {/* 4 Lifestyle Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {rituals.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-[#E8DCC8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8E9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    {item.occasion}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-left">
                  <div className="text-[11px] font-bold text-[#A8681E] mb-1">
                    {item.gujarati}
                  </div>
                  <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A5F4F] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Pairing Footer */}
              <div className="p-4 sm:p-5 pt-0 border-t border-[#E8DCC8]/60 mt-auto text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C6219] block mb-0.5">
                  Recommended Pairing:
                </span>
                <span className="text-xs font-bold text-[#3B2418]">
                  {item.pairing}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
