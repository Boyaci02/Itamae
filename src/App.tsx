import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X,
  ShoppingBag, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe,
  ArrowLeft,
  Clock,
  Phone,
  Play
} from "lucide-react";
import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ItamaeLogo = ({ size = "md" }) => {
  const sizeClasses = size === "lg" ? "h-32" : "h-16";
  
  return (
    <img 
      src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69515d58ee104796b003ea6f.png" 
      alt="Itamae Logo" 
      className={`${sizeClasses} w-auto object-contain transition-transform hover:scale-105`}
      referrerPolicy="no-referrer"
    />
  );
};

const locations = [
  {
    id: "kungsholmen",
    name: "Kungsholmen",
    address: "Fleminggatan 16",
    zipCode: "112 26 Stockholm",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d636702fd298b4a0cd.jpg",
    orderUrl: "https://qopla.com/restaurant/itamae---kungsholmen/qyZRx7WVdM/order",
    color: "blue",
    isGrill: false,
    phone: "08-32 70 32",
    hours: {
      var: "11.00-21.00",
      lor: "11.00-21.00",
      son: "11.00-21.00"
    },
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748550829!5m2!1sen!2ses!6m8!1m7!1sV1pAMf7nhbQiMKkkCxsVoA!2m2!1d59.33299706809522!2d18.04512301671291!3f315.73257326866565!4f0.4191554857457902!5f0.7820865974627469" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: "sundbyberg",
    name: "Sundbyberg",
    address: "Landsvägen 33",
    zipCode: "172 63 Sundbyberg",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d6bffadfdbf6766b34.jpeg",
    orderUrl: "https://qopla.com/restaurant/itamae-sushi-&-grill---sundbyberg/qbgL3aM4Ov/order",
    color: "blue",
    isGrill: true,
    phone: "08-28 78 28",
    hours: {
      var: "11.00-21.00",
      lor: "11.00-22.00",
      son: "11.00-21.00"
    },
    hoursDisplay: [
      { label: "FRE-LÖR", value: "11.00-22.00" },
      { label: "SÖN-TOR", value: "11.00-21.00" }
    ],
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748163634!5m2!1sen!2ses!6m8!1m7!1sy9eZvuDyk5x5BMHALuCzMw!2m2!1d59.35990314274139!2d17.97223218007605!3f250.7489!4f0!5f0.7820865974627469" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: "hagastaden",
    name: "Hagastaden",
    address: "Norra Stationsgatan 66E-66F",
    zipCode: "113 64 Stockholm",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d61d4c8d62911d4785.jpeg",
    orderUrl: "https://qopla.com/restaurant/itamae---hagastaden/qAa9ZDPdv1/order",
    color: "blue",
    isGrill: false,
    phone: "08-32 71 32",
    hours: {
      var: "11.00-21.00",
      lor: "11.00-21.00",
      son: "11.00-21.00"
    },
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748289780!5m2!1sen!2ses!6m8!1m7!1sxL07DVIDAr6wlcF-tvvLdg!2m2!1d59.34740445412145!2d18.03680259775461!3f308.7897302305288!4f3.7136599781424167!5f1.8719637665788689" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: "odengatan",
    name: "Odengatan",
    address: "Odengatan 62",
    zipCode: "113 22 Stockholm",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d636702f76f6b4a0ce.jpg",
    orderUrl: "https://qopla.com/restaurant/itamae---odenplan/qvyAzJvzzJ/order",
    color: "blue",
    isGrill: false,
    phone: "08-32 70 20",
    hours: {
      var: "11.00-21.00",
      lor: "11.00-21.00",
      son: "11.00-21.00"
    },
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748413372!5m2!1sen!2ses!6m8!1m7!1sJquFglDsorZyMqVrdUDX5A!2m2!1d59.34320043629675!2d18.05224510701819!3f333.0793921462883!4f-5.581497786661785!5f2.755265777737071" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
    id: "danderyd",
    name: "Danderyd",
    address: "Golfvägen 2",
    zipCode: "182 31 Danderyd, Stockholm",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a861d6bffadf11f1766b33.jpg",
    orderUrl: "https://qopla.com/restaurant/itamae---danderyd/q3Prp4Xj7z/order",
    color: "blue",
    isGrill: false,
    phone: "08-32 73 32",
    hours: {
      var: "11.00-21.00",
      lor: "11.00-21.00",
      son: "11.00-21.00"
    },
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2ses!4v1772748474107!5m2!1sen!2ses!6m8!1m7!1sBj9pkpyWlavRp11sY6ZxyA!2m2!1d59.39671684193847!2d18.03666504119831!3f65.52715188774451!4f-1.2362561577949123!5f1.8051929351732046" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  }
];

const LocationCard = ({ location }) => {
  return (
    <Link 
      to={`/location/${location.id}`}
      className="relative w-full h-20 md:h-full group overflow-hidden block bg-itamae-green rounded-2xl shadow-lg border border-white/10"
    >
      {/* Desktop Image */}
      <img 
        src={location.image} 
        alt={location.name} 
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-60 hidden md:block"
        referrerPolicy="no-referrer"
      />
      
      {/* Mobile Image (Subtle/Blurred) */}
      <div className="md:hidden absolute inset-0">
         <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover opacity-30 blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Dark Overlay - Desktop only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 hidden md:block" />
      
      {/* Content */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-center md:justify-end">
        <div className="flex flex-col md:block transform transition-transform duration-500 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
          <h3 className="text-white font-bold text-lg md:text-2xl tracking-tight leading-tight mb-1 md:mb-2 drop-shadow-md font-serif italic">
            {location.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-white/80 text-[10px] md:text-sm font-medium tracking-wide drop-shadow-sm uppercase">
              Se restaurang & meny
            </p>
            <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        {/* Beställ indicator - Desktop only */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 hidden md:block">
          <span className={`${location.color === "orange" ? "bg-[#F29400]" : "bg-itamae-red"} text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl`}>
            Beställ här
          </span>
        </div>
      </div>
    </Link>
  );
};

const KontaktPage = () => (
  <div className="pt-32 pb-24 bg-zinc-100 min-h-screen">
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-itamae-charcoal/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-2">Hör av dig till oss</span>
        <h1 className="font-serif text-4xl md:text-6xl text-itamae-charcoal font-bold italic">Kontakt</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Left Column: General Info & Socials */}
        <div className="space-y-6 md:space-y-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5 space-y-10 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-itamae-charcoal/60 mb-4">E-post</h3>
              <a 
                href="mailto:info@itamae.se" 
                className="text-2xl md:text-4xl font-serif italic text-itamae-charcoal hover:text-itamae-red transition-colors break-words block"
              >
                info@itamae.se
              </a>
            </div>

            <div className="pt-10 border-t border-black/5 w-full flex flex-col items-center md:items-start">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-itamae-charcoal/60 mb-6">Följ oss</h3>
              <div className="flex gap-4 md:gap-6">
                <a 
                  href="https://www.instagram.com/itamaesushibar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <Instagram size={24} className="md:w-7 md:h-7" />
                </a>
                <a 
                  href="https://www.facebook.com/itamaeOfficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <Facebook size={24} className="md:w-7 md:h-7" />
                </a>
              </div>
            </div>

            <div className="pt-10 border-t border-black/5 w-full">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-itamae-charcoal/60 mb-4">Huvudkontor</h3>
              <p className="text-itamae-charcoal text-lg md:text-xl leading-relaxed font-medium">
                Odengatan 62,<br />
                113 22 Stockholm
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Restaurant Phone Numbers */}
        <div className="bg-itamae-green p-8 md:p-12 rounded-3xl shadow-xl text-white">
          <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-10 text-center md:text-left">Våra restauranger</h3>
          <div className="space-y-2 md:space-y-4">
            {locations.map((loc) => (
              <div key={loc.id} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 last:border-0 gap-4 text-center md:text-left">
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif italic text-xl md:text-2xl">{loc.name}</h4>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest mt-2">{loc.address}</p>
                </div>
                <a 
                  href={`tel:${loc.phone.replace(/\s/g, '')}`} 
                  className="font-mono text-lg md:text-xl hover:text-itamae-red transition-colors whitespace-nowrap bg-white/10 px-4 py-2 rounded-full md:bg-transparent md:p-0"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQPage = () => (
  <div className="pt-32 pb-24 bg-zinc-100 min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="font-serif text-5xl text-itamae-charcoal mb-4">FAQ</h1>
      <p className="text-itamae-charcoal/60 mb-12 text-lg">Här hittar du vanliga frågor till oss</p>
      
      <div className="space-y-6">
        {[
          { 
            q: "Har ni hemkörning?", 
            a: "Ja, under respektive restaurang finner ni knappen “Takeaway & Delivery” som länkar till beställningssidan." 
          },
          { 
            q: "Finns det vegan sushi?", 
            a: "Ja vi har flera olika vegan alternativ. Det skiljer sig lite för respektive restaurang. Se mer på restaurangens sida." 
          },
          { 
            q: "Har ni annan mat än Sushi?", 
            a: "Ja, förutom sushi har enheterna även andra asiatiska rätter & grill av mycket hög klass i sortimentet." 
          },
          { 
            q: "Hur länge har ni funnits?", 
            a: "Vi öppnade vår första sushi restaurang redan år 2000." 
          },
          { 
            q: "Vilka öppettider har ni?", 
            a: "Ni hittar öppettiderna under respektive restaurang." 
          },
          { 
            q: "Hur kan man betala hos er?", 
            a: "Vi är en kontantfri restaurang, endast kort och Swish tas emot." 
          },
          { 
            q: "Vad betyder Itamae?", 
            a: "Itamae betyder på japanska: köksmästare, det högsta en sushikock kan uppnå." 
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-black/5"
          >
            <h3 className="font-bold text-itamae-charcoal text-xl mb-3">{item.q}</h3>
            <p className="text-itamae-charcoal/70 leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="pt-32 pb-24 bg-zinc-100 min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="font-serif text-5xl text-itamae-charcoal mb-8">Vilkor</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm prose prose-sm max-w-none">
        <h3 className="text-itamae-charcoal">Allmänna villkor</h3>
        <p className="text-itamae-charcoal/60">
          Här hittar du våra allmänna villkor för användning av vår webbplats och våra tjänster.
          Vi strävar alltid efter att ge dig den bästa möjliga upplevelsen.
        </p>
        <h3 className="text-itamae-charcoal mt-6">Integritetspolicy</h3>
        <p className="text-itamae-charcoal/60">
          Din integritet är viktig för oss. Vi hanterar dina personuppgifter med största försiktighet
          i enlighet med gällande lagstiftning.
        </p>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLocations = () => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById("locations");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("locations");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || mobileMenuOpen ? "bg-itamae-green py-4 shadow-lg" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69515d58ee104796b003ea6f.png" 
                alt="Itamae Logo" 
                className="h-14 md:h-16 w-auto object-contain transition-all"
                referrerPolicy="no-referrer"
              />
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-white/80 text-sm font-medium">
              <button 
                onClick={scrollToLocations}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Restauranger
              </button>
              <Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={scrollToLocations}
              className="bg-itamae-red text-white px-8 py-2.5 rounded-full text-sm font-bold hover:brightness-110 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              Beställ
            </motion.button>
            
            <button 
              className="text-white lg:hidden z-50 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-itamae-green/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-10 text-center px-6 w-full max-w-sm">
              {[
                { label: "Restauranger", onClick: () => { setMobileMenuOpen(false); scrollToLocations(); } },
                { label: "Kontakt", to: "/kontakt" },
                { label: "FAQ", to: "/faq" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                >
                  {item.to ? (
                    <Link 
                      to={item.to} 
                      className="text-white text-4xl font-serif italic hover:text-itamae-red transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      className="text-white text-4xl font-serif italic hover:text-itamae-red transition-colors w-full"
                      onClick={item.onClick}
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-white/10"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToLocations();
                  }}
                  className="bg-itamae-red text-white w-full py-5 rounded-full text-xl font-bold shadow-2xl"
                >
                  Beställ nu
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen overflow-hidden bg-itamae-green">
      <motion.div style={{ y }} className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d6022141b736331db84.jpg"
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d40bffadf054085a170.mov" 
            type="video/quicktime" 
          />
          <source 
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d40bffadf054085a170.mov" 
            type="video/mp4" 
          />
          <img 
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d6022141b736331db84.jpg" 
            alt="Sushi Crafting Backup" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </video>
      </motion.div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-4"
        >
          Sushi restaurang
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-tight"
        >
          Itamazing <br /> Sushibilites
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={() => {
              const element = document.getElementById("locations");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-itamae-red text-white px-10 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            Restauranger
          </button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      subtitle: "Sushi + lunch = Itamae Lunch",
      title: "It's Itamae Lunch time!",
      body: "Varje vardag fram till kl. 14:00 erbjuder vi lunch från 125 kr*, där du kan välja mellan ett stort urval av våra gästers favoriträtter och dessutom ingår en läsk/Loka!",
      button: "Ladda ner vår App - Beställ",
      image: "https://picsum.photos/seed/itamae-lunch/800/800",
      imageType: "square"
    },
    {
      subtitle: "Gratis sushi med vårt lojalitetsprogram",
      title: "Välkommen till Itamae Family!",
      body: "Upptäck vårt nya lojalitetsprogram där varje sushi du köper tar dig närmare en gratis måltid! Som medlem får du ett digitalt stämpelkort – efter att ha köpt 6 sushi, bjuder vi på nästa.*",
      button: "Läs mer om Itamae family",
      image: "https://picsum.photos/seed/itamae-phone/600/1200",
      imageType: "phone"
    },
    {
      subtitle: "Barnmeny med Mumin",
      title: "Itamae Kids – nu med mumintrollen 🐾",
      body: "Vår barnmeny, Itamae Kids, har fått nytt liv! Nu kan våra yngsta gäster njuta av smakfulla måltider inspirerade av mumintrollens magiska värld ✨🌟 Kombinera barnets val av sushibitar, välj yakiniku med ris – eller varför inte pannkakor med sylt och chokladsås? Barn älskar att välja, vi älskar att möjliggöra 🫶",
      button: "Till menyn och Itamae Kids",
      image: "https://picsum.photos/seed/itamae-kids/800/800",
      imageType: "square"
    },
    {
      subtitle: "Ladda ner vår app och ta del av våra erbjudanden",
      title: "Nyhet! Itamae Deals – exklusiva erbjudanden i vår app!",
      body: "Vi på Itamae Sushi vill visa vår uppskattning för dig som är en del av Itamae Family! Därför har vi lanserat Itamae Deals – exklusiva erbjudanden som du bara hittar i vår app. Nya deals varje månad! Håll utkik i appen för att ta del av dina favoriträtter till ännu bättre priser!",
      button: "Läs mer om Itamae Deals",
      image: "https://picsum.photos/seed/itamae-deals/800/800",
      imageType: "square"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-itamae-green py-24 overflow-hidden relative min-h-[700px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative h-[600px] md:h-[550px] overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                {slides[currentSlide].imageType === "phone" ? (
                  <div className="relative w-48 md:w-64">
                    <img 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].title} 
                      className="rounded-[2.5rem] shadow-2xl border-4 border-itamae-green/50"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="relative w-full max-w-md aspect-square">
                    <img 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].title} 
                      className="w-full h-full object-cover rounded-sm shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              <div className="text-white space-y-6 order-1 lg:order-2 text-left">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest block">
                  {slides[currentSlide].subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight font-serif italic">
                  {slides[currentSlide].title}
                </h2>
                <div className="space-y-4">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                    {slides[currentSlide].body}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    const element = document.getElementById("locations");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-itamae-red text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  {slides[currentSlide].button}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 w-12 rounded-full transition-all duration-300 hover:bg-itamae-red cursor-pointer ${currentSlide === index ? "bg-itamae-red" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  return (
    <section id="locations" className="bg-itamae-green py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Våra restauranger</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 font-serif italic">Hitta ditt Itamae</h2>
        </div>
        
        {/* Mobile View: Simple Vertical List */}
        <div className="md:hidden space-y-2">
          {locations.map((loc) => (
            <div key={loc.id} className="w-full">
              <LocationCard location={loc} />
            </div>
          ))}
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 h-[600px]">
          {/* Left Column */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1">
              <LocationCard location={locations[0]} />
            </div>
            <div className="flex-1">
              <LocationCard location={locations[2]} />
            </div>
          </div>
          
          {/* Middle Column (Full Height) */}
          <div className="h-full">
            <LocationCard location={locations[1]} />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1">
              <LocationCard location={locations[3]} />
            </div>
            <div className="flex-1">
              <LocationCard location={locations[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find(l => l.id === id);

  if (!location) return <div className="min-h-screen bg-itamae-green flex items-center justify-center text-white">Location not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-itamae-green pt-32 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Tillbaka till start</span>
        </button>

        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center mb-8">
            <ItamaeLogo size="lg" />
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-bold font-serif italic">Itamae {location.name}</h1>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <a 
            href={location.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 text-white h-24 px-8 rounded-2xl font-bold flex flex-col items-center justify-center transition-all border border-white/10 hover:border-white/20 text-center"
          >
            <span className="uppercase tracking-[0.2em] text-[10px] text-white/60 mb-1 group-hover:text-white/80 transition-colors">Se vår</span>
            <span className="text-2xl font-serif italic">Meny</span>
          </a>
          
          <a 
            href={location.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-itamae-red text-white h-24 px-8 rounded-2xl font-bold flex flex-col items-center justify-center transition-all shadow-xl hover:shadow-itamae-red/20 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            <span className="uppercase tracking-[0.2em] text-[10px] text-white/80 mb-1">Beställ</span>
            <span className="text-2xl font-serif italic">Takeaway</span>
          </a>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-10 rounded-2xl border border-black/5 text-center space-y-6 shadow-sm">
            <h3 className="text-itamae-charcoal font-bold text-2xl uppercase tracking-widest">Öppettider</h3>
            <div className="space-y-2 text-itamae-charcoal/70 text-lg">
              {location.hoursDisplay ? (
                location.hoursDisplay.map((h, i) => (
                  <p key={i}>{h.label}. {h.value}</p>
                ))
              ) : (
                <>
                  <p>VAR. {location.hours.var}</p>
                  <p>LÖR. {location.hours.lor}</p>
                  <p>SÖN. {location.hours.son}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-2xl border border-black/5 text-center space-y-6 shadow-sm">
            <h3 className="text-itamae-charcoal font-bold text-2xl uppercase tracking-widest">Adress</h3>
            <div className="space-y-2 text-itamae-charcoal/70 text-lg">
              <p>{location.address}</p>
              <p>{location.zipCode}</p>
              <p>Tel. {location.phone}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        {location.mapIframe && (
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div dangerouslySetInnerHTML={{ __html: location.mapIframe }} />
          </div>
        )}

        {/* Image Gallery / Featured Image */}
        <div className="mt-16 aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={location.image} 
            alt={location.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
};


const InstagramFeed = () => {
  return (
    <section className="relative mt-[5px] py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a9ef54bffadf30dfba3a8d.png" 
          alt="Social Background" 
          className="w-full h-full object-cover object-[center_25%]"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay to ensure social icons remain visible and match the brand theme */}
        <div className="absolute inset-0 bg-itamae-green/80" />
      </div>

      <div className="max-w-[1800px] mx-auto px-2 md:px-4 relative z-10">
        {/* Profile Headers */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-2">
          {/* Instagram Profile */}
          <div className="flex flex-col items-center gap-4 text-center">
            <a 
              href="https://www.instagram.com/itamaesushibar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              <div className="relative w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-itamae-blue flex items-center justify-center">
                <Instagram size={28} className="text-white" />
              </div>
            </a>
            <div className="flex flex-col items-center gap-3">
              <a 
                href="https://www.instagram.com/itamaesushibar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold text-xl tracking-widest uppercase hover:text-purple-400 transition-colors"
              >
                itamaesushibar
              </a>
              <a 
                href="https://www.instagram.com/itamaesushibar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded-full text-[11px] font-bold transition-all hover:scale-105"
              >
                Följ oss
              </a>
            </div>
          </div>

          {/* Facebook Profile */}
          <div className="flex flex-col items-center gap-4 text-center">
            <a 
              href="https://www.facebook.com/itamaeOfficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              <div className="relative w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-[#1877F2] flex items-center justify-center">
                <Facebook size={28} className="text-white" />
              </div>
            </a>
            <div className="flex flex-col items-center gap-3">
              <a 
                href="https://www.facebook.com/itamaeOfficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold text-xl tracking-widest uppercase hover:text-[#00c6ff] transition-colors"
              >
                itamaeOfficial
              </a>
              <a 
                href="https://www.facebook.com/itamaeOfficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded-full text-[11px] font-bold transition-all hover:scale-105"
              >
                Följ oss
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const row1 = [
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fa0d841496d7.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8df03354631c.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702fccdd431e02.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fae6b91496db.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702fc576431e00.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fab5b01496de.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38eaefc96d3d.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d636e546320.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d1e1d54631b.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003faf4f81496dc.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d572c54631e.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fa81fc1496e0.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf388521c96d34.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb2a27497a3ed89d3.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fa6cd81496dd.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf3863e2c96d3e.webp"
  ];

  const row2 = [
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8de917546323.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38d713c96d37.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8dce6c546322.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf381f13c96d3f.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf383207c96d38.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38c71dc96d41.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb2a2748a69ed89d7.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf384b53c96d35.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf3811c3c96d43.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb2a2748fc4ed89d6.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38ab90c96d40.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb2a2744655ed89d4.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb2a274d3abed89d5.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38214fc96d42.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702f4f64431dff.webp",
    "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d39f354631d.webp"
  ];

  return (
    <section className="bg-itamae-cream py-16 overflow-hidden">
      <div className="flex flex-col gap-6">
        {/* Row 1 - Left */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 80, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 pr-4"
          >
            {[...row1, ...row1].map((img, i) => (
              <div key={i} className="w-64 md:w-80 aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 80, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 pr-4"
          >
            {[...row2, ...row2].map((img, i) => (
              <div key={i} className="w-64 md:w-80 aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      name: "Gabriella",
      text: "Alla bitar jag valde stämde helt. Blev inget kvar på tallriken efter då det var så fantastiskt gott🍣😋 Ett plus var också chilimajo som följde med. Gav en extra god krydda på sushin, mums. Hos Itamae kommer det ätas fler gånger till 😁"
    },
    {
      name: "Anna",
      text: "Fantastisk upplevelse! Sushin var otroligt fräsch och vackert upplagd. Personalen var mycket tillmötesgående och skapade en välkomnande atmosfär. Vi kommer definitivt tillbaka snart!"
    },
    {
      name: "Camilla Murray",
      text: "Me and my family eat there often and we have NO DOUBT when we order take-in food: ALWAYS ITAMAE! Not only the quality and deliciousness of the food, service is GREAT!!!!!"
    },
    {
      name: "Stas Krupenia",
      text: "Visited for lunch on a Sunday. Very uncrowded. Excellent staff, friendly and attentive. Ordered bibimap and chicken pokebowl (both recommended by waiter), both were excellent. Place was clean, service quick, food fresh and very tasty. Easy with kids too."
    },
    {
      name: "S",
      text: "Absolutely outstanding take-away sushi joint, far above average presentation, flavour and quality at a fair price. Also great to see that this high level of service exists in Sweden. We were blown away. My girl friend is gluten intolerant and the incredibly friendly and well-informed lady behind the counter guided us seamlessly and suggested the best alternatives for us. Impressed! Well-deserved five stars; this made our day and weekend. Thank you - we will be back!"
    },
    {
      name: "Tom Softy",
      text: "I’m starting to visit this place regularly. Always good service and the food is above average in the area. Really nice offers during weekdays after work hours. Perfect place for sushi lovers and burger lovers to dine together."
    },
    {
      name: "Пясецький Даніїл",
      text: "Very tasty bowls and the portions are humongous!!! Sushi is also nice. Moreover, service is quite fast."
    },
    {
      name: "Farzad Ahmed",
      text: "Me and my fiancee have only tried their bibimbap with salmon, but that's just enough because it is so good! Their service is also great and they're always attentive to our needs. In short, great food and great service!"
    },
    {
      name: "Allan Yacoub",
      text: "Good sushi with very friendly staff who are happy to make sure you get a plate with exactly the sushi pieces you want. Happy to see solutions instead of problems."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="bg-itamae-cream pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 min-h-[300px] flex flex-col justify-center">
        <div className="text-itamae-green/20 text-8xl font-serif h-12 flex items-center justify-center">“</div>
        
        <div className="relative min-h-[320px] md:min-h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="space-y-6">
                <p className="text-xl md:text-2xl font-medium leading-tight text-balance italic">
                  {reviews[currentIndex].text}
                </p>
                <div className="pt-2">
                  <span className="font-bold text-sm tracking-widest uppercase">{reviews[currentIndex].name}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 pt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-300 rounded-full ${i === currentIndex ? "w-8 bg-itamae-red" : "w-4 bg-itamae-green/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OrderCTA = () => {
  const navigate = useNavigate();
  
  const scrollToLocations = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-itamae-cream overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-stretch min-h-[500px] md:h-[320px]">
        {/* Image Container */}
        <div className="relative w-full md:w-[65%] h-[300px] md:h-auto">
          <img 
            src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a9a87ade2e7dbc01631482.jpg" 
            alt="Sushi Table" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Mobile Gradient (Bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-40% to-itamae-cream md:hidden" />
          {/* Desktop Gradient (Right) - Extremely smooth and long fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent via-20% to-itamae-cream hidden md:block" />
        </div>
        
        {/* Content Container */}
        <div className="w-full md:w-[45%] md:absolute md:right-0 md:top-0 md:h-full flex items-center z-10">
          <div className="px-8 py-12 md:px-16 md:py-0 w-full">
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-itamae-charcoal mb-4">
                Takeaway eller ät på plats
              </span>
              
              <h2 className="font-serif text-[38px] md:text-[52px] text-itamae-charcoal font-bold leading-[1.05] mb-1">
                Sushisugen?
              </h2>
              <h2 className="font-serif text-[38px] md:text-[52px] text-itamae-charcoal font-bold leading-[1.05] mb-6">
                Beställ smidigt!
              </h2>
              
              <p className="text-itamae-charcoal/80 text-[13px] md:text-[14px] leading-relaxed mb-8 max-w-[380px]">
                Fantastisk sushi är inte långt borta. Snabbt och enkelt – beställ direkt på vår webb.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToLocations}
                className="bg-itamae-red text-white px-12 py-3.5 rounded-full text-[14px] font-bold transition-all hover:brightness-110 shadow-lg shadow-blue-900/10"
              >
                Beställ
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToLocations = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-itamae-green text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Itamae Sushi och hållbarhet</span>
          <h2 className="text-3xl font-bold mt-4">Hållbarhet och samarbeten</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <img 
                src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69515d58ee104796b003ea6f.png" 
                alt="Itamae Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-bold text-sm uppercase tracking-widest">Länkar</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button 
                  onClick={scrollToLocations} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Restauranger
                </button>
              </li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-bold text-sm uppercase tracking-widest">Kontakt</h4>
            <p className="text-sm text-white/60">info@itamae.se</p>
            <p className="text-sm text-white/60">Odengatan 62 <br /> 113 22 Stockholm</p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-sm uppercase tracking-widest text-center md:text-left">Följ oss</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/itamaeOfficial/" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-white/60 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/itamaesushibar/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-white/60 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/40 uppercase tracking-widest">
          <div>© Itamae Sushi 2026</div>
          <a 
            href="https://synsnumedia.se/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Powered by SynsNu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ContentSlider />
              <Locations />
              <InstagramFeed />
              <PhotoGallery />
              <Testimonial />
              <OrderCTA />
            </>
          } />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/vilkor" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
