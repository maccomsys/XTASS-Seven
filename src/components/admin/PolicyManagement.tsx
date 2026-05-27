import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FileText, Edit2, Save, X } from 'lucide-react';

const POLICY_PAGES = [
    { id: '1', name: 'Terms of Service', lastUpdated: 'Oct 15, 2023' },
    { id: '2', name: 'Privacy Policy', lastUpdated: 'Oct 10, 2023' },
    { id: '3', name: 'Cookie Policy', lastUpdated: 'Sep 25, 2023' },
    { id: '4', name: 'Refund Policy', lastUpdated: 'Sep 12, 2023' },
    { id: '5', name: 'Driver Agreement', lastUpdated: 'Oct 01, 2023' },
    { id: '6', name: 'Community Guidelines', lastUpdated: 'Aug 20, 2023' },
    { id: '7', name: 'Data Protection', lastUpdated: 'Oct 11, 2023' },
    { id: '8', name: 'Compliance', lastUpdated: 'Jul 30, 2023' },
    { id: '9', name: 'Licensing', lastUpdated: 'Jun 15, 2023' },
    { id: '10', name: 'Insurance Policy', lastUpdated: 'Oct 05, 2023' },
];

export default function PolicyManagement() {
    const [editingPage, setEditingPage] = useState<any>(null);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Policy page updated successfully.');
        setEditingPage(null);
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <FileText className="w-8 h-8 mr-3 text-brand-maroon" />
                        Policy Pages Management
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Manage legal and compliance content across the platform.</p>
                </div>

                {editingPage ? (
                    <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4">
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Editing: {editingPage.name}</h2>
                            <button onClick={() => setEditingPage(null)} className="text-gray-500 hover:text-gray-900">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="space-y-6">
                            <div className="border-t-2 border-b-2 border-gray-100 py-3 mb-4 flex items-center gap-4 text-gray-500">
                                <button type="button" className="font-bold hover:text-gray-900">B</button>
                                <button type="button" className="font-semibold italic hover:text-gray-900">I</button>
                                <button type="button" className="font-bold underline hover:text-gray-900">U</button>
                                <div className="w-px h-4 bg-gray-300"></div>
                                <button type="button" className="font-bold hover:text-gray-900">H1</button>
                                <button type="button" className="font-bold hover:text-gray-900">H2</button>
                                <div className="w-px h-4 bg-gray-300"></div>
                                <button type="button" className="font-bold hover:text-gray-900 flex items-center">Format List</button>
                            </div>
                            <textarea 
                                required 
                                rows={20} 
                                defaultValue={`This is the standard content for the ${editingPage.name}. Please edit as necessary to comply with current regulations.`}
                                className="w-full bg-gray-50 border-2 border-dashed border-gray-200 text-gray-900 text-sm p-4 focus:ring-0 focus:border-red-600 transition-colors resize-none font-medium"
                            ></textarea>
                            <div className="flex justify-end space-x-4 pt-4 border-t-2 border-gray-200">
                                <button type="button" onClick={() => setEditingPage(null)} className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors border-2 border-transparent">Cancel</button>
                                <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                                    <Save className="w-5 h-5 mr-2" /> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-900">
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Page Name</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest hidden md:table-cell">Last Updated</th>
                                    <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-gray-100">
                                {POLICY_PAGES.map((page) => (
                                    <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <span className="font-black text-gray-900 text-sm block">{page.name}</span>
                                            <span className="text-xs text-gray-500 font-bold md:hidden mt-1 block">Updated: {page.lastUpdated}</span>
                                        </td>
                                        <td className="p-4 hidden md:table-cell">
                                            <span className="font-bold text-gray-600 text-sm">{page.lastUpdated}</span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button 
                                                onClick={() => setEditingPage(page)}
                                                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-brand-maroon bg-gray-100 hover:bg-red-50 transition-colors"
                                                title="Edit Page"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
