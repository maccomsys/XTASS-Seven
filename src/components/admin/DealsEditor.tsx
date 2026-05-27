import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Save, Tag, Image as ImageIcon } from 'lucide-react';

export default function DealsEditor() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Deals page content updated.');
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-4xl mx-auto">
                <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <Tag className="w-8 h-8 mr-3 text-brand-maroon" />
                        Deals Content Editor
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Edit the content displayed on the public Deals & Coupons page.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                    {/* Featured Deal Hero Editor */}
                    <div className="bg-white border-2 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Featured Deal Hero</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Headline Text</label>
                                <input type="text" defaultValue="Weekend Getaway Special" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                <textarea rows={3} defaultValue="Get 20% off all SUV rentals this weekend. Use code WKND20 at checkout." className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Deal Image Upload</label>
                                <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-900 hover:bg-gray-50 transition-colors">
                                    <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                    <span className="text-xs font-bold text-gray-600 block">Click to upload featured deal image</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">CTA Button Text</label>
                                <input type="text" defaultValue="Book Now" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Exclusive Offers Section Editor */}
                    <div className="bg-white border-2 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 border-b-2 border-gray-200 pb-2">Exclusive Offers Section</h2>
                        
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-6 border-2 border-gray-200">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center">Card 1: Sign Up for Specials</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Title</label>
                                        <input type="text" defaultValue="Join Our Newsletter" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                        <textarea rows={2} defaultValue="Get the latest deals and exclusive offers sent directly to your inbox." className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 border-2 border-gray-200">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center">Card 2: Rewards Program</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Title</label>
                                        <input type="text" defaultValue="XTASS Rewards" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                        <textarea rows={2} defaultValue="Earn points on every ride and rental to use towards future trips." className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                            <Save className="w-5 h-5 mr-2" /> Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
