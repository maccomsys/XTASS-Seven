import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { HelpCircle, Plus, Edit2, Trash2, GripVertical, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const MOCK_FAQS = [
  { id: 1, q: 'How do I book an airport transfer?', cat: 'Booking & Payment', status: 'Published', order: 1 },
  { id: 2, q: 'What is the cancellation policy?', cat: 'Booking & Payment', status: 'Published', order: 2 },
  { id: 3, q: 'Are your drivers vetted?', cat: 'Safety', status: 'Published', order: 3 },
  { id: 4, q: 'Can I rent a car without a driver?', cat: 'Services', status: 'Draft', order: 4 },
];

export default function FAQManagement() {
  const [faqs, setFaqs] = useState(MOCK_FAQS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<any>(null);

  const handleEdit = (faq: any) => {
    setEditingFaq(faq);
    setIsFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    setEditingFaq(null);
    alert('FAQ saved successfully.');
  };

  const toggleStatus = (id: number) => {
    setFaqs(faqs.map(f => f.id === id ? { ...f, status: f.status === 'Published' ? 'Draft' : 'Published' } : f));
  };

  const moveRow = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newFaqs = [...faqs];
      [newFaqs[index - 1], newFaqs[index]] = [newFaqs[index], newFaqs[index - 1]];
      setFaqs(newFaqs);
    } else if (direction === 'down' && index < faqs.length - 1) {
      const newFaqs = [...faqs];
      [newFaqs[index + 1], newFaqs[index]] = [newFaqs[index], newFaqs[index + 1]];
      setFaqs(newFaqs);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-red-600" />
              FAQ Management
            </h1>
            <p className="text-gray-500 font-medium mt-1">Manage, order, and publish frequently asked questions.</p>
          </div>
          <button 
            onClick={() => { setEditingFaq(null); setIsFormOpen(true); }}
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
          >
            <Plus className="w-4 h-4 mr-2" /> Add FAQ
          </button>
        </div>

        {isFormOpen && (
            <div className="mb-8 border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-200 pb-2">
                    {editingFaq ? 'Edit FAQ Entry' : 'Add New FAQ Entry'}
                </h2>
                <form onSubmit={handleSave} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Question Text</label>
                        <input type="text" required defaultValue={editingFaq?.q || ''} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Answer (Rich Text)</label>
                        <textarea required rows={5} defaultValue={editingFaq ? 'This is a sample answer.' : ''} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-medium p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                            <select required defaultValue={editingFaq?.cat || ''} className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option value="">Select Category</option>
                                <option value="General">General</option>
                                <option value="Services">Services</option>
                                <option value="Booking & Payment">Booking & Payment</option>
                                <option value="Safety">Safety</option>
                            </select>
                        </div>
                        <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Status</label>
                             <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                                <option value="Published">Published</option>
                                <option value="Draft">Draft</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4 border-t-2 border-gray-200">
                        <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">Cancel</button>
                        <button type="submit" className="bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-3 transition-colors shadow-[4px_4px_0_0_rgba(220,38,38,1)]">Save FAQ</button>
                    </div>
                </form>
            </div>
        )}

        {/* Data Table */}
        <div className="bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-900">
                            <th className="p-4 w-12 text-center text-xs font-black text-gray-900 uppercase tracking-widest">Order</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Question & Category</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest">Status</th>
                            <th className="p-4 text-xs font-black text-gray-900 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {faqs.map((f, index) => (
                            <tr key={f.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-4 text-center">
                                    <div className="flex flex-col items-center">
                                        <button onClick={() => moveRow(index, 'up')} disabled={index === 0} className="text-gray-400 hover:text-gray-900 disabled:opacity-30 p-1">
                                            <ChevronUp className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => moveRow(index, 'down')} disabled={index === faqs.length - 1} className="text-gray-400 hover:text-gray-900 disabled:opacity-30 p-1">
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-start">
                                        <GripVertical className="w-5 h-5 text-gray-300 mr-3 cursor-grab hidden group-hover:block shrink-0 mt-0.5" />
                                        <div className={!f.status ? 'ml-8' : ''}>
                                            <p className="font-black text-gray-900">{f.q}</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{f.cat}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                     <button 
                                        onClick={() => toggleStatus(f.id)}
                                        className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 transition-colors ${f.status === 'Published' ? 'bg-green-100 text-green-800 border-green-800 hover:bg-yellow-100 hover:text-yellow-800 hover:border-yellow-800' : 'bg-gray-100 text-gray-600 border-gray-400 hover:bg-green-100 hover:text-green-800 hover:border-green-800'}`}
                                     >
                                        {f.status}
                                    </button>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button onClick={() => handleEdit(f)} className="p-2 text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 transition-colors" title="Edit FAQ">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 transition-colors" title="Delete FAQ">
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
