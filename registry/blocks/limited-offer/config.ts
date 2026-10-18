import type { ControlConfig } from "@/registry/lib/customizer-config";

export const limitedOfferConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  code: { default: "SAVE50", label: "Coupon Code", type: "text" },
  description: {
    default:
      "Get lifetime access to all components, templates, and future updates at half the price.",
    label: "Description",
    type: "textarea",
  },
  discount: { default: "50% OFF", label: "Discount", type: "text" },
  endsIn: { default: "Ends in 48 hours", label: "Ends In", type: "text" },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "Special Limited Offer",
    label: "Title",
    type: "text",
  },
};
