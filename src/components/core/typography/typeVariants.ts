import { cva } from "class-variance-authority";

export const typeVariants = cva("", {
  variants: {
    variant: {
      factoid: "typo_variant_factoid",
      h1: "typo_variant_h1",
      h2: "typo_variant_h2",
      h3: "typo_variant_h3",
      h4: "typo_variant_h4",
      h5: "typo_variant_h5",
      h6: "typo_variant_h6",
      "subtitle-1": "typo_variant_subtitle-1",
      "subtitle-2": "typo_variant_subtitle-2",
      overline: "typo_variant_overline",
      "lead-text": "typo_variant_lead-text",
      body: "typo_variant_body",
      "small-body": "typo_variant_small-body",
      caption: "typo_variant_caption",
      button: "typo_variant_button",
      link: "typo_variant_link",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
