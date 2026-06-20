export interface ShadcnRegistry6Props {
  title: string;
  description: string;
  brand: string;
  logo?: string;
}

export const ShadcnRegistry6 = ({
  title,
  description,
  brand,
  logo = "",
}: ShadcnRegistry6Props) => (
  <div
    style={{
      backgroundColor: "#000000",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        borderLeft: "1px solid #27272a",
        bottom: 0,
        left: "48px",
        position: "absolute",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderLeft: "1px solid #27272a",
        bottom: 0,
        position: "absolute",
        right: "48px",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderTop: "1px solid #27272a",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
        top: "48px",
      }}
    />
    <div
      style={{
        borderTop: "1px solid #27272a",
        bottom: "48px",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />

    <div
      style={{
        left: "72px",
        position: "absolute",
        top: "72px",
      }}
    >
      {logo ? (
        <img
          alt=""
          height={64}
          src={logo}
          width={128}
          style={{
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            height: "64px",
            width: "128px",
          }}
        />
      )}
    </div>

    <div
      style={{
        borderBottom: "2px solid #27272a",
        borderTop: "2px solid #27272a",
        bottom: "96px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        left: 0,
        position: "absolute",
        right: 0,
        top: "160px",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid #27272a",
          borderTop: "2px solid #27272a",
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1,
          padding: "0 72px",
          textWrap: "balance" as const,
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            borderBottom: "2px solid #27272a",
            color: "#a1a1aa",
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: 1.25,
            padding: "32px 72px",
            textWrap: "balance" as const,
          }}
        >
          {description}
        </div>
      )}
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "24px",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        gap: "14px",
        position: "absolute",
        right: "72px",
      }}
    >
      {brand}
    </div>
  </div>
);
