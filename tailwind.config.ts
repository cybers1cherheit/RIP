import { type Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        task: "#ffcc9a", // яркий оранжевый
        story: "#00c4b4", // насыщенный бирюзовый
        bug: "#ff0000", // неоново-фиолетовый
        epic: "#ffdd00", // яркий желтый
        inprogress: "#005eff", // чистый синий
        done: "#23c200", // зеленый лайм
        todo: "#9e9e9e", // нейтральный серый
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
