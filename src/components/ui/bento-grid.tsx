import { Link } from 'react-router-dom';
import { Play, Star, Calendar } from 'lucide-react';
import { tmdb } from '@/lib/tmdb';
import { type TVEpisode } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface BentoItem {
  episode: TVEpisode;
  showId: number;
  showName: string;
  showPosterPath: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  if (!items.length) return null;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, index) => (
        <BentoCard key={`${item.episode.season_number}-${item.episode.episode_number}`} item={item} index={index} />
      ))}
    </div>
  );
}

function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const { episode, showId, showName, showPosterPath } = item;
  
  return (
    <Link
      to={`/tv/${showId}/season/${episode.season_number}/episode/${episode.episode_number}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={episode.still_path ? tmdb.getBackdropUrl(episode.still_path, 'w780') : tmdb.getPosterUrl(showPosterPath, 'w500')}
          alt={episode.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>
        
        {/* Episode number badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-white font-medium text-sm">Episode {episode.episode_number}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-white/90 transition-colors">
          {episode.name}
        </h3>
        
        <div className="flex items-center gap-4 text-white/60 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm">{episode.vote_average.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{new Date(episode.air_date).toLocaleDateString()}</span>
          </div>
        </div>
        
        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
          {episode.overview || `Watch episode ${episode.episode_number} of ${showName}.`}
        </p>
      </div>
      
      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-300" />
    </Link>
  );
}