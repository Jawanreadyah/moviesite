import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define logo data for better maintainability
const logoData = [
  // First row
  [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Haier_logo.svg/1200px-Haier_logo.svg.png",
      alt: "LG logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Roku_logo.svg/1200px-Roku_logo.svg.png",
      alt: "Chromecast logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/14Qpn9Cp5p8lIexWhF7uaV/71731985b76bc84c28c3b0edd2a1bb19/image.png?fm=webp&q=100",
      alt: "Sony logo",
      size: "h-8 md:h-10"
    }
  ],
  // Second row
  [
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/3vQjy8g0b80iQR4w79O86D/485ec563c076ada59c8552fa430bfac9/image.png?fm=webp&q=100",
      alt: "Apple TV logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/Rd2dB7hT8QsrxtVRZHkNy/983c98c2df39d05b5ee4f29ea3ca723d/image.png?fm=webp&q=100",
      alt: "Android TV logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/7E7C2FKfB1U9ARIeK0BXwK/7c1e4ff8d76ab915a43a2d8e971a4a8c/image.png?fm=webp&q=100",
      alt: "Google Play Store logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/20dPaFvrO37alFoKS7JSYf/ac653bfa40e505e71558139f63ff2e3a/image.png?fm=webp&q=100",
      alt: "App Store logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/756px-Panasonic_logo_%28Blue%29.svg.png?20160927050937",
      alt: "Amazon Fire TV logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/GQA6GXkhhtWyH1xuCfPIS/f2f5e69470faaf215c0c523ecc6f39bc/image.png?fm=webp&q=100",
      alt: "Xbox logo",
      size: "h-8 md:h-10"
    },
    {
      src: "https://contentful-asset-proxy.sd.indazn.com/vhp9jnid12wf/5l9wMSAavKpexZIUueBZak/e04e9d95545e6eb2d7b7ea33700bee47/hisense_logo_white.png?fm=webp&q=100",
      alt: "Hisense logo",
      size: "h-8 md:h-10"
    }
  ]
];

export function DeviceCompatibility() {
  // Add state for image loading
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Set images as loaded after component mounts
  useEffect(() => {
    setImagesLoaded(true);
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Watch on your favourite devices.
            <br />
            <span className="text-yellow-400">Anytime. Anywhere.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Whether you are at home or on the go, Viewplus is available on a wide range of mobile and
            connected devices including Smart TVs, Chromecast, Playstation, Xbox and more.
          </p>
        </motion.div>

        {/* Separator Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12 md:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white/90">
            Our leading supported devices
          </h3>

          {/* Map through logo data array to render both rows */}
          {logoData.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (rowIndex * 0.2) }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8 flex-wrap"
            >
              {row.map((logo, logoIndex) => (
                <img
                  key={`logo-${rowIndex}-${logoIndex}`}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.size} max-w-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300`}
                  loading="lazy"
                />
              ))}
            </motion.div>
          ))}

          {/* Support Link */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-white/60 text-base md:text-lg"
          >
            For more information see our full list of{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline decoration-blue-400/50 hover:decoration-blue-300"
            >
              supported devices
            </a>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}