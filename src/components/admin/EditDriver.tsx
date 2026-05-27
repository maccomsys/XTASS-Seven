import React from "react";
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, UploadCloud } from 'lucide-react';

export default function EditDriver() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Driver details updated.');
    navigate('/admin/drivers');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Edit Driver {id}</h1>
          <Link to="/admin/drivers" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
            Cancel
          </Link>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                 <input type="text" defaultValue="Kwame" required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                 <input type="text" defaultValue="Mensah" required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                 <input type="email" defaultValue="kwame.m@example.com" required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                 <input type="tel" defaultValue="+233 24 000 0000" required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
          </div>

          <div className="bg-gray-50 p-6 border-2 border-gray-200">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">License Number</label>
                     <input type="text" defaultValue="DVLA-1234-24" required className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors uppercase" />
                </div>
                <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">License Expiry</label>
                     <input type="date" defaultValue="2027-12-31" required className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <label className="flex items-center">
                    <input type="checkbox" defaultChecked required className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                    <span className="text-sm font-bold text-gray-900">Background Check Cleared</span>
                 </label>
                 <label className="flex items-center">
                    <input type="checkbox" defaultChecked required className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                    <span className="text-sm font-bold text-gray-900">Medical Clearance Passed</span>
                 </label>
             </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <p className="text-sm font-black text-gray-900 uppercase tracking-wider mb-1">Upload New Profile Photo</p>
              <button type="button" className="mt-4 bg-white border-2 border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:border-gray-900 transition-colors">
                  Browse Files
              </button>
          </div>

          <div className="flex items-center justify-between border-y-2 border-gray-200 py-6">
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-wider">Driver Status</p>
                <p className="text-xs text-gray-500 font-bold mt-1">Status dictates if this driver can receive assignments.</p>
             </div>
             <button 
                type="button"
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isActive ? 'translate-x-9' : 'translate-x-1'}`} />
             </button>
          </div>

          <div className="flex justify-end space-x-4 pt-4 mt-8">
            <Link to="/admin/drivers" className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors">
              Cancel
            </Link>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
              <Save className="w-5 h-5 mr-2" />
              Update Driver
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
