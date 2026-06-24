export interface ShadcnRegistry7Props {
  brand: string;
  title: string;
  description?: string;
  logo?: string;
  url?: string;
}

export const ShadcnRegistry7 = ({
  brand,
  title,
  description,
  logo = "",
  url = "",
}: ShadcnRegistry7Props) => (
  <div
    style={{
      backgroundColor: "#0A0A0A",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Border lines */}
    <div
      style={{
        borderBottom: "1px solid #171717",
        left: 0,
        position: "absolute",
        right: 0,
        top: "60px",
      }}
    />
    <div
      style={{
        borderTop: "1px solid #171717",
        bottom: "60px",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />
    <div
      style={{
        borderLeft: "1px solid #171717",
        bottom: 0,
        left: "60px",
        position: "absolute",
        top: 0,
      }}
    />
    <div
      style={{
        borderLeft: "1px solid #171717",
        bottom: 0,
        position: "absolute",
        right: "60px",
        top: 0,
      }}
    />

    {/* Corner accents — top-left */}
    <div
      style={{
        backgroundColor: "#404040",
        height: "1px",
        left: "60px",
        position: "absolute",
        top: "43.5px",
        width: "35px",
      }}
    />
    <div
      style={{
        backgroundColor: "#404040",
        height: "35px",
        left: "43.5px",
        position: "absolute",
        top: "60px",
        width: "1px",
      }}
    />

    {/* Corner accents — top-right */}
    <div
      style={{
        backgroundColor: "#404040",
        height: "1px",
        position: "absolute",
        right: "60px",
        top: "43.5px",
        width: "35px",
      }}
    />
    <div
      style={{
        backgroundColor: "#404040",
        height: "35px",
        position: "absolute",
        right: "43.5px",
        top: "60px",
        width: "1px",
      }}
    />

    {/* Corner accents — bottom-left */}
    <div
      style={{
        backgroundColor: "#404040",
        bottom: "43.5px",
        height: "1px",
        left: "60px",
        position: "absolute",
        width: "35px",
      }}
    />
    <div
      style={{
        backgroundColor: "#404040",
        bottom: "60px",
        height: "35px",
        left: "43.5px",
        position: "absolute",
        width: "1px",
      }}
    />

    {/* Corner accents — bottom-right */}
    <div
      style={{
        backgroundColor: "#404040",
        bottom: "43.5px",
        height: "1px",
        position: "absolute",
        right: "60px",
        width: "35px",
      }}
    />
    <div
      style={{
        backgroundColor: "#404040",
        bottom: "60px",
        height: "35px",
        position: "absolute",
        right: "43.5px",
        width: "1px",
      }}
    />

    {/* Main content */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "96px",
        width: "100%",
      }}
    >
      {/* Top: Logo + Brand */}
      <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
        {logo ? (
          <img
            alt=""
            height={64}
            src={logo}
            width={64}
            style={{
              borderRadius: "14px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              height: "64px",
              width: "64px",
            }}
          />
        )}
        <span
          style={{
            color: "#ffffff",
            fontSize: "38px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {brand}
        </span>
      </div>

      {/* Bottom: Title + Description + URL */}
      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "75%",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              fontSize: title.length > 50 ? 56 : 68,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              textWrap: "balance",
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: 1.3,
                maxWidth: "640px",
                textWrap: "balance",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        {url ? (
          <div
            style={{
              color: "rgba(255,255,255,0.8)",
              display: "flex",
              flexShrink: 0,
              fontSize: "28px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {url}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);
