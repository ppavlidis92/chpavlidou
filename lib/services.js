export const serviceCategories = [
  {
    slug: "face",
    title: "Face",
    menuLabel: "Face",
    summary: "Expression lines, hydration, renewal, and refined facial balance.",
    description:
      "Personalized facial treatments for expression lines, skin quality, hydration, glow, and natural balance.",
    prices: [
      { name: "Botox / neuromodulators", price: "from EUR120" },
      { name: "Hyaluronic fillers", price: "from EUR180" },
      { name: "Skin boosters", price: "from EUR140" },
      { name: "Mesotherapy", price: "from EUR90" },
      { name: "Chemical peels", price: "from EUR80" },
    ],
    sections: [
      "Facial treatment planning starts with skin quality, expression, symmetry, and the kind of result that feels natural for you.",
      "The plan may include injectable, resurfacing, or hydration-based treatments depending on your skin and goals.",
    ],
  },
  {
    slug: "body",
    title: "Body",
    menuLabel: "Body",
    summary: "Body skin quality, firmness, texture, and contour-support treatments.",
    description:
      "Treatment plans for body skin quality, texture, firmness, stretch marks, and contour-support maintenance.",
    prices: [
      { name: "Cellulite protocols", price: "from EUR120" },
      { name: "Firming treatments", price: "from EUR110" },
      { name: "Stretch mark support", price: "from EUR130" },
      { name: "Localized contour support", price: "from EUR150" },
      { name: "Body hydration", price: "from EUR95" },
    ],
    sections: [
      "Body protocols are designed around skin texture, firmness, hydration, and realistic maintenance goals.",
      "A consultation helps choose the right combination of in-clinic treatments and home care support.",
    ],
  },
  {
    slug: "laser",
    title: "Laser",
    menuLabel: "Laser",
    summary: "Technology-led care for hair removal, tone, texture, and visible marks.",
    description:
      "Laser and technology-led treatments for hair removal, pigmentation, vascular marks, scars, and rejuvenation.",
    prices: [
      { name: "Laser hair removal", price: "from EUR45" },
      { name: "Pigmentation treatment", price: "from EUR90" },
      { name: "Vascular lesions", price: "from EUR80" },
      { name: "Acne scars", price: "from EUR140" },
      { name: "Skin rejuvenation", price: "from EUR120" },
    ],
    sections: [
      "Laser settings and timing are selected according to skin type, treatment area, and safety considerations.",
      "Some results need a sequence of visits, especially for hair removal, scars, pigmentation, and rejuvenation.",
    ],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    menuLabel: "Dermatology",
    summary: "Diagnosis and treatment for everyday and chronic skin conditions.",
    description:
      "Medical dermatology for acne, rosacea, eczema, psoriasis, mole checks, and long-term skin health.",
    prices: [
      { name: "Dermatology visit", price: "from EUR50" },
      { name: "Mole check / dermoscopy", price: "from EUR60" },
      { name: "Acne treatment plan", price: "from EUR70" },
      { name: "Rosacea / eczema review", price: "from EUR60" },
      { name: "Follow-up visit", price: "from EUR40" },
    ],
    sections: [
      "Medical visits focus first on diagnosis, then on a plan that is clear, practical, and easy to follow.",
      "When needed, review visits help adjust treatment and monitor progress over time.",
    ],
  },
  {
    slug: "hair",
    title: "Hair",
    menuLabel: "Hair",
    summary: "Scalp and hair-loss evaluation with targeted maintenance plans.",
    description:
      "Evaluation and support for hair loss, scalp irritation, seborrheic dermatitis, and maintenance planning.",
    prices: [
      { name: "Hair loss evaluation", price: "from EUR70" },
      { name: "Scalp care plan", price: "from EUR60" },
      { name: "Alopecia support", price: "from EUR80" },
      { name: "Seborrheic dermatitis review", price: "from EUR55" },
      { name: "Long-term follow-up", price: "from EUR40" },
    ],
    sections: [
      "Hair and scalp visits look at pattern, history, scalp condition, and the pace of change.",
      "The aim is a realistic plan with monitoring, treatment support, and clear follow-up timing.",
    ],
  },
];

export function getServiceCategory(slug) {
  return serviceCategories.find((category) => category.slug === slug);
}
