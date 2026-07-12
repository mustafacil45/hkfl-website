'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { CityData } from './citiesData';

interface Props {
  locations: CityData[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function FlyToSelected({ locations, selectedId }: { locations: CityData[]; selectedId: string | null }) {
  const map = useMap();
  useEffect(() => {
    if (selectedId) {
      const loc = locations.find(l => l.id === selectedId);
      if (loc) map.flyTo([loc.lat, loc.lng], 6, { duration: 1.2 });
    }
  }, [selectedId, locations, map]);
  return null;
}

export default function LeafletMap({ locations, selectedId, onSelect }: Props) {
  const mapRef = useRef<L.Map | null>(null);

  const getRadius = (count: number) => {
    if (count > 300) return 16;
    if (count > 100) return 12;
    if (count > 30) return 9;
    if (count > 10) return 7;
    return 5;
  };

  return (
    <>
      <style>{`
        .leaflet-container { background:#0f172a !important; font-family:inherit; }
        .leaflet-control-zoom { border:1px solid rgba(255,255,255,0.1) !important; border-radius:12px !important; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.4) !important; }
        .leaflet-control-zoom a { background:rgba(15,23,42,0.9) !important; color:#94a3b8 !important; border:none !important; border-bottom:1px solid rgba(255,255,255,0.06) !important; width:36px !important; height:36px !important; line-height:36px !important; font-size:16px !important; transition:all 0.2s; }
        .leaflet-control-zoom a:hover { background:rgba(2,132,199,0.3) !important; color:#38bdf8 !important; }
        .leaflet-control-attribution { background:rgba(15,23,42,0.8) !important; color:#475569 !important; font-size:9px !important; border-radius:8px 0 0 0 !important; padding:2px 8px !important; }
        .leaflet-control-attribution a { color:#64748b !important; }
        .leaflet-popup-content-wrapper { background:rgba(15,23,42,0.95) !important; color:#e2e8f0 !important; border-radius:16px !important; border:1px solid rgba(56,189,248,0.2) !important; box-shadow:0 8px 32px rgba(0,0,0,0.5) !important; backdrop-filter:blur(12px); padding:0 !important; }
        .leaflet-popup-content { margin:0 !important; min-width:200px; }
        .leaflet-popup-tip { background:rgba(15,23,42,0.95) !important; border:1px solid rgba(56,189,248,0.15) !important; }
        .leaflet-popup-close-button { color:#64748b !important; font-size:18px !important; top:8px !important; right:10px !important; }
        .leaflet-popup-close-button:hover { color:#38bdf8 !important; }
      `}</style>

      <MapContainer center={[30,20]} zoom={2} minZoom={2} maxZoom={10} scrollWheelZoom={true} zoomControl={true} style={{ height:'100%', width:'100%' }} ref={mapRef}>
        <TileLayer attribution='&copy; <a href="https://carto.com/">CARTO</a>' url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <FlyToSelected locations={locations} selectedId={selectedId} />

        {locations.map(loc => {
          const isSelected = selectedId === loc.id;
          const radius = getRadius(loc.count);
          return (
            <CircleMarker key={loc.id} center={[loc.lat, loc.lng]} radius={isSelected ? radius + 3 : radius}
              pathOptions={{ fillColor: isSelected ? '#f43f5e' : '#38bdf8', fillOpacity: isSelected ? 0.85 : 0.6, color: isSelected ? '#fff' : 'rgba(56,189,248,0.4)', weight: isSelected ? 2.5 : 1.5 }}
              eventHandlers={{ click: () => onSelect(loc.id) }}>
              <Popup>
                <div style={{ padding:'14px 16px', minWidth:'190px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px' }}>
                    <span style={{ fontSize:'20px' }}>{loc.flag}</span>
                    <div>
                      <div style={{ fontWeight:800, fontSize:'13px', color:'#f1f5f9' }}>{loc.city}</div>
                      <div style={{ fontSize:'10px', color:'#64748b', fontWeight:500 }}>{loc.country}</div>
                    </div>
                  </div>
                  <div style={{ background:'rgba(56,189,248,0.08)', borderRadius:'10px', padding:'8px 12px', marginBottom:'10px', border:'1px solid rgba(56,189,248,0.12)' }}>
                    <div style={{ fontSize:'20px', fontWeight:900, color:'#38bdf8', lineHeight:1 }}>{loc.count}</div>
                    <div style={{ fontSize:'9px', color:'#64748b', fontWeight:600, marginTop:'2px', textTransform:'uppercase', letterSpacing:'0.5px' }}>Mezun</div>
                  </div>
                  <div style={{ fontSize:'9px', color:'#94a3b8', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', marginBottom:'6px' }}>Sektörler</div>
                  {loc.sectors.slice(0,3).map(s => (
                    <div key={s.name} style={{ marginBottom:'5px' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', fontSize:'10px', marginBottom:'2px' }}>
                        <span style={{ color:'#cbd5e1', fontWeight:500 }}>{s.name}</span>
                        <span style={{ color:'#f1f5f9', fontWeight:700 }}>%{s.pct}</span>
                      </div>
                      <div style={{ height:'3px', borderRadius:'4px', background:'rgba(255,255,255,0.06)', overflow:'hidden' }}>
                        <div style={{ height:'100%', width:`${s.pct}%`, borderRadius:'4px', background:s.color, transition:'width 0.6s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </>
  );
}
