import type { ControlConfig } from "@/registry/lib/customizer-config";

export const saleConfig: ControlConfig = {
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  coupon: { default: "SAVE40", label: "Coupon Code", type: "text" },
  dates: { default: "Nov 27–30, 2026", label: "Dates", type: "text" },
  discount: { default: "-40%", label: "Discount", type: "text" },
  event: {
    default: "Black Friday sale. Four days only.",
    label: "Event",
    type: "text",
  },
  logo: { default: "", label: "Logo", type: "image" },
  title: {
    default: "The OG image toolkit",
    label: "Title",
    type: "text",
  },
};
