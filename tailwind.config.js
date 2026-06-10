export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#060712",
        surface: "#11141d",
        surface2: "#161a2b",
        primary: "#7c5cff",
        accent: "#22d3ee",
        muted: "#8b95ad",
      },
      boxShadow: {
        glow: "0 0 45px rgba(124, 92, 255, 0.2)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle at top, rgba(124, 92, 255, 0.2), transparent 30%), radial-gradient(circle at 20% 40%, rgba(34, 211, 238, 0.18), transparent 25%), radial-gradient(circle at 80% 10%, rgba(124, 92, 255, 0.14), transparent 20%)",
      },
    },
  },
  plugins: [],
};
