// js/tailwind-config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface": "var(--surface)",
                "surface-variant": "var(--surface-variant)",
                "on-surface": "var(--on-surface)",
                "on-surface-variant": "var(--on-surface-variant)"
            },
            spacing: {
                "margin-desktop": "var(--margin-desktop)",
                "margin-mobile": "var(--margin-mobile)",
                "container-max": "var(--container-max)"
            },
            fontFamily: {
                "display-hero-mobile": ["Hanken Grotesk"],
                "body-md": ["Inter"],
                "headline-lg-mobile": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"],
                "label-mono": ["Geist"],
                "body-lg": ["Inter"],
                "display-hero": ["Hanken Grotesk"],
                "headline-lg": ["Hanken Grotesk"]
            },
            fontSize: {
                "display-hero-mobile": ["56px", { lineHeight: "110%", letterSpacing: "-0.02em", fontWeight: "700" }],
                "body-md": ["16px", { lineHeight: "160%", fontWeight: "400" }],
                "headline-lg-mobile": ["32px", { lineHeight: "120%", letterSpacing: "-0.01em", fontWeight: "600" }],
                "headline-md": ["24px", { lineHeight: "140%", fontWeight: "500" }],
                "label-mono": ["14px", { lineHeight: "100%", letterSpacing: "0.05em", fontWeight: "500" }],
                "body-lg": ["18px", { lineHeight: "160%", fontWeight: "400" }],
                "display-hero": ["120px", { lineHeight: "110%", letterSpacing: "-0.04em", fontWeight: "700" }],
                "headline-lg": ["48px", { lineHeight: "120%", letterSpacing: "-0.02em", fontWeight: "600" }]
            }
        }
    }
};