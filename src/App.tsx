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
import { useState, useEffect, useLayoutEffect, useRef } from "react";
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
      className="group flex-shrink-0 w-[300px] md:w-[420px] block"
    >
      {/* Landscape Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Text below image */}
      <div className="flex items-start justify-between mt-4 px-1">
        <div>
          <h3 className="text-itamae-red font-bold text-[14px] md:text-[16px] uppercase tracking-wide leading-tight mb-1.5">
            {location.name}
          </h3>
          <div className="flex items-center gap-1.5 text-itamae-red/50 text-[11px] uppercase tracking-wide">
            <MapPin size={10} className="text-itamae-red flex-shrink-0" />
            <span>{location.address}</span>
          </div>
        </div>
        <ArrowRight size={16} className="text-itamae-red/40 group-hover:text-itamae-red group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5 ml-2" />
      </div>
    </Link>
  );
};

const KontaktPage = () => (
  <div className="pt-32 pb-24 bg-zinc-100 min-h-screen">
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-itamae-charcoal/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-2">Hör av dig till oss</span>
        <h1 className="font-serif text-4xl md:text-6xl text-itamae-charcoal font-bold italic">Kontakt</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Left Column: General Info & Socials */}
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5 space-y-10 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-itamae-charcoal/60 mb-4">E-post</h3>
              <motion.a
                href="mailto:info@itamae.se"
                className="text-2xl md:text-4xl font-serif italic text-itamae-charcoal hover:text-itamae-red transition-colors break-words block"
                whileHover={{ x: 4 }}
              >
                info@itamae.se
              </motion.a>
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
        </motion.div>

        {/* Right Column: Restaurant Phone Numbers */}
        <motion.div
          className="bg-itamae-green p-8 md:p-12 rounded-3xl shadow-xl text-white"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-10 text-center md:text-left">Våra restauranger</h3>
          <div className="space-y-2 md:space-y-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 last:border-0 gap-4 text-center md:text-left"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease: "easeOut" }}
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif italic text-xl md:text-2xl">{loc.name}</h4>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest mt-2">{loc.address}</p>
                </div>
                <motion.a
                  href={`tel:${loc.phone.replace(/\s/g, '')}`}
                  className="font-mono text-lg md:text-xl hover:text-itamae-red transition-colors whitespace-nowrap bg-white/10 px-4 py-2 rounded-full md:bg-transparent md:p-0"
                  whileHover={{ x: 4 }}
                >
                  {loc.phone}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
            a: "Ja, under respektive restaurang finner ni knappen 'Takeaway & Delivery' som länkar till beställningssidan."
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
              <motion.button
                onClick={scrollToLocations}
                className="hover:text-white transition-colors cursor-pointer"
                whileHover={{ y: -1 }}
              >
                Restauranger
              </motion.button>
              <motion.div whileHover={{ y: -1 }}>
                <Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
              </motion.div>
              <motion.div whileHover={{ y: -1 }}>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </motion.div>
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
      {/* Parallax video */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d572c54631e.webp"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d40bffadf054085a170.mov" type="video/quicktime" />
          <source src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a89d40bffadf054085a170.mov" type="video/mp4" />
          <img src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d572c54631e.webp" alt="Sushi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </video>
      </motion.div>

      {/* Very subtle bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Est. 2000 – top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-8 right-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]"
      >
        Est. 2000
      </motion.div>

      {/* Main content – bottom left */}
      <div className="relative h-full flex flex-col justify-end px-8 md:px-16 pb-20 md:pb-24">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white/50 text-[11px] font-bold uppercase tracking-[0.35em] mb-4 block"
        >
          Sushi restaurang
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-serif italic font-bold leading-[0.92] mb-10"
          style={{ fontSize: "clamp(64px, 11vw, 148px)" }}
        >
          Smaken<br />av Japan.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <button
            onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/60 text-white px-10 py-3.5 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-itamae-green transition-all duration-300"
          >
            Hitta restaurang
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator – bottom right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 right-8 md:right-16 flex flex-col items-center gap-2 text-white/40"
      >
        <div className="w-px h-12 bg-white/30" />
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold" style={{ writingMode: "vertical-rl" }}>Scroll</span>
      </motion.div>
    </section>
  );
};

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      subtitle: "Sushi & Bowls & Mer",
      title: "Mer än bara sushi.",
      body: "Hos Itamae hittar du allt från klassisk nigiri och maki till smakrika bowls, shakemushi och asiatiska rätter. Något för alla – lagat med omsorg sedan år 2000.",
      button: "Se vår meny",
      image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fa0d841496d7.webp",
      imageType: "square"
    },
    {
      subtitle: "Sedan 2000",
      title: "Välkommen till Itamae.",
      body: "Itamae betyder köksmaster på japanska – och det är precis vad vi strävar efter att vara. Sedan vi öppnade våra dörrar år 2000 har vi serverat sushi av högsta klass i en stilren och avslappnad miljö.",
      button: "Om oss",
      image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8df03354631c.webp",
      imageType: "square"
    },
    {
      subtitle: "Stockholm",
      title: "Fem restauranger – en och samma passion.",
      body: "Besök oss på Kungsholmen, Odengatan, Hagastaden, Sundbyberg eller Danderyd. Oavsett var du är i Stockholm finns Itamae nära dig.",
      button: "Hitta din restaurang",
      image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702fccdd431e02.webp",
      imageType: "square"
    },
    {
      subtitle: "Beställ online",
      title: "Itamae – när du vill, var du vill.",
      body: "Beställ enkelt via Qopla, Foodora, Wolt eller Uber Eats. Njut av din favoritrulle hemma, på jobbet eller var du än befinner dig.",
      button: "Beställ nu",
      image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fae6b91496db.webp",
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
    <section className="bg-itamae-green overflow-hidden">
      <div className="relative min-h-[560px] md:min-h-[640px] flex flex-col md:flex-row">
        {/* Left: Image panel */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* Right: Text panel */}
        <div className="w-full md:w-1/2 bg-itamae-green flex flex-col justify-between px-10 md:px-16 py-14 md:py-20">
          {/* Slide counter */}
          <div className="flex items-center justify-between mb-auto">
            <span className="text-white/20 text-[11px] font-bold uppercase tracking-[0.3em]">
              {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-6 flex-1 flex flex-col justify-center py-10"
            >
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
                {slides[currentSlide].subtitle}
              </span>
              <h2 className="text-white font-serif italic font-bold leading-[1.05]" style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>
                {slides[currentSlide].title}
              </h2>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed max-w-sm">
                {slides[currentSlide].body}
              </p>
              <div>
                <button
                  onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-white/30 text-white px-8 py-3 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-itamae-green transition-all duration-300 mt-2"
                >
                  {slides[currentSlide].button}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="flex gap-1.5 ml-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-px transition-all duration-400 ${i === currentSlide ? "w-8 bg-white" : "w-4 bg-white/25"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section id="locations" className="bg-itamae-cream">
      <div className="flex flex-col md:flex-row min-h-[600px]">

        {/* Left: editorial list */}
        <div className="w-full md:w-1/2 px-8 md:px-16 py-20 md:py-28 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-itamae-green/40 text-[11px] font-bold uppercase tracking-[0.35em]">Våra restauranger</span>
            <h2 className="text-itamae-green text-3xl md:text-4xl font-bold mt-3 tracking-tight">Hitta ditt Itamae</h2>
          </motion.div>

          <div className="divide-y divide-itamae-green/10">
            {locations.map((loc, i) => (
              <Link key={loc.id} to={`/location/${loc.id}`}>
                <motion.div
                  className="group flex items-center justify-between py-5 md:py-6 cursor-pointer"
                  onHoverStart={() => setHoveredIndex(i)}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-itamae-green/25 text-[11px] font-bold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="text-itamae-green font-bold text-[22px] md:text-[30px] uppercase tracking-wide leading-none group-hover:text-itamae-red transition-colors duration-200">
                        {loc.name}
                      </span>
                      <p className="text-itamae-green/40 text-[11px] uppercase tracking-widest mt-1">{loc.address}</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-itamae-green/20 group-hover:text-itamae-red transition-colors duration-200 flex-shrink-0" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: image panel – hidden on mobile */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={hoveredIndex}
              src={locations[hoveredIndex].image}
              alt={locations[hoveredIndex].name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-itamae-green/20" />
          </AnimatePresence>
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
    <section className="relative overflow-hidden bg-itamae-green py-28 md:py-40">
      {/* Subtle food image background */}
      <div className="absolute inset-0">
        <img
          src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a9ef54bffadf30dfba3a8d.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center">
        {/* Label */}
        <motion.span
          className="text-white/40 text-[11px] font-bold uppercase tracking-[0.35em] block mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Följ med bakom kulisserna
        </motion.span>

        {/* Big handle */}
        <motion.a
          href="https://www.instagram.com/itamaesushibar/"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-serif italic text-white leading-none hover:text-white/80 transition-colors duration-300"
          style={{ fontSize: "clamp(42px, 8vw, 110px)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          @itamaesushibar
        </motion.a>

        {/* Divider line */}
        <motion.div
          className="w-px h-12 bg-white/20 mx-auto my-10"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Two CTA links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://www.instagram.com/itamaesushibar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-white/25 text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-itamae-green transition-all duration-300"
          >
            <Instagram size={14} />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/itamaeOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-white/25 text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-itamae-green transition-all duration-300"
          >
            <Facebook size={14} />
            Facebook
          </a>
        </motion.div>
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
      text: "I'm starting to visit this place regularly. Always good service and the food is above average in the area. Really nice offers during weekdays after work hours. Perfect place for sushi lovers and burger lovers to dine together."
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
    <section className="bg-itamae-green relative overflow-hidden py-32 md:py-48">
      {/* Decorative large quote mark */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-white/5 font-serif select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 28vw, 320px)" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative max-w-4xl mx-auto px-8 md:px-16 text-center">
        <div className="relative min-h-[280px] md:min-h-[220px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full space-y-8"
            >
              <p
                className="text-white font-serif italic leading-[1.3] text-balance"
                style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
              >
                "{reviews[currentIndex].text}"
              </p>
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.35em] block">
                — {reviews[currentIndex].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-px transition-all duration-300 ${i === currentIndex ? "w-8 bg-white" : "w-4 bg-white/20"}`}
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
    <section className="bg-itamae-cream py-10 md:py-16 px-10 md:px-16">
      <div className="relative overflow-hidden rounded-2xl min-h-[260px] md:min-h-[360px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69a9a87ade2e7dbc01631482.jpg"
          alt="Sushi Table"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content – centered */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-6 py-14 md:py-20"
        >
          <h2 className="text-[44px] md:text-[72px] text-white font-bold leading-[1.05] mb-8 max-w-[800px] uppercase">
            Sushi som smakar mer än vanligt. Beställ smidigt online.
          </h2>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToLocations}
            className="bg-white text-itamae-charcoal px-10 py-3 rounded-full text-[14px] font-semibold transition-all hover:bg-white/90 shadow-md"
          >
            Beställ nu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const newsArticles = [
  {
    id: 1,
    slug: "ny-plats-stockholm",
    tag: "Nyhet",
    date: "20 mars 2026",
    title: "Itamae öppnar på ny plats i Stockholm",
    excerpt: "Vi är glada att kunna meddela att Itamae snart öppnar en ny restaurang i hjärtat av Stockholm. En ny destination för sushiälskare i stan.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b36702fc576431e00.webp",
    featured: true,
    content: [
      "Vi är otroligt glada att kunna dela med oss av den spännande nyheten att Itamae snart öppnar ytterligare en restaurang i Stockholm. Den nya platsen kommer att ligga centralt och vara lättillgänglig för alla som älskar vår sushi.",
      "Precis som på våra övriga restauranger kommer den nya platsen att erbjuda hela vår meny – från klassisk nigiri och maki till smakrika bowls och shakemushi. Inredningen följer Itamaes stilrena estetik med en varm och välkomnande atmosfär.",
      "Datum för öppning och exakt adress kommer att tillkännages inom kort. Följ oss på Instagram och Facebook för att vara den första att få veta mer.",
    ],
  },
  {
    id: 2,
    slug: "var-meny-2026",
    tag: "Meny",
    date: "5 mars 2026",
    title: "Ny vårmeny med japanska smaker",
    excerpt: "Upplev vårens bästa råvaror i vår nya säsongsmeny – inspirerad av japansk tradition och svenska smaker.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515bb003fab5b01496de.webp",
    featured: false,
    content: [
      "Med våren i luften lanserar vi en ny säsongsmeny som kombinerar japanska råvaror med det bästa från det svenska köket. Menyn är framtagen av våra kockar med fokus på friska smaker och hög kvalitet.",
      "Bland nyheterna hittar du bland annat vår nya vår-poke bowl med grillad lax, edamame och en lätt sesamdressing, samt ett urval av säsongsanpassade nigiri med lokalt inspirerade toppings.",
      "Vårmenyn finns tillgänglig på alla våra restauranger från och med den 5 mars. Välkommen att smaka!",
    ],
  },
  {
    id: 3,
    slug: "mot-vara-kockar",
    tag: "Bakom kulisserna",
    date: "15 feb 2026",
    title: "Möt våra kockar",
    excerpt: "Bakom varje rulle och varje bowl finns ett dedikerat team av kockar som brinner för japansk matkultur. Vi presenterar några av hjärnorna bakom Itamae.",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b7bdf38eaefc96d3d.webp",
    featured: false,
    content: [
      "På Itamae är maten mer än bara en produkt – den är resultatet av passion, precision och många års erfarenhet. Våra kockar kommer från olika bakgrunder men delar en sak: en djup kärlek till japansk matkultur.",
      "Köksmästare på våra restauranger har utbildat sig i Japan och Sverige, och de kombinerar traditionella tekniker med moderna presentationer. Varje rät som lämnar vårt kök har genomgått samma noggranna kontroll och omsorg.",
      "Vi är stolta över att ha ett team som hela tiden utmanar sig självt och strävar efter att ge gästerna en upplevelse utöver det vanliga – varje dag.",
    ],
  },
  {
    id: 4,
    slug: "25-ar",
    tag: "Jubileum",
    date: "1 jan 2026",
    title: "Itamae firar 25 år",
    excerpt: "År 2000 öppnade Itamae sina dörrar för första gången. Nu firar vi 25 år av sushi, glädje och fantastiska gäster. Tack för att ni följt oss!",
    image: "https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69ac515b618c8d636e546320.webp",
    featured: false,
    content: [
      "Det är svårt att tro att det redan gått 25 år sedan vi öppnade den första Itamae-restaurangen. Det som började som en liten sushibar har vuxit till fem restauranger runt om i Stockholm-regionen – och resan har bara börjat.",
      "Under dessa 25 år har vi serverat hundratusentals gäster, lanserat otaliga menyer och byggt ett team som vi är otroligt stolta över. Det är ni – våra trogna gäster – som gjort allt detta möjligt.",
      "För att fira jubileet planerar vi en rad specialevenemang och begränsade menyer under 2026. Håll utkik på vår hemsida och sociala medier för mer information. Skål för 25 år – och för många fler!",
    ],
  },
];

const LatestNews = () => {
  return (
    <section className="bg-itamae-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-itamae-green/40 block mb-3">Senaste nytt</span>
            <h2 className="font-serif italic text-itamae-green leading-tight" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
              Nyheter & uppdateringar
            </h2>
          </div>
          <Link
            to="/nyheter"
            className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-itamae-green/50 hover:text-itamae-green transition-colors group"
          >
            Alla nyheter
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={article.featured ? "md:col-span-2" : "md:col-span-1"}
            >
              <Link to={`/nyheter/${article.slug}`} className="group block">
                {/* Image */}
                <div className={`overflow-hidden ${article.featured ? "aspect-[21/9]" : "aspect-[16/9]"} mb-5`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-itamae-green text-white text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">
                    {article.tag}
                  </span>
                  <span className="text-itamae-gray text-[11px]">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif italic text-itamae-green mb-2 leading-snug" style={{ fontSize: article.featured ? "clamp(20px, 2.5vw, 30px)" : "clamp(17px, 2vw, 22px)" }}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-itamae-gray text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-itamae-green group-hover:gap-3 transition-all duration-200">
                  Läs mer
                  <ArrowRight size={12} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile "Alla nyheter" */}
        <div className="mt-10 md:hidden">
          <Link to="/nyheter" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-itamae-green/50 hover:text-itamae-green transition-colors group">
            Alla nyheter
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-itamae-cream flex items-center justify-center">
        <div className="text-center">
          <p className="text-itamae-green/50 text-sm mb-4">Inlägg hittades inte</p>
          <Link to="/nyheter" className="text-itamae-green font-bold underline">Tillbaka till nyheter</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-itamae-cream pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Back button */}
        <button
          onClick={() => navigate("/nyheter")}
          className="flex items-center gap-2 text-itamae-green/50 hover:text-itamae-green mb-10 transition-colors group text-[12px] font-bold uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Tillbaka till nyheter
        </button>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="aspect-[21/9] overflow-hidden mb-8"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="bg-itamae-green text-white text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">
            {article.tag}
          </span>
          <span className="text-itamae-gray text-[11px]">{article.date}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-serif italic text-itamae-green leading-tight mb-8"
          style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
        >
          {article.title}
        </motion.h1>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl space-y-5"
        >
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-itamae-gray leading-relaxed text-[15px]">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Bottom link */}
        <div className="mt-16 pt-10 border-t border-itamae-green/10">
          <Link
            to="/nyheter"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-itamae-green/50 hover:text-itamae-green transition-colors group"
          >
            Fler nyheter
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const NewsArchive = () => {
  return (
    <div className="min-h-screen bg-itamae-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-itamae-green/40 block mb-3">Nyheter</span>
          <h1 className="font-serif italic text-itamae-green leading-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Alla nyheter
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsArticles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link to={`/nyheter/${article.slug}`} className="group block">
                <div className="overflow-hidden aspect-[16/9] mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-itamae-green text-white text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">
                    {article.tag}
                  </span>
                  <span className="text-itamae-gray text-[11px]">{article.date}</span>
                </div>
                <h2 className="font-serif italic text-itamae-green mb-2 leading-snug" style={{ fontSize: "clamp(17px, 2vw, 22px)" }}>
                  {article.title}
                </h2>
                <p className="text-itamae-gray text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-itamae-green group-hover:gap-3 transition-all duration-200">
                  Läs mer
                  <ArrowRight size={12} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
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

  const footerCols = [
    {
      delay: 0,
      content: (
        <img
          src="https://assets.cdn.filesafe.space/1FYpgqYgXr6SzFnCzKew/media/69515d58ee104796b003ea6f.png"
          alt="Itamae Logo"
          className="h-16 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      ),
    },
    {
      delay: 0.08,
      content: (
        <>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-5">Restauranger</h4>
          <ul className="space-y-3">
            {locations.map((loc) => (
              <li key={loc.id}>
                <Link to={`/location/${loc.id}`} className="text-white/60 text-[13px] hover:text-white transition-colors">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      delay: 0.16,
      content: (
        <>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-5">Länkar</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/nyheter" className="text-white/60 text-[13px] hover:text-white transition-colors">Nyheter</Link>
            </li>
            <li>
              <Link to="/kontakt" className="text-white/60 text-[13px] hover:text-white transition-colors">Kontakt</Link>
            </li>
            <li>
              <Link to="/faq" className="text-white/60 text-[13px] hover:text-white transition-colors">FAQ</Link>
            </li>
          </ul>
        </>
      ),
    },
    {
      delay: 0.24,
      content: (
        <>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-5">Kontakt</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@itamae.se" className="text-white/60 text-[13px] hover:text-white transition-colors">info@itamae.se</a>
            </li>
            <li className="text-white/60 text-[13px]">Stockholm, Sverige</li>
          </ul>
        </>
      ),
    },
    {
      delay: 0.32,
      content: (
        <>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-5">Följ oss</h4>
          <div className="flex gap-4">
            <motion.a href="https://www.facebook.com/itamaeOfficial/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Facebook size={18} className="text-white/40 hover:text-white transition-colors" />
            </motion.a>
            <motion.a href="https://www.instagram.com/itamaesushibar/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Instagram size={18} className="text-white/40 hover:text-white transition-colors" />
            </motion.a>
          </div>
        </>
      ),
    },
  ];

  return (
    <motion.footer
      className="bg-itamae-green text-white py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 border-t border-white/10 pt-12">
          {footerCols.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: col.delay }}
            >
              {col.content}
            </motion.div>
          ))}
        </div>
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/40 uppercase tracking-widest">
          <div>© Itamae Sushi 2026</div>
          <a href="https://synsnumedia.se/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Powered by SynsNu
          </a>
        </div>
      </div>
    </motion.footer>
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
              <Locations />
              <ContentSlider />
              <InstagramFeed />
              <PhotoGallery />
              <Testimonial />
              <OrderCTA />
            </>
          } />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/nyheter" element={<NewsArchive />} />
          <Route path="/nyheter/:slug" element={<BlogDetail />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/vilkor" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
