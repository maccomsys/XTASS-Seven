import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Route, Save, Download, ExternalLink, Network, GripVertical, ChevronDown, ChevronRight, Eye, EyeOff } from 'lucide-react';

const MOCK_SITEMAP = [
    {
        id: 's1',
        title: 'Core Pages',
        isOpen: true,
        pages: [
            { id: 'p1', title: 'Home', path: '/', visible: true },
            { id: 'p2', title: 'About Us', path: '/about', visible: true },
            { id: 'p3', title: 'Contact', path: '/contact', visible: true },
        ]
    },
    {
        id: 's2',
        title: 'Booking & Services',
        isOpen: true,
        pages: [
            { id: 'p4', title: 'Book a Ride', path: '/booking/step-1', visible: true },
            { id: 'p5', title: 'Car Rental', path: '/rentals', visible: true },
            { id: 'p6', title: 'Vehicle Fleet Overview', path: '/fleet', visible: false },
        ]
    },
    {
        id: 's3',
        title: 'Legal & Help',
        isOpen: false,
        pages: [
            { id: 'p7', title: 'Terms of Service', path: '/terms', visible: true },
            { id: 'p8', title: 'Privacy Policy', path: '/privacy', visible: true },
            { id: 'p9', title: 'Help & FAQ', path: '/faq', visible: true },
        ]
    }
];

export default function SitemapOverview() {
    const [sections, setSections] = useState(MOCK_SITEMAP);
    const [selectedPages, setSelectedPages] = useState<string[]>([]);

    const toggleSection = (id: string) => {
        setSections(sections.map(s => s.id === id ? { ...s, isOpen: !s.isOpen } : s));
    };

    const togglePageVisibility = (sectionId: string, pageId: string) => {
        setSections(sections.map(s => {
            if (s.id === sectionId) {
                return {
                    ...s,
                    pages: s.pages.map(p => p.id === pageId ? { ...p, visible: !p.visible } : p)
                };
            }
            return s;
        }));
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const allPageIds = sections.flatMap(s => s.pages.map(p => p.id));
            setSelectedPages(allPageIds);
        } else {
            setSelectedPages([]);
        }
    };

    const togglePageSelection = (pageId: string) => {
        if (selectedPages.includes(pageId)) {
            setSelectedPages(selectedPages.filter(id => id !== pageId));
        } else {
            setSelectedPages([...selectedPages, pageId]);
        }
    };

    const handleBulkVisibility = (visible: boolean) => {
        setSections(sections.map(s => ({
            ...s,
            pages: s.pages.map(p => selectedPages.includes(p.id) ? { ...p, visible } : p)
        })));
        setSelectedPages([]);
    };

    const openPublicSitemap = () => {
        window.open('/sitemap', '_blank');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Network className="w-8 h-8 mr-3 text-red-600" />
                            Sitemap Overview
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Manage public sitemap visibility and structure.</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                        <button 
                            onClick={() => alert('Downloading sitemap.xml')}
                            className="bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-black uppercase tracking-widest text-xs px-4 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                        >
                            <Download className="w-4 h-4 mr-2" /> Export XML
                        </button>
                        <button 
                            onClick={openPublicSitemap}
                            className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-xs px-4 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" /> Preview Public
                        </button>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedPages.length > 0 && (
                    <div className="bg-yellow-50 border-2 border-yellow-400 p-4 mb-6 flex justify-between items-center animate-fade-in">
                        <span className="text-sm font-bold text-yellow-800 uppercase tracking-widest">{selectedPages.length} Pages Selected</span>
                        <div className="flex space-x-4">
                            <button onClick={() => handleBulkVisibility(true)} className="text-sm font-black uppercase tracking-widest text-green-700 hover:text-green-900">Show Selected</button>
                            <button onClick={() => handleBulkVisibility(false)} className="text-sm font-black uppercase tracking-widest text-red-700 hover:text-red-900">Hide Selected</button>
                        </div>
                    </div>
                )}

                {/* Visual Site Tree */}
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                     <div className="bg-gray-900 p-4 flex items-center">
                         <input 
                             type="checkbox" 
                             className="w-5 h-5 mr-4 text-brand-maroon focus:ring-0 focus:ring-offset-0 bg-white border-none cursor-pointer"
                             onChange={handleSelectAll}
                             checked={selectedPages.length === sections.flatMap(s => s.pages).length && sections.length > 0}
                         />
                         <h2 className="text-white text-sm font-black uppercase tracking-widest">Platform Sitemap Structure</h2>
                     </div>

                     <div className="p-4 space-y-2 bg-gray-50">
                         {sections.map((section) => (
                             <div key={section.id} className="border-2 border-gray-200 bg-white shadow-sm mb-4">
                                 {/* Section Header */}
                                 <div 
                                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleSection(section.id)}
                                 >
                                      <div className="flex items-center">
                                          {section.isOpen ? <ChevronDown className="w-5 h-5 text-gray-500 mr-2" /> : <ChevronRight className="w-5 h-5 text-gray-500 mr-2" />}
                                          <Route className="w-5 h-5 text-brand-maroon mr-3" />
                                          <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm">{section.title}</h3>
                                      </div>
                                      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-sm">{section.pages.length} Pages</span>
                                 </div>
                                 
                                 {/* Pages List */}
                                 {section.isOpen && (
                                     <div className="border-t-2 border-gray-100 p-2 space-y-2 bg-gray-50">
                                         {section.pages.map((page) => (
                                             <div key={page.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 group hover:border-gray-900 transition-colors">
                                                 <div className="flex items-center overflow-hidden">
                                                     <GripVertical className="w-5 h-5 text-gray-300 mr-3 cursor-grab hover:text-gray-900 active:cursor-grabbing" />
                                                     <input 
                                                         type="checkbox" 
                                                         className="w-4 h-4 mr-4 text-brand-maroon focus:ring-0 focus:ring-offset-0 border-gray-300 cursor-pointer"
                                                         checked={selectedPages.includes(page.id)}
                                                         onChange={() => togglePageSelection(page.id)}
                                                     />
                                                     <div>
                                                         <p className={`font-bold text-sm ${page.visible ? 'text-gray-900' : 'text-gray-400 line-through'}`}>{page.title}</p>
                                                         <p className="text-xs font-mono text-brand-maroon mt-0.5 truncate">{page.path}</p>
                                                     </div>
                                                 </div>
                                                 
                                                 <div className="ml-4 flex items-center">
                                                     <button 
                                                        onClick={() => togglePageVisibility(section.id, page.id)}
                                                        className={`flex items-center text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 transition-colors ${
                                                            page.visible 
                                                            ? 'text-green-700 bg-green-50 border-green-200 hover:border-green-700' 
                                                            : 'text-gray-500 bg-gray-100 border-gray-200 hover:border-gray-500'
                                                        }`}
                                                     >
                                                         {page.visible ? <><Eye className="w-3 h-3 mr-1" /> Visible</> : <><EyeOff className="w-3 h-3 mr-1" /> Hidden</>}
                                                     </button>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                 )}
                             </div>
                         ))}
                     </div>
                </div>

            </div>
        </AdminLayout>
    );
}
