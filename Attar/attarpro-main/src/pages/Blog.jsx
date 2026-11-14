import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

export const blogsData = [
  {
    id: 1,
    title: "Kesar Chandan – The Royal Blend of Warmth, Devotion & Elegance",
    author: "Sugandham",
    image: "/KESAR CHANDAN.webp",
    date: "November 11, 2025",
    description:
      "Immerse yourself in the golden harmony of saffron and sandalwood with Sugandham Kesar Chandan — a fragrance that radiates divine grace and royal purity.",
    content: `
    <p><strong>Experience the Royal Essence of Saffron and Sandalwood</strong></p>
    <p><strong>Kesar Chandan by Sugandham</strong> is a mesmerizing blend of sacred sandalwood and rich saffron — two timeless ingredients cherished in Indian tradition for their purity, warmth, and spiritual depth. This fragrance glows with the golden aura of devotion and luxury.</p>
    <p><em>A fragrance that balances calmness and confidence with every breath.</em></p>

    <h3>The Golden Harmony of Tradition</h3>
    <p><strong>Kesar Chandan</strong> opens with the warm, spicy sweetness of saffron, gracefully layered over the creamy richness of sandalwood. Together, they create a perfume that feels both sacred and sophisticated — ideal for pooja, festive wear, or elegant occasions.</p>

    <h3>Why Kesar Chandan is Truly Special</h3>
    <ul>
      <li><strong>🌸 Dual Essence of Purity</strong> – Saffron for divine radiance, sandalwood for inner peace.</li>
      <li><strong>🌿 Alcohol-Free & Skin-Friendly</strong> – Crafted for both worship and personal wear.</li>
      <li><strong>💎 Luxurious & Long-Lasting</strong> – A scent that lingers with royal smoothness throughout the day.</li>
      <li><strong>🪔 Perfect for Festive & Spiritual Moments</strong> – Balances sacred energy with regal aroma.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Pooja and temple visits</strong></li>
      <li><strong>Festivals, weddings, and rituals</strong></li>
      <li><strong>Everyday devotion</strong> and <strong>spiritual calm</strong></li>
      <li>Gifting to those who appreciate luxury rooted in culture</li>
    </ul>

    <p>Let <strong>Kesar Chandan</strong> surround you with an aura of divinity and sophistication — where warmth meets devotion.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Apply on <strong>wrist, neck, and behind ears</strong> for long-lasting fragrance.</li>
      <li>Spray on <strong>pooja cloths</strong> or <strong>sacred items</strong> for ritual use.</li>
      <li>Wear during <strong>festive mornings</strong> to begin your day with serenity and glow.</li>
    </ul>

    <h3>A Royal Scent for the Devoted Heart</h3>
    <p>At <strong>Sugandham</strong>, we crafted <strong>Kesar Chandan</strong> for those who value both spiritual connection and royal elegance. Every drop blends devotion with dignity — a tribute to India's timeless culture of fragrance.</p>

    <p>Feel the radiance of saffron, the peace of sandalwood — in every breath of <strong>Kesar Chandan</strong>.</p>
  `,
  },
  {
    id: 2,
    title: "Woody Oudh – The Essence of Strength, Depth & Timeless Luxury",
    author: "Sugandham",
    image: "/WOODY OUDH.webp",
    date: "November 11, 2025",
    description:
      "Discover the magnetic depth of agarwood in Sugandham Woody Oudh — a fragrance that defines confidence, charisma, and timeless sophistication.",
    content: `
    <p><strong>Step into the World of Deep Elegance</strong></p>
    <p><strong>Woody Oudh by Sugandham</strong> captures the bold richness of agarwood — one of the rarest and most luxurious ingredients in perfumery. This fragrance tells a story of strength, depth, and grace — a scent for those who carry quiet power.</p>
    <p><em>Where timeless luxury meets soulful depth.</em></p>

    <h3>The Art of Sophisticated Intensity</h3>
    <p><strong>Woody Oudh</strong> opens with rich woody accords, slowly unfolding into earthy warmth and subtle sweetness. It's a fragrance that evolves beautifully through the day — commanding yet comforting, elegant yet grounded.</p>

    <h3>Why Woody Oudh Captivates Every Sense</h3>
    <ul>
      <li><strong>🌲 Authentic Agarwood Essence</strong> – The heart of real oudh, known for its deep, mystical charm.</li>
      <li><strong>🔥 Long-Lasting & Luxurious</strong> – A few sprays are enough to make a statement that lasts all day.</li>
      <li><strong>💼 Perfect for Every Occasion</strong> – Ideal for evening wear, spiritual ceremonies, or formal gatherings.</li>
      <li><strong>🌿 Alcohol-Free & Skin-Safe</strong> – Gentle, pure, and suitable for daily wear.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Evening events</strong> or <strong>special occasions</strong></li>
      <li><strong>Spiritual ceremonies</strong> and meditative ambience</li>
      <li><strong>Gifting</strong> for those who value premium craftsmanship</li>
      <li><strong>Daily confidence boost</strong> with timeless depth</li>
    </ul>

    <p>Let <strong>Woody Oudh</strong> envelop you in a rich, warm aura that defines class, character, and charisma.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Spray lightly on <strong>pulse points</strong> – wrists, collar, or chest.</li>
      <li>Use during <strong>special occasions</strong> for a signature presence.</li>
      <li>Can also be used for <strong>religious rituals</strong> where oudh signifies purity.</li>
    </ul>

    <h3>A Timeless Tribute to Classic Fragrance</h3>
    <p><strong>Sugandham Woody Oudh</strong> is more than a perfume — it's an expression of legacy. Inspired by the royal traditions of oud, it's crafted for those who appreciate refinement beyond fashion.</p>
    <p>Bold. Mysterious. Eternal — that's <strong>Woody Oudh by Sugandham</strong>.</p>
  `,
  },
  {
    id: 3,
    title: "Red Rose – The Eternal Symbol of Love, Passion & Grace",
    author: "Sugandham",
    image: "/red rose.webp",
    date: "November 11, 2025",
    description:
      "Indulge in the timeless romance of Sugandham Red Rose — a perfume that celebrates love, purity, and the natural charm of blooming roses.",
    content: `
    <p><strong>Embrace the Classic Beauty of Roses</strong></p>
    <p><strong>Red Rose by Sugandham</strong> is a poetic expression of love and elegance. Inspired by freshly bloomed roses at dawn, it carries the sweetness of affection, the warmth of emotion, and the purity of devotion — all in one graceful bottle.</p>
    <p><em>A scent that speaks softly, yet leaves a lasting impression.</em></p>

    <h3>The Fragrance of Pure Romance</h3>
    <p><strong>Red Rose</strong> opens with dewy floral notes, enriched by a soft heart of rose petals and gentle musk. Its aroma feels like walking through a blooming garden — tender, elegant, and endlessly comforting.</p>

    <h3>Why Red Rose Captivates Hearts</h3>
    <ul>
      <li><strong>🌹 Real Rose Essence</strong> – Crafted from natural rose extracts for an authentic floral experience.</li>
      <li><strong>💖 Romantic & Uplifting</strong> – Perfect for expressing love, warmth, and elegance.</li>
      <li><strong>🌿 Alcohol-Free & Gentle</strong> – Suitable for all skin types and everyday use.</li>
      <li><strong>✨ Long-Lasting Freshness</strong> – Keeps you wrapped in a gentle floral aura all day long.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Everyday wear</strong> for women and men who love floral tones</li>
      <li><strong>Festive events</strong> and <strong>celebrations</strong></li>
      <li><strong>Gifting</strong> on special occasions or to loved ones</li>
      <li><strong>Spiritual ceremonies</strong> where rose fragrance is divine</li>
    </ul>

    <p>Let <strong>Red Rose</strong> awaken the fragrance of emotions — soft, pure, and everlasting.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Apply on <strong>pulse points</strong> – wrists, neck, and behind ears.</li>
      <li>Spray on <strong>fabric or scarf</strong> for a subtle lingering aroma.</li>
      <li>Use daily to carry the charm of blooming roses with you.</li>
    </ul>

    <h3>Where Elegance Meets Emotion</h3>
    <p>At <strong>Sugandham</strong>, we created <strong>Red Rose</strong> as a tribute to timeless love and divine beauty. Its fragrance reminds us that true elegance lies in simplicity — and that every drop of rose essence carries the power to touch hearts.</p>

    <p>Graceful. Romantic. Eternal — that's <strong>Red Rose by Sugandham</strong>.</p>
  `,
  },
];

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="Blog-section" className="py-12 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-1 text-3xl md:text-4xl font-bold mb-10 text-[#70470d] text-center md:text-left">
          Read Our Recent Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <div className="flex items-center justify-between text-[#70470d] mb-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-1 w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 w-4 h-4 text-[#70470d]" />
                      <span className="text-[#70470d]">{blog.author}</span>
                    </div>
                  </div>

                  <h3 className="font-1 text-lg md:text-xl font-semibold mb-3 text-[#70470d] line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="font-2 text-[#70470d] mb-4 text-sm md:text-base line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                <Link
                  to={`/blog/${blog.id}`}
                  state={{ blog }}
                  className="flex items-center text-[#70470d] font-medium hover:text-amber-800 transition-colors"
                >
                  See Full Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
