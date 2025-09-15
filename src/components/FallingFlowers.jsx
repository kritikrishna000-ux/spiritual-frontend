import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FallingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const generateFlowers = () => {
      const newFlowers = [];
      for (let i = 0; i < 15; i++) {
        newFlowers.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 0.5 + Math.random() * 0.8,
          rotation: Math.random() * 360,
        });
      }
      setFlowers(newFlowers);
    };

    generateFlowers();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            top: "-10%",
          }}
          initial={{ y: -100, rotate: flower.rotation, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: flower.rotation + 360,
            opacity: [0, 1, 1, 0],
            x: [0, 30, -20, 10, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="relative"
            style={{
              transform: `scale(${flower.size})`,
            }}
          >
            {/* Cherry Blossom Petal */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="drop-shadow-sm"
            >
              <path
                d="M12 2C12 2 8 6 8 10C8 14 10 16 12 16C14 16 16 14 16 10C16 6 12 2 12 2Z"
                fill="url(#petal-gradient)"
                opacity="0.8"
              />
              <path
                d="M12 16C12 16 16 12 20 12C24 12 22 16 18 16C14 16 12 16 12 16Z"
                fill="url(#petal-gradient)"
                opacity="0.7"
              />
              <path
                d="M12 16C12 16 8 12 4 12C0 12 2 16 6 16C10 16 12 16 12 16Z"
                fill="url(#petal-gradient)"
                opacity="0.7"
              />
              <path
                d="M12 16C12 16 16 20 12 22C8 20 12 16 12 16Z"
                fill="url(#petal-gradient)"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="petal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fce7f3" />
                  <stop offset="50%" stopColor="#fbcfe8" />
                  <stop offset="100%" stopColor="#f9a8d4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-pink-300 opacity-30 blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FallingFlowers;