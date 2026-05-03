function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          subtle: withOpacity("--color-text-subtle"),
          "on-muted": withOpacity("--color-text-on-muted"),
          inverted: withOpacity("--color-text-inverted"),
          "hue-hover": withOpacity("--color-hue-hover"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          surface: withOpacity("--color-surface"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      colors: {
        skin: {
          hue: withOpacity("--color"),
          muted: withOpacity("--muted"),
        },
      },
      borderColor: {
        skin: {
          muted: withOpacity("--muted"),
          hue: withOpacity("--color"),
        },
      },
      ringColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          muted: withOpacity("--muted"),
          hue: withOpacity("--color"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
