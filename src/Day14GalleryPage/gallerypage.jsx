import React from "react";
import "./gallerypage.css";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    title: "Mountain Lake",
    category: "Nature",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1000&q=80",
    title: "Road Trip",
    category: "Travel",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80",
    title: "City Lights",
    category: "Urban",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
    title: "Misty Forest",
    category: "Nature",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
    title: "Desert Trail",
    category: "Adventure",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    title: "Golden Coast",
    category: "Landscape",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    title: "Ocean Wave",
    category: "Seascape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1000&q=80",
    title: "Sunset Valley",
    category: "Nature",
  },
];

export default function Day14GalleryPage() {
  return (
    <section className="gallery-page">
      <header className="gallery-header">
        <p className="gallery-kicker">Day 14 Challenge</p>
        <h1 className="gallery-title">Image Gallery Grid</h1>
        <p className="gallery-subtitle">
          Responsive photo gallery with smooth hover reveal and zoom effect.
        </p>
      </header>

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <article className="gallery-card" key={image.id}>
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h2>{image.title}</h2>
              <p>{image.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
