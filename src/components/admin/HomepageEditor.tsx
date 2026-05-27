import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Eye, Layout, Type, Image as ImageIcon } from 'lucide-react';

export default function HomepageEditor() {
    const [activeSection, setActiveSection] = useState('Hero Section');

    const sections = [
        'Hero Section', 'Urgency Banner', 'Service Cards', 'Why Choose XTASS', 'Feature Highlights', 'How It Works', 'Destinations'
    ];

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Section saved. Changes are now live.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Layout className="w-8 h-8 mr-3 text-brand-maroon" />
                            Homepage Editor
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Update customer-facing content for the landing page.</p>
                    </div>
                    <button className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-100 font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                        <Eye className="w-4 h-4 mr-2" /> Preview Live
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Nav */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border-2 border-gray-900 sticky top-24">
                            <div className="p-4 border-b-2 border-gray-200 bg-gray-50">
                                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Sections</h2>
                            </div>
                            <div className="flex flex-col">
                                {sections.map(sec => (
                                    <button 
                                        key={sec}
                                        onClick={() => setActiveSection(sec)}
                                        className={`p-4 text-left text-sm font-bold uppercase tracking-widest border-b-2 border-gray-100 transition-colors ${activeSection === sec ? 'bg-red-50 text-red-700 border-l-4 border-l-red-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-l-transparent'}`}
                                    >
                                        {sec}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                            <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
                                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                                    <Type className="w-5 h-5 mr-2 text-brand-maroon" /> {activeSection}
                                </h2>
                            </div>
                            
                            <form onSubmit={handleSave}>
                                {/* Show fields based on active tab. Using a generic structure for illustration */}
                                <div className="space-y-6">
                                    {activeSection === 'Hero Section' && (
                                        <>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Main Headline</label>
                                                <input type="text" defaultValue="RIDE OR RENT IN GHANA." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subheadline / Supporting Text</label>
                                                <textarea rows={3} defaultValue="Your premium mobility partner in West Africa. Reliable, secure, and professional." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Featured Background Image</label>
                                                <div className="flex items-center space-x-4 border-2 border-gray-200 p-4 bg-gray-50">
                                                    <div className="w-24 h-16 bg-gray-300">
                                                        <img src="https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg" alt="bg" className="w-full h-full object-cover" />
                                                    </div>
                                                    <button type="button" className="bg-white border-2 border-gray-300 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-700 hover:border-gray-900 flex items-center">
                                                        <ImageIcon className="w-4 h-4 mr-2" /> Change Image
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {activeSection !== 'Hero Section' && (
                                         <div className="p-8 border-2 border-dashed border-gray-300 text-center text-gray-500 font-bold uppercase tracking-widest">
                                            [Editor fields for {activeSection} would be rendered here]
                                         </div>
                                    )}

                                    <div className="pt-6 border-t-2 border-gray-200 flex justify-end">
                                        <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                                            <Save className="w-5 h-5 mr-2" /> Save Section
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
