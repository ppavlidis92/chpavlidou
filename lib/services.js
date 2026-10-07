export const serviceCategories = [
  {
    slug: "face",
    title: "Face",
    menuLabel: "Face",
    summary: "Expression lines, hydration, renewal, and refined facial balance.",
    description:
      "Personalized facial treatments for expression lines, skin quality, hydration, glow, and natural balance.",
    treatments: [
      {
        name: "Botox / neuromodulators",
        description:
          "Relaxes targeted facial muscles to soften expression lines on the forehead, brows, and around the eyes, while keeping natural movement.",
      },
      {
        name: "Hyaluronic fillers",
        description:
          "Restores volume and defines contours in the cheeks, lips, or jawline using smooth, biocompatible hyaluronic acid.",
      },
      {
        name: "Skin boosters",
        description:
          "Micro-injections of hydrating hyaluronic acid that improve skin elasticity, radiance, and overall texture from within.",
      },
      {
        name: "Mesotherapy",
        description:
          "A tailored blend of vitamins, antioxidants, and nutrients delivered into the skin to boost hydration and glow.",
      },
      {
        name: "Chemical peels",
        description:
          "Controlled exfoliation that refines texture, fades dullness, and supports a brighter, more even complexion.",
      },
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
    treatments: [
      {
        name: "Cellulite protocols",
        description:
          "Targeted sessions that improve skin texture and circulation to visibly reduce the appearance of cellulite.",
      },
      {
        name: "Firming treatments",
        description:
          "Non-invasive technology that stimulates collagen to tighten and firm loose or lax body skin.",
      },
      {
        name: "Stretch mark support",
        description:
          "Resurfacing and regenerative techniques that soften the appearance of stretch marks over a series of sessions.",
      },
      {
        name: "Localized contour support",
        description:
          "Treatments aimed at stubborn areas to support a smoother, more defined body contour.",
      },
      {
        name: "Body hydration",
        description:
          "Deep hydration protocols that restore softness and elasticity to dry or dehydrated body skin.",
      },
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
    treatments: [
      {
        name: "Laser hair removal",
        description:
          "Long-term reduction of unwanted hair using medical-grade laser technology suited to your skin and hair type.",
      },
      {
        name: "Pigmentation treatment",
        description:
          "Targets sun spots, melasma, and uneven pigmentation to help restore a more uniform skin tone.",
      },
      {
        name: "Vascular lesions",
        description:
          "Laser treatment for visible blood vessels, redness, and small vascular marks on the face or body.",
      },
      {
        name: "Acne scars",
        description:
          "Resurfacing laser sessions that soften the texture and visibility of acne scarring over time.",
      },
      {
        name: "Skin rejuvenation",
        description: "Stimulates collagen renewal to improve tone, texture, and overall skin quality.",
      },
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
    treatments: [
      {
        name: "Dermatology visit",
        description:
          "A full clinical assessment of your skin, concerns, and medical history to guide diagnosis and treatment.",
      },
      {
        name: "Mole check / dermoscopy",
        description:
          "Detailed examination of moles and skin lesions using dermoscopy to screen for changes early.",
      },
      {
        name: "Acne treatment plan",
        description:
          "A personalized plan combining medical and topical approaches to manage active acne and prevent scarring.",
      },
      {
        name: "Rosacea / eczema review",
        description:
          "Assessment and management planning for chronic redness, sensitivity, or inflammatory skin conditions.",
      },
      {
        name: "Follow-up visit",
        description:
          "A review appointment to monitor progress, adjust treatment, and answer any ongoing questions.",
      },
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
    treatments: [
      {
        name: "Hair loss evaluation",
        description:
          "An in-depth review of hair thinning or loss patterns to identify likely causes and next steps.",
      },
      {
        name: "Scalp care plan",
        description:
          "A personalized routine to address scalp irritation, buildup, or sensitivity for healthier hair growth.",
      },
      {
        name: "Alopecia support",
        description: "Clinical guidance and treatment options tailored to different types of alopecia.",
      },
      {
        name: "Seborrheic dermatitis review",
        description:
          "Diagnosis and management of flaking, irritation, or inflammation affecting the scalp.",
      },
      {
        name: "Long-term follow-up",
        description:
          "Ongoing monitoring to track progress and adjust your hair and scalp treatment plan over time.",
      },
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
