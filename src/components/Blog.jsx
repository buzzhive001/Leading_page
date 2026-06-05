import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const posts = [
  { date: '20 July 2024', tag: 'Local SEO',  title: 'The Ultimate Local SEO Checklist for Indian Businesses in 2024', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80' },
  { date: '3 Aug 2024',   tag: 'GMB Reviews',title: 'How to Increase GMB Reviews for Your Business Fast',            img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80' },
  { date: '18 Jul 2024',  tag: 'Reputation', title: 'How to Handle Negative Reviews on Google Business Profile',     img: 'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=500&q=80' },
];

const tagColors = { 'Local SEO': '#7C3AED', 'GMB Reviews': '#F97316', 'Reputation': '#10B981' };

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section id="blog" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className={`text-center mb-16 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-1.5 border border-purple-200 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest bg-purple-50">
            Insights
          </span>
          <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
            className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Latest GMB &amp; SEO Insights
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[17px]">Tips and strategies to grow your local business presence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {posts.map((p, i) => (
            <a key={p.title} href="#blog"
              className={`card-hover group bg-white rounded-3xl overflow-hidden flex flex-col ${inView ? `animate-fadeInUp delay-${(i + 1) * 100}` : 'opacity-0'}`}
              style={{ border: '1.5px solid #EDE9FE', boxShadow: '0 4px 24px rgba(124,58,237,0.07)' }}>
              <div className="overflow-hidden relative">
                <img src={p.img} alt={p.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => { e.target.src = 'https://placehold.co/500x208?text=Blog'; }} />
                {/* Tag pill */}
                <span className="absolute top-4 left-4 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest"
                  style={{ background: tagColors[p.tag] || '#7C3AED' }}>
                  {p.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wide">{p.date}</div>
                <h3 style={{ fontFamily: 'Outfit' }}
                  className="font-black text-gray-900 leading-snug text-[16px] group-hover:text-[#7C3AED] transition-colors flex-1">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center gap-1.5 text-[#7C3AED] text-sm font-bold group-hover:gap-3 transition-all">
                  Read More <ArrowUpRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="#blog"
            className="inline-flex items-center gap-2 border-2 border-purple-200 text-[#7C3AED] px-7 py-3 rounded-full text-sm font-bold hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-200">
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
