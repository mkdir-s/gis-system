import { useEffect, useRef, useState } from 'react';

type YandexMapProps = {
  center: [number, number];
  zoom?: number;
};

export const YandexMap = ({ center, zoom = 12 }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [ymaps, setYmaps] = useState<any>(null);

  useEffect(() => {
    const checkYMaps = () => {
      if (typeof window !== 'undefined' && (window as any).ymaps) {
        const ymapsInstance = (window as any).ymaps;
        setYmaps(ymapsInstance);
        
        ymapsInstance.ready(() => {
          const newMap = new ymapsInstance.Map(mapRef.current, {
            center: center,
            zoom: zoom,
            controls: ['zoomControl', 'fullscreenControl']
          });
          setMap(newMap);
        });
      } else {
        setTimeout(checkYMaps, 100);
      }
    };

    checkYMaps();

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (map && ymaps) {
      map.setCenter(center);

      const placemark = new ymaps.Placemark(center, {}, {
        preset: 'islands#blueDotIcon'
      });
      
      map.geoObjects.removeAll();
    }
  }, [center, map, ymaps]);

  return (
    <div 
      className='hero__map'
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '500px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginTop: '20px'
      }} 
    />
  );
};