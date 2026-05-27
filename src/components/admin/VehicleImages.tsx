import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { ImageIcon, Star, X, UploadCloud, GripVertical, ArrowLeft } from 'lucide-react';

export default function VehicleImages() {
    const { id } = useParams();
    const vehicleId = id || 'V-101';
    
    // Mock data for images
    const [images, setImages] = useState([
        { id: 1, url: 'https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg', isPrimary: true },
        { id: 2, url: 'https://i.ibb.co/8g9MphYk/Airport-Pickup-7.jpg', isPrimary: false },
        { id: 3, url: 'https://i.ibb.co/zWN7ZHns/Airport-Pickup-1.jpg', isPrimary: false }
    ]);
    const [isUploading, setIsUploading] = useState(false);

    const setPrimary = (imageId: number) => {
        setImages(images.map(img => 
            ({ ...img, isPrimary: img.id === imageId })
        ).sort((a, b) => (b.id === imageId ? 1 : 0) - (a.id === imageId ? 1 : 0))); // simplified sort to push primary to front
    };

    const deleteImage = (imageId: number) => {
        if(confirm('Are you sure you want to delete this image?')) {
            setImages(images.filter(img => img.id !== imageId));
        }
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto">
                <div className="mb-6">
                    <Link to={`/admin/fleet/${vehicleId}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Vehicle
                    </Link>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        <ImageIcon className="w-8 h-8 mr-3 text-red-600" />
                        Image Management
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">Vehicle {vehicleId} - Toyota Camry 2023</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Upload Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border-4 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                            <h2 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-gray-100 pb-2">Upload New Images</h2>
                            <div className="border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer mb-4">
                                <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                                <p className="text-sm font-black text-gray-900 uppercase tracking-wider mb-1">Drop Files Here</p>
                                <p className="text-xs text-gray-500 font-bold mb-4">Or click to browse (JPG/PNG)</p>
                                <button type="button" className="bg-white border-2 border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:border-gray-900 transition-colors">
                                    Select Files
                                </button>
                            </div>
                            <div className="text-xs font-bold text-gray-500 bg-gray-100 p-3">
                                <li>Max 5MB per file.</li>
                                <li>Recommended ratio 16:9.</li>
                            </div>
                            
                            {/* Mock Progress */}
                            {isUploading && (
                                <div className="mt-4">
                                    <div className="flex justify-between text-xs font-bold mb-1">
                                        <span className="text-gray-700">Uploading front_view.jpg...</span>
                                        <span className="text-gray-900">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-2">
                                        <div className="bg-red-600 h-2" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white border-2 border-gray-900 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                            <h2 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-gray-100 pb-2">Current Gallery</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map(img => (
                                    <div key={img.id} className={`group relative border-4 transition-colors ${img.isPrimary ? 'border-red-600' : 'border-transparent hover:border-gray-300'}`}>
                                        <div className="aspect-video bg-gray-100 overflow-hidden relative">
                                            <img src={img.url} alt="Vehicle" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="flex justify-between items-start">
                                                    <button className="text-white hover:text-gray-300 cursor-grab active:cursor-grabbing p-1 bg-black/50 rounded">
                                                        <GripVertical className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => deleteImage(img.id)} className="text-white hover:text-red-400 p-1 bg-black/50 rounded transition-colors">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    {!img.isPrimary && (
                                                        <button onClick={() => setPrimary(img.id)} className="bg-white text-gray-900 text-xs font-black uppercase tracking-widest px-3 py-1 hover:bg-gray-200 transition-colors">
                                                            Set Primary
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {img.isPrimary && (
                                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                                                <Star className="w-4 h-4 fill-current" />
                                            </div>
                                        )}
                                        {img.isPrimary && (
                                            <div className="bg-red-600 text-white text-center text-xs font-black uppercase tracking-widest py-1">
                                                Primary Photo
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
