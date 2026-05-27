import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, ArrowLeft, UploadCloud, Globe, Calendar, Tag } from 'lucide-react';

export default function AddEditArticle() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Draft');

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Article saved as ${status}.`);
    navigate('/admin/articles');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
            <div>
              <Link to="/admin/articles" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-2">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
              </Link>
              <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                 Create Article
              </h1>
            </div>
            <div className="flex space-x-4">
                <button 
                    onClick={() => setStatus('Draft')}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-black uppercase tracking-widest text-xs px-6 py-3 border-2 border-gray-900 transition-colors"
                >
                    Save as Draft
                </button>
                <button 
                    onClick={() => setStatus('Published')}
                    className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
                >
                    <Globe className="w-4 h-4 mr-2" /> Publish Now
                </button>
            </div>
        </div>

        <form onSubmit={handlePublish} className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="xl:col-span-2 space-y-6">
                <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <input 
                        type="text" 
                        required 
                        placeholder="Article Headline..." 
                        className="w-full text-2xl font-black text-gray-900 placeholder-gray-400 border-none focus:ring-0 p-0 mb-4"
                    />
                    
                    <div className="border-t-2 border-b-2 border-gray-100 py-3 mb-4 flex items-center gap-4 text-gray-500">
                        <button type="button" className="font-bold hover:text-gray-900">B</button>
                        <button type="button" className="font-semibold italic hover:text-gray-900">I</button>
                        <button type="button" className="font-bold underline hover:text-gray-900">U</button>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <button type="button" className="font-bold hover:text-gray-900">H1</button>
                        <button type="button" className="font-bold hover:text-gray-900">H2</button>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <button type="button" className="font-bold hover:text-gray-900 text-sm flex items-center"><UploadCloud className="w-4 h-4 mr-1"/> Insert Media</button>
                    </div>

                    <textarea 
                        required 
                        rows={20} 
                        placeholder="Write your article content here..." 
                        className="w-full bg-gray-50 border-2 border-dashed border-gray-200 text-gray-900 text-sm p-4 focus:ring-0 focus:border-red-600 transition-colors resize-none font-medium"
                    ></textarea>
                </div>
            </div>

            {/* Sidebar Meta */}
            <div className="xl:col-span-1 space-y-6">
                <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-100 pb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> Publishing Details
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                            <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option value="">Select Category</option>
                                <option value="News">News</option>
                                <option value="Guides">Guides</option>
                                <option value="Company Updates">Company Updates</option>
                                <option value="Safety Tips">Safety Tips</option>
                            </select>
                        </div>
                        <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Schedule Publish (Optional)</label>
                             <input type="datetime-local" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-100 pb-2 flex items-center">
                        <Tag className="w-4 h-4 mr-2" /> Meta Data
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Cover Image</label>
                            <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-900 hover:bg-gray-50 transition-colors">
                                <UploadCloud className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                <span className="text-xs font-bold text-gray-600 block">Click to upload cover image</span>
                                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">1200x630 recommended</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Summary / Excerpt</label>
                            <textarea rows={3} placeholder="Short description for article cards..." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tags</label>
                            <input type="text" placeholder="tips, travel, safety" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            <p className="text-[10px] text-gray-500 mt-1 font-bold">Comma separated</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </AdminLayout>
  );
}
