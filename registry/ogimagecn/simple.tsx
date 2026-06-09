export interface SimpleProps {
  label: string;
  title: string;
  description: string;
  brand: string;
  accent?: string;
}

export const Simple = ({
  label,
  title,
  description,
  brand,
  accent,
}: SimpleProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "96px",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        backgroundColor: "rgba(250,250,250,0.04)",
        border: "1px solid rgba(250,250,250,0.12)",
        borderRadius: "999px",
        color: "#d4d4d8",
        display: "flex",
        fontSize: "24px",
        fontWeight: 500,
        gap: "12px",
        letterSpacing: "0.04em",
        padding: "8px 18px",
        textTransform: "uppercase",
      }}
    >
      <div
        style={{
          backgroundColor: accent,
          borderRadius: "999px",
          height: "10px",
          width: "10px",
        }}
      />
      {label}
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 40 ? 64 : 76,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginTop: "40px",
        maxWidth: "900px",
        textAlign: "center",
      }}
    >
      {title}
    </div>

    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "32px",
        lineHeight: 1.4,
        marginTop: "28px",
        maxWidth: "760px",
        textAlign: "center",
      }}
    >
      {description}
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "56px",
        color: "#fafafa",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        gap: "12px",
        position: "absolute",
      }}
    >
      <div
        style={{
          backgroundColor: accent,
          borderRadius: "8px",
          height: "28px",
          width: "28px",
        }}
      />
      {brand}
    </div>
  </div>
);

Simple.previewProps = {
  accent: "#7c3aed",
  brand: "ogimagecn",
  description:
    "A shadcn registry of social card components you can copy, paste, and ship.",
  label: "Open Graph",
  title: "Beautiful OG images, built on Satori",
} satisfies SimpleProps;
