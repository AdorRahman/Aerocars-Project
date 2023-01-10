import GalleryItem from "./GalleryItem";
const images = [
  {
    id: 1,
    src: "https://i.pinimg.com/originals/e0/4e/8b/e04e8b167b09843d01f70023790d8de1.jpg",
    title: "air resistance aerodynamic Design",
    category: "optimizing AIR RESISTANCE",
  },
  {
    id: 2,
    src: "https://wallpaperaccess.com/full/48831.jpg",
    title: "Evolution of Streamline Vehicle Design",
    category: "AIR RESISTANCE DESIGN",
  },
  {
    id: 3,
    src: "https://wallpaper.caricos.com/2017-Mercedes-AMG-GT-R---Aerodynamics-131063-2560x1440.jpg",
    title: "The Introduction of Wind Tunnels",
    category: "WIND TUNNELS & AIR RESISTANCE",
  },
  {
    id: 4,
    src: "https://www.mdpi.com/energies/energies-15-00689/article_deploy/html/images/energies-15-00689-ag.png",
    title: "Design Aerodynamics with Simulation",
    category: "AIR RESISTANCE Simulation",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
