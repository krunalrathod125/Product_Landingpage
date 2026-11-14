import React, { useEffect } from "react";
import { FiUser, FiCalendar, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: "swarnim-agarbatti-blog",
      title: "Natural Gugal Agarbatti and Swarnim Premium Incense Divine Temple Fragrance Pure Fragrance Divine Feel for Daily Pooja",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Swarnim Premium Incense_ Divine Temple Fragrance.webp",
      date: "October 2026",
      description:
        "Discover Swarnim Premium Incense and authentic Natural Gugal Agarbatti. Handcrafted with 100 percent natural botanical ingredients and zero charcoal for a slow temple burn. Calms mind and brings long lasting fragrance to daily pooja.",
      content: `
    <p><strong>Awaken Divine Temple Fragrance with Swarnim Premium Agarbatti and Natural Gugal Agarbatti</strong></p>
    <p><strong>Swarnim Premium Incense</strong> is created to bring the authentic <strong>Divine Temple Fragrance</strong> and <strong>Pure Fragrance Divine Feel</strong> directly into your sacred prayer sanctuary. Handcrafted following ancient Ayurvedic aromatic principles, each stick is free from toxic charcoal, dipping chemicals, or synthetic fillers.</p>
    
    <h3>Why Swarnim Premium Incense and Natural Gugal Agarbatti Are Loved Across Indian Homes:</h3>
    <ul>
      <li><strong>Pure Fragrance Divine Feel:</strong> Infused with sacred temple florals, therapeutic botanical oils, and golden tree resins that elevate your spiritual aura.</li>
      <li><strong>100 Percent Natural Botanical Ingredients and Zero Charcoal:</strong> A clean slow temple burn with soothing white smoke that releases pure aroma without harmful black soot or throat irritation.</li>
      <li><strong>Calms Mind and Fosters Meditation:</strong> Formulated to reduce everyday mental agitation and induce calm focused stillness for morning prayer, evening Aarti, and deep meditation.</li>
      <li><strong>Slow Temple Burn and Long Lasting Fragrance:</strong> Each artisanal stick burns steadily for 45 to 60 minutes, leaving a lingering auspicious sillage that refreshes the whole home for hours.</li>
      <li><strong>Perfect for Daily Pooja and Sacred Rituals:</strong> Welcomes prosperity, positive energy, and peace into family living spaces.</li>
    </ul>

    <h3>How to Burn for Maximum Temple Sanctity:</h3>
    <p>Place Swarnim Agarbatti or Natural Gugal Agarbatti in a brass or stone incense stand in the Northeast corner of your prayer room. Light the tip until glowing, fan out the flame, and chant your chosen mantras as the soothing botanical fragrance unfolds.</p>
      `,
    },
    {
      id: "kasturi-agarbatti-blog",
      title: "Kasturi Whir Musk Temple Incense and Natural Gugal Agarbatti Pure Fragrance for a Divine Experience Spiritual Calm",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Kasturi Whir Musk Temple Incense Banner.webp",
      date: "October 2026",
      description:
        "Experience Kasturi Whir Musk Temple Incense and pure Natural Gugal Agarbatti for a divine experience. Deep warm musk and amber notes, zero charcoal, long lasting fragrance for meditation.",
      content: `
    <p><strong>Experience the Sacred Warmth of Kasturi Whir Musk Temple Incense and Natural Gugal Agarbatti</strong></p>
    <p><strong>Kasturi Whir Musk Temple Incense</strong> is formulated to deliver a <strong>Pure Fragrance for a Divine Experience</strong>. Revered for centuries in traditional Indian rituals, authentic Vedic musk creates a grounded, deeply comforting, and sacred atmosphere that anchors the mind and spirit.</p>
    
    <h3>Key Benefits of Kasturi Whir Musk Incense:</h3>
    <ul>
      <li><strong>Deep Warm Musk and Amber Aroma:</strong> Distinctive rich Vedic musk fragrance that envelops your pooja room in spiritual warmth and serene temple dignity.</li>
      <li><strong>Pure Fragrance for a Divine Experience:</strong> Creates an enchanting sensory haven for deep dhyana, mantra japa, and evening contemplation.</li>
      <li><strong>100 Percent Natural Ingredients and Zero Charcoal:</strong> Handcrafted with natural plant gums, herbal powders, and essential musk notes without synthetic chemical fragrances.</li>
      <li><strong>Long Lasting Fragrance:</strong> Slow consistent burn that leaves a rich grounding sillage in your room long after the flame has gone out.</li>
      <li><strong>Dispels Stress and Calms Mind:</strong> Eases nervous tension, stabilizes erratic energy, and encourages tranquil restorative focus.</li>
    </ul>

    <h3>Recommended Usage:</h3>
    <p>Light a stick during twilight Sandhya Aarti or before yogic meditation. Keep in an upright incense holder to allow the deep warm musk aroma to gently circulate throughout your living space alongside Natural Gugal Agarbatti.</p>
      `,
    },
    {
      id: "ponds-agarbatti-blog",
      title: "Ponds Premium Incense Temple Garden and Natural Gugal Agarbatti Fresh Calming Floral Water Lily and Morning Flora",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Ponds Premium Incense Temple Garden Banner.webp",
      date: "October 2026",
      description:
        "Immerse in Ponds Premium Incense Temple Garden and Natural Gugal Agarbatti. Refreshing water lily and morning flora that creates a peaceful atmosphere, calms the mind, with long lasting fragrance.",
      content: `
    <p><strong>Step into a Serene Temple Garden with Ponds Premium Incense and Natural Gugal Agarbatti</strong></p>
    <p><strong>Ponds Premium Incense Temple Garden</strong> captures the fresh cooling blossom notes of sacred water lilies and dewy morning flora. Crafted to <strong>Create a Peaceful Atmosphere</strong>, it delivers a <strong>Pure Fragrance Divine Feel</strong> that revitalizes weary minds and fills every corner with soothing floral grace.</p>

    <h3>Why Ponds Premium Incense Elevates Every Room:</h3>
    <ul>
      <li><strong>Fresh Calming Floral Bouquet:</strong> Pure water lily and morning botanical blossoms that refresh indoor room air and dissipate stagnant odors naturally.</li>
      <li><strong>Creates a Peaceful Atmosphere:</strong> Ideal for living rooms, study spaces, prayer altars, and home entryways to greet family and guests with tranquility.</li>
      <li><strong>100 Percent Charcoal Free Natural Incense:</strong> Formulated with natural botanical binders for smooth gentle smoke that breathes easily without nasal or eye stinging.</li>
      <li><strong>Long Lasting Fragrance Sillage:</strong> Delicate perfume notes permeate throughout the house, keeping your home delightfully fragrant for hours.</li>
      <li><strong>Calms Mind and Emotional Balance:</strong> Excellent for evening relaxation, reading, and gentle mindfulness after long work hours.</li>
    </ul>

    <h3>Best Sacred Uses:</h3>
    <p>Burn Ponds Agarbatti in the morning to start your day with fresh positive vibrations, or in the evening alongside Natural Gugal Agarbatti to release daily stress and invite tranquil domestic harmony.</p>
      `,
    },
    {
      id: "gugal-agarbatti-blog",
      title: "Natural Gugal Agarbatti Divine Fragrance for a Peaceful Home and Sacred Havan Purification",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Premium Natural Gugal Agarbatti Banner.webp",
      date: "October 2026",
      description:
        "Premium Natural Gugal Agarbatti divine fragrance for a peaceful home. Handcrafted with Gir cow dung, pure cow ghee, Bhimseni camphor, and authentic Guggal resin for sacred havan purification.",
      content: `
    <p><strong>Ancient Havan Purification with Premium Natural Gugal Agarbatti</strong></p>
    <p><strong>Natural Gugal Agarbatti</strong> brings you a <strong>Divine Fragrance for a Peaceful Home</strong>. Honoring the timeless science of Vedic Yajnas, this <strong>Traditional Indian Incense</strong> is handmade with authentic Guggal resin, sacred Gir cow dung, pure cow ghee, natural Bhimseni camphor, and rare forest botanicals to provide sacred havan purification in every stick.</p>

    <h3>Spiritual and Environmental Benefits:</h3>
    <ul>
      <li><strong>Sacred Havan Purification:</strong> Emulates the sanctifying power of a Vedic fire ritual, purifying atmospheric air and destroying airborne impurities.</li>
      <li><strong>Dispels Negative Energy:</strong> Pure Guggal and natural camphor neutralize negative Vastu vibrations and fill your home with protective divine grace.</li>
      <li><strong>Gir Cow Dung and Pure Ghee Base:</strong> Authentic organic base that burns cleanly without toxic chemical binders, supporting Vedic cow sanctuary preservation.</li>
      <li><strong>Chemical Free and Long Lasting:</strong> 100 percent natural, slow smouldering formulation delivering an authentic temple aroma that lingers for hours.</li>
      <li><strong>Divine Fragrance for a Peaceful Home:</strong> Perfect for morning pooja, evening Sandhya aarti, and creating an undisturbed sanctuary for your family.</li>
    </ul>

    <p>Bring authentic sacred havan blessings and long lasting spiritual harmony to your household with NilkanthDham Natural Gugal Agarbatti.</p>
      `,
    },
    {
      id: "kewda-agarbatti-blog",
      title: "Premium Kewda Incense and Natural Gugal Agarbatti Experience the Divine Fragrance of Kewda for a Peaceful Atmosphere",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Premium Kewda Incense Banner.webp",
      date: "October 2026",
      description:
        "Experience the divine fragrance of Kewda and Natural Gugal Agarbatti with Premium Kewda Incense. A sacred aroma for every ritual with sweet exotic Pandanus floral scent that creates a peaceful atmosphere.",
      content: `
    <p><strong>Experience the Divine Fragrance of Kewda and Natural Gugal Agarbatti</strong></p>
    <p><strong>Premium Kewda Incense</strong> lets you <strong>Experience the Divine Fragrance of Kewda</strong> in its most sacred and authentic form. Known as <strong>A Sacred Aroma for Every Ritual</strong>, this exotic Pandanus blossom incense creates a joyful peaceful atmosphere that delights the senses and inspires pure bhakti.</p>

    <h3>Why Premium Kewda Incense Is Indias Celebratory Choice:</h3>
    <ul>
      <li><strong>Sweet and Exotic Pandanus Floral Scent:</strong> Authentic Kewra flower distillate releasing an intoxicating sweet floral bouquet.</li>
      <li><strong>A Sacred Aroma for Every Ritual:</strong> Revered in Lord Shiva worship, Navratri, Diwali, Abhishekams, and special festive poojas.</li>
      <li><strong>Creates a Peaceful Atmosphere:</strong> Uplifts gloomy spirits, dissolves anxiety, and fills living rooms with celebratory joy.</li>
      <li><strong>100 Percent Natural Ingredients:</strong> Handcrafted with natural wood powders, plant resin binders, and zero synthetic chemical irritants.</li>
      <li><strong>Long Lasting Fragrance:</strong> Highly concentrated natural floral oils ensure that the sweet honeyed Kewda perfume lingers gracefully throughout the day.</li>
    </ul>

    <h3>Festive and Daily Rituals:</h3>
    <p>Light Kewda Agarbatti and Natural Gugal Agarbatti during special festivals, family gatherings, and morning worship to bring divine auspiciousness, cheerful energy, and an unforgettable temple fragrance to your home.</p>
      `,
    },
    {
      id: "sapt-rushi-agarbatti-blog",
      title: "Sapta Rishi Incense and Natural Gugal Agarbatti A Divine Fragrance for a Peaceful Life and Deep Dhyana Meditation",
      author: "Divine Fragrance Expert",
      image: "/Banner-1 Sapta Rishi Incense_ Divine Fragrance.webp",
      date: "October 2026",
      description:
        "Sapta Rishi Incense and Natural Gugal Agarbatti a divine fragrance for a peaceful life. Formulated with seven sacred Ayurvedic herbs honoring the ancient Vedic sages for deep dhyana, yoga, and slow temple burn.",
      content: `
    <p><strong>Ancient Wisdom of the Seven Sages: A Divine Fragrance for a Peaceful Life</strong></p>
    <p><strong>Sapta Rishi Incense</strong> brings you <strong>A Divine Fragrance for a Peaceful Life</strong>. Inspired by the revered Sapta Rishis, the Seven Ancient Sages of Vedic wisdom, this master incense stick unites seven sacred Ayurvedic herbs, precious woods, and purifying Himalayan resins to elevate conscious awareness and cultivate deep spiritual stillness.</p>

    <h3>Sacred Meditative and Spiritual Qualities:</h3>
    <ul>
      <li><strong>Seven Sacred Vedic Herbs:</strong> An esoteric blend of seven revered Ayurvedic botanicals that awaken mental clarity, deepen breathing, and calm the nervous system.</li>
      <li><strong>Deep Dhyana and Meditation:</strong> Specifically formulated to support yogic practices, pranayama, Vedic mantra chanting, and introspection.</li>
      <li><strong>Slow Temple Burn:</strong> Extra dense artisanal stick that smoulders slowly and smoothly with steady temple smoke.</li>
      <li><strong>100 Percent Natural and Charcoal Free:</strong> Zero toxic charcoal, chemical burning agents, or synthetic perfumes. Pure botanical purity.</li>
      <li><strong>A Divine Fragrance for a Peaceful Life:</strong> Fills the room with a majestic ancient Himalayan hermitage aroma that protects the home aura and inspires lifelong peace.</li>
    </ul>

    <h3>How to Integrate into Daily Sadhana:</h3>
    <p>Light Sapta Rishi Agarbatti alongside Natural Gugal Agarbatti before sitting for morning meditation or evening mantra chanting. Take several deep breaths as the seven sacred herbs center your mind and awaken inner peace.</p>
      `,
    },
  ];

  // Duplicate blogs to ensure seamless infinite loop without any stutter or reverse scrolling
  const sliderBlogs = [...blogs, ...blogs];

  const BlogCard = ({ blog }) => (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:border-[#b82329]/50 transition-all duration-300 flex flex-col h-full border border-[#e6cfab]">
      <div className="relative overflow-hidden aspect-[16/9] bg-amber-950">
        <img
          src={blog.image}
          alt={`${blog.title} Divine Fragrance Premium Agarbatti`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-[#9c6a1e] mb-2 text-xs sm:text-sm font-medium">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <FiUser className="mr-1 text-[#b82329]" />
              <span className="text-[#382013]">{blog.author}</span>
            </div>
          </div>

          <h3 className="font-1 text-base sm:text-lg md:text-xl font-bold mb-2 text-[#382013] group-hover:text-[#b82329] transition-colors line-clamp-2">
            {blog.title}
          </h3>

          <p className="font-2 text-[#5c4738] mb-4 text-xs sm:text-sm md:text-base line-clamp-3 leading-relaxed">
            {blog.description}
          </p>
        </div>

        <Link
          to={`/blog/${blog.id}`}
          state={{ blog }}
          className="inline-flex items-center text-[#b82329] font-semibold hover:text-[#991b1f] transition-colors pt-2 text-sm"
        >
          See Full Article <FiArrowRight className="ml-2 w-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <section id="Blog-section" className="py-12 px-4 sm:px-6 md:px-8 bg-[#fbf8f2]">
      <style>{`
        #Blog-section .swiper {
          padding-top: 8px !important;
          padding-bottom: 56px !important;
          position: relative !important;
        }
        #Blog-section .swiper-pagination {
          position: absolute !important;
          bottom: 12px !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          z-index: 20 !important;
          margin: 0 auto !important;
        }
        #Blog-section .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d49b35 !important;
          opacity: 0.45 !important;
          border-radius: 9999px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          margin: 0 !important;
          cursor: pointer !important;
        }
        #Blog-section .swiper-pagination-bullet:hover {
          opacity: 0.85 !important;
          transform: scale(1.15) !important;
        }
        #Blog-section .swiper-pagination-bullet-active {
          background: #b82329 !important;
          opacity: 1 !important;
          width: 28px !important;
          height: 10px !important;
          border-radius: 9999px !important;
        }
      `}</style>

      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 px-2 sm:px-0 gap-4">
          <div>
            <h2 className="font-1 text-3xl md:text-4xl font-bold text-[#382013] text-center sm:text-left">
              Read Our Natural Gugal Agarbatti and Vedic Incense Articles
            </h2>
            <p className="text-[#5c4738] text-sm mt-1 max-w-2xl">
              Natural Gugal Agarbatti Pure Fragrance Divine Feel 100 Percent Natural Botanical Ingredients Long Lasting Fragrance
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              className="blog-prev-btn w-10 h-10 rounded-full border-2 border-[#e6cfab] text-[#382013] hover:bg-[#b82329] hover:border-[#b82329] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous Agarbatti Blog"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="blog-next-btn w-10 h-10 rounded-full border-2 border-[#e6cfab] text-[#382013] hover:bg-[#b82329] hover:border-[#b82329] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next Agarbatti Blog"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auto-scrolling continuous loop carousel - strictly forward, no reverse scrolling */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".blog-prev-btn";
              swiper.params.navigation.nextEl = ".blog-next-btn";
            }}
            navigation={{
              prevEl: ".blog-prev-btn",
              nextEl: ".blog-next-btn",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 22,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
                centeredSlides: false,
              },
            }}
            className="w-full !pb-14"
          >
            {blogs.map((blog, idx) => (
              <SwiperSlide key={`${blog.id}-${idx}`} className="h-auto flex justify-center">
                <div className="w-full max-w-sm sm:max-w-none mx-auto h-full flex flex-col">
                  <BlogCard blog={blog} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
