import {
  getDitherButtonTexture,
  getDitherGradient,
} from "@/registry/lib/dither-bitmap";
import type { DitherButtonVariant } from "@/registry/lib/dither-bitmap";

const DitherCta = ({
  accent,
  accentTo,
  label,
  variant,
}: {
  accent: string;
  accentTo: string;
  label: string;
  variant: DitherButtonVariant;
}) => {
  const width = 310;
  const height = 72;
  const texture = getDitherButtonTexture({
    accent,
    accentTo,
    height,
    variant,
    width,
  });

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#101010",
        border: "1px solid #3a3a3a",
        borderRadius: "14px",
        display: "flex",
        height: `${height}px`,
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        width: `${width}px`,
      }}
    >
      <img
        height={height}
        src={texture}
        width={width}
        style={{ filter: "blur(8px)", opacity: 0.38, position: "absolute" }}
      />
      <img
        height={height}
        src={texture}
        width={width}
        style={{ opacity: 0.88, position: "absolute" }}
      />
      <span
        style={{
          color: "#ffffff",
          fontSize: "18px",
          textShadow: "0 1px 10px #000000",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export interface DitherReleaseProps {
  accent?: string;
  accentTo?: string;
  brand?: string;
  buttonLabel?: string;
  description?: string;
  eyebrow?: string;
  title?: string;
  variant?: DitherButtonVariant;
}

export const DitherRelease = ({
  accent = "#9f7aea",
  accentTo = "#ec8fbd",
  brand = "Acme",
  buttonLabel = "Read the changelog →",
  description = "Faster workflows, clearer feedback, and a calmer path from idea to production.",
  eyebrow = "Product update",
  title = "A faster way to ship.",
  variant = "gradient",
}: DitherReleaseProps) => {
  const wash = getDitherGradient({
    cacheKey: "release-accent",
    from: accent,
    height: 630,
    to: accentTo,
    width: 520,
  });

  return (
    <div
      style={{
        backgroundColor: "#080808",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Geist Pixel",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <img
        height={630}
        src={wash}
        width={520}
        style={{
          filter: "blur(20px)",
          opacity: 0.28,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <img
        height={630}
        src={wash}
        width={520}
        style={{ opacity: 0.34, position: "absolute", right: 0, top: 0 }}
      />

      <div
        style={{
          border: "1px solid #292929",
          borderRadius: "22px",
          bottom: "28px",
          display: "flex",
          left: "28px",
          position: "absolute",
          right: "28px",
          top: "28px",
        }}
      />

      <div
        style={{
          alignItems: "center",
          display: "flex",
          left: "62px",
          position: "absolute",
          top: "58px",
        }}
      >
        <span style={{ fontSize: "22px", letterSpacing: "-0.04em" }}>
          {brand}
        </span>
        <span
          style={{
            color: "#666666",
            fontSize: "13px",
            marginLeft: "16px",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "62px",
          position: "absolute",
          top: "156px",
          width: "650px",
        }}
      >
        <span
          style={{
            fontSize: title.length > 32 ? "59px" : "70px",
            letterSpacing: "-0.055em",
            lineHeight: 1.03,
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: "#969696",
            fontSize: "20px",
            lineHeight: 1.4,
            marginTop: "24px",
            width: "570px",
          }}
        >
          {description}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          left: "62px",
          position: "absolute",
          top: "456px",
        }}
      >
        <DitherCta
          accent={accent}
          accentTo={accentTo}
          label={buttonLabel}
          variant={variant}
        />
      </div>

      <div
        style={{
          backgroundColor: "rgba(11,11,11,0.9)",
          border: "1px solid #343434",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          height: "412px",
          left: "792px",
          padding: "28px",
          position: "absolute",
          top: "110px",
          transform: "rotate(-2deg)",
          width: "328px",
        }}
      >
        <span
          style={{
            color: accentTo,
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Now available
        </span>
        <span
          style={{
            fontSize: "78px",
            letterSpacing: "-0.07em",
            marginTop: "18px",
          }}
        >
          v2.4
        </span>
        <div
          style={{
            borderTop: "1px solid #303030",
            display: "flex",
            flexDirection: "column",
            gap: "13px",
            marginTop: "20px",
            paddingTop: "20px",
          }}
        >
          {["Faster deploys", "Clearer activity", "Smaller bundles"].map(
            (feature) => (
              <div
                key={feature}
                style={{ alignItems: "center", display: "flex" }}
              >
                <span style={{ color: accent, fontSize: "12px" }}>+</span>
                <span
                  style={{
                    color: "#8a8a8a",
                    fontSize: "14px",
                    marginLeft: "10px",
                  }}
                >
                  {feature}
                </span>
              </div>
            )
          )}
        </div>
        <span
          style={{
            bottom: "26px",
            color: "#555555",
            fontSize: "11px",
            position: "absolute",
          }}
        >
          acme.dev/changelog
        </span>
      </div>
    </div>
  );
};
