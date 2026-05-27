import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { FileText, Search, Plus, Filter, Eye, Edit2, Trash2 } from 'lucide-react';

const MOCK_ARTICLES = [
  { id: 'ART-1', title: 'Top 5 Destinations in Ghana for 2024', cat: 'Guides', author: 'Kwame M.', date: 'Oct 20, 2023', status: 'Published', views: 1250 },
  { id: 'ART-2', title: 'XTASS Launches New SUV Fleet', cat: 'Company Updates', author: 'Admin', date: 'Oct 15, 2023', status: 'Published', views: 890 },
  { id: 'ART-3', title: 'Safe Driving Tips During Harmattan', cat: 'Safety Tips', author: 'Kwame M.', date: 'Nov 01, 2023', status: 'Scheduled', views: 0 },
  { id: 'ART-4', title: 'How to Book an Airport Transfer Seamlessly', cat: 'Guides', author: 'Amanda B.', date: '-', status: 'Draft', views: 0 },
];

export default function ArticleList() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <FileText className="w-8 h-8 mr-3 text-red-600" />
              Articles & News
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage blog posts, company news, and customer guides.</p>
          </div>
          <Link 
            to="/admin/articles/add" 
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" /> Write Article
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-2 border-gray-900 p-4 mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search titles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-4 focus:ring-0 focus:border-red-600 transition-colors"
                />
            </div>
            <div className="md:w-64 relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select 
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-10 pr-8 focus:ring-0 focus:border-red-600 transition-colors appearance-none"
                >
                    <option value="All">All Categories</option>
                    <option value="News">News</option>
                    <option value="Guides">Guides</option>
                </select>
            </div>
        </div>

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Title & Category</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Author</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden lg:table-cell">Publish Date</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-center">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Views</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {MOCK_ARTICLES.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase())).map((art) => (
                            <tr key={art.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <Link to={`/admin/articles/add`} className="font-black text-brand-maroon hover:underline block leading-tight mb-1">{art.title}</Link>
                                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest border border-gray-300 px-1 inline-block">{art.cat}</span>
                                </td>
                                <td className="p-4 hidden md:table-cell">
                                    <span className="font-bold text-gray-700 text-sm">{art.author}</span>
                                </td>
                                <td className="p-4 hidden lg:table-cell">
                                    <span className="font-bold text-gray-700 text-sm">{art.date}</span>
                                </td>
                                <td className="p-4 text-center">
                                    <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${
                                        art.status === 'Published' ? 'bg-green-100 text-green-800 border-green-800' : 
                                        art.status === 'Scheduled' ? 'bg-blue-100 text-blue-800 border-blue-800' :
                                        'bg-gray-200 text-gray-800 border-gray-800'
                                    }`}>
                                        {art.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <span className="font-black text-gray-900">{art.views.toLocaleString()}</span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <Link to={`/admin/articles/add`} className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="Edit Article">
                                            <Edit2 className="w-4 h-4" />
                                        </Link>
                                        <button className="p-2 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 transition-colors" title="Delete">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>

      </div>
    </AdminLayout>
  );
}
