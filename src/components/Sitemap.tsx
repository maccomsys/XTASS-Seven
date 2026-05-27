import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sitemapData } from './SitemapData';

const HighlightText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) {
    return <>{text}</>;
  }
  
  // Escape regex special characters in highlight to avoid invalid regex errors
  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <mark key={i} className="bg-brand-yellow/60 text-gray-900 rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return sitemapData;
    
    const term = searchTerm.toLowerCase();
    
    return sitemapData.map(section => {
      const sectionMatches = section.title.toLowerCase().includes(term);
      
      const filteredItems = section.items.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term)
      );
      
      if (sectionMatches) {
         return section;
      }
      
      return {
        ...section,
        items: filteredItems,
      };
    }).filter(section => section.items.length > 0);
  }, [searchTerm]);

  return (
    <main className="flex-grow pb-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">XTASS Site Directory</h1>
          <p className="text-lg text-gray-500 mb-8">Complete overview of every page on the XTASS platform, organised by section.</p>
          
          {/* Live Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon sm:text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-shadow" 
              placeholder="Search pages, services, or categories..." 
            />
            {searchTerm && (
               <button 
                 onClick={() => setSearchTerm('')}
                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                 aria-label="Clear search"
               >
                 <X className="w-5 h-5" />
               </button>
            )}
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="container mx-auto px-4 max-w-6xl mt-12">
        <AnimatePresence mode="wait">
          {filteredData.length === 0 ? (
            <motion.div 
              key="no-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-20 bg-white rounded border border-gray-200 shadow-sm"
            >
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">We couldn't find anything matching "{searchTerm}".</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-brand-maroon font-medium hover:underline"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative items-stretch"
            >
              <AnimatePresence mode="popLayout">
                {filteredData.map((section) => {
                   const isAdminSection = section.title.includes('Admin Control Panel') || section.title.includes('4.');
                   
                   return (
                     <motion.div 
                       layout
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       transition={{ duration: 0.2 }}
                       key={section.title}
                       className={`bg-white rounded shadow-sm ${isAdminSection ? 'col-span-1 md:col-span-2 lg:col-span-3 border-t-2 border-brand-maroon p-8' : 'border border-gray-200 p-6'}`}
                     >
                        {isAdminSection ? (
                          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                            <HighlightText text={section.title} highlight={searchTerm} />
                          </h2>
                        ) : (
                          <>
                             <h2 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">
                               <HighlightText text={section.title} highlight={searchTerm} />
                             </h2>
                             <div className="w-12 h-0.5 bg-brand-yellow mb-6"></div>
                          </>
                        )}
                        
                        <ul className={`space-y-6 ${isAdminSection ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 space-y-0' : ''}`}>
                          <AnimatePresence>
                            {section.items.map((item) => (
                              <motion.li 
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.15 }}
                                key={item.num + item.to}
                                className="flex items-start"
                              >
                                <span className="text-gray-400 font-medium mr-4 mt-0.5 text-sm shrink-0 w-8">{item.num}</span>
                                <div className="flex-1">
                                  <Link to={item.to} className="font-bold text-gray-900 hover:text-brand-maroon transition-colors block">
                                    <HighlightText text={item.title} highlight={searchTerm} />
                                  </Link>
                                  <p className="text-sm text-gray-500 mt-1 leading-snug">
                                    <HighlightText text={item.description} highlight={searchTerm} />
                                  </p>
                                </div>
                              </motion.li>
                            ))}
                          </AnimatePresence>
                        </ul>
                     </motion.div>
                   );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
