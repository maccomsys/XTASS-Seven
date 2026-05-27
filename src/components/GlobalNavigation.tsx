import { Link, useNavigate } from 'react-router-dom';

export default function GlobalNavigation() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white text-xs py-2 px-4 shadow-sm flex justify-between items-center z-[100] relative w-full font-sans tracking-wide">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold hover:text-brand-yellow transition-colors">Homepage</Link>
        <button onClick={() => navigate(-1)} className="font-bold hover:text-brand-yellow transition-colors cursor-pointer">Back</button>
      </div>
      <div>
        <Link to="/sitemap" className="font-bold hover:text-brand-yellow transition-colors">Sitemap</Link>
      </div>
    </div>
  );
}
