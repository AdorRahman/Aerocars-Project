import GalleryItem from "./GalleryItem";
const images = [
  {
    id: 1,
    src: "https://wallpaperaccess.com/full/48831.jpg",
    title: "air resistance aerodynamic Design",
    category: "optimizing AIR RESISTANCE",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Evolution of Streamline Vehicle Design",
    category: "AIR RESISTANCE DESIGN",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/11880948/pexels-photo-11880948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Introduction of Wind Tunnels",
    category: "WIND TUNNELS & AIR RESISTANCE",
  },
  {
    id: 4,
    src: "https://wallpaperaccess.com/full/145594.jpg",
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
