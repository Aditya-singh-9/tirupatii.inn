import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MapPin, Phone, Mail, Building2, Camera, Calendar, Users, Home } from 'lucide-react';

function App() {
  const galleryImages = [
    "assets/images/bedroom1.jpg",
    "assets/images/bedroom2.jpg",
    "assets/images/bedroom3.jpg",
    "assets/images/bedroom4.jpg",
    "assets/images/lobby.jpg",
    "assets/images/lobby2.jpg",
    "assets/images/kitchen.jpg",
    "assets/images/livingroom.jpg",
    "assets/images/living2.jpg",
    "assets/images/bathroom.jpg",
    "assets/images/bathroom2.jpg",
    "assets/images/balcony.jpg",
    "assets/images/aboutimage1.jpg",
    "assets/images/front.jpg"
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Top Contact Bar */}
          <div className="py-2 border-b border-orange-400/30 flex flex-wrap justify-end gap-4 text-sm">
            <a href="tel:+917518061111" className="flex items-center space-x-2 hover:text-orange-200">
              <Phone size={14} />
              <span>+91 7518061111</span>
            </a>
            <a href="mailto:tirupatiinn24@gmail.com" className="flex items-center space-x-2 hover:text-orange-200">
              <Mail size={14} />
              <span>tirupatiinn24@gmail.com</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-full">
                  <Building2 size={40} className="text-red-600" />
                </div>
                <span className="text-2xl sm:text-3xl font-bold">Tirupati INN</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg">
                <a href="#home" className="hover:text-orange-200">Home</a>
                <a href="#about" className="hover:text-orange-200">About</a>
                <a href="#gallery" className="hover:text-orange-200">Gallery</a>
                <a href="#book" className="hover:text-orange-200">Book</a>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Welcome to Your Home in Varanasi</h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-orange-100">Discover a home away from home! Spacious rooms, modern amenities, and a welcoming atmosphere.</p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="https://www.makemytrip.com/hotels/tirupati_inn-details-varanasi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition duration-300 inline-flex items-center justify-center"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Your Stay
                </a>
                <a href="#contact" className="bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-800 transition duration-300 inline-flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <MapPin className="text-red-600 flex-shrink-0" />
                  <div className="text-gray-800 text-sm">
                    C/94, C-Block, VDA Colony, Near Jagran Park, Varanasi
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <Phone className="text-red-600 flex-shrink-0" />
                  <div className="text-gray-800 text-sm">
                    <a href="tel:+917518061111" className="hover:text-red-600 block">+91 7518061111</a>
                    <a href="tel:+917518051111" className="hover:text-red-600 block">+91 7518051111</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg sm:col-span-2">
                  <Mail className="text-red-600 flex-shrink-0" />
                  <a href="mailto:tirupatiinn24@gmail.com" className="text-gray-800 text-sm hover:text-red-600">
                    tirupatiinn24@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <Users className="inline-block mb-2" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
            <p className="text-gray-600">Your home away from home in Varanasi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Tirupati Inn, where every stay feels special. Our spacious rooms offer modern amenities like AC, attached washrooms, geysers, and ample wardrobe space. Enjoy the warmth of a cozy living room and cook your favorite meals in a fully equipped kitchen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide a home-like atmosphere, ensuring your stay is comfortable and memorable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Home className="mx-auto text-red-600 mb-2" />
                  <h3 className="font-semibold">Comfortable Rooms</h3>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <MapPin className="mx-auto text-red-600 mb-2" />
                  <h3 className="font-semibold">Prime Location</h3>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Users className="mx-auto text-red-600 mb-2" />
                  <h3 className="font-semibold">24/7 Service</h3>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" 
                alt="Tirupati INN Exterior"
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Gallery Section */}
     <section id="gallery" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <Camera className="inline-block mb-2" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold">Our Gallery</h2>
            <p className="text-gray-600">Take a virtual tour of our property</p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img 
                  src={image}  
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Book Section */}
      <section id="book" className="py-12 sm:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Calendar className="inline-block mb-2" size={32} />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Experience Tirupati INN?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Book your stay now and experience the perfect blend of comfort, culture, and hospitality in Varanasi
          </p>
          <a 
            href="https://goibibo.com/hotels/tirupati-inn-hotel-in-varanasi-5006781396726272798/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition duration-300 inline-flex items-center"
          >
            <Calendar className="mr-2" size={24} />
            Book Your Stay Now
          </a>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 size={32} className="text-orange-500" />
            <span className="text-xl sm:text-2xl font-bold">Tirupati INN</span>
          </div>
          <p>© 2024 Tirupati INN. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} className="text-blue-600" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} className="text-pink-500" />
            </a>
          </div>
        </div>
      </footer>
    </div> // Ensuring the closing div is correctly placed
  );
}
export default App;
