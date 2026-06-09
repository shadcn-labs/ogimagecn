export interface ShowcaseProps {
  title: string;
  subtitle: string;
  url: string;
  accent?: string;
}

export const Showcase = ({ title, subtitle, url, accent }: ShowcaseProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.2), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden",
      paddingTop: "64px",
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        fontSize: "60px",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        textAlign: "center",
      }}
    >
      {title}
    </div>
    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "28px",
        marginTop: "14px",
        maxWidth: "760px",
        textAlign: "center",
      }}
    >
      {subtitle}
    </div>

    <div
      style={{
        backgroundColor: "#0a0a0a",
        border: "1px solid rgba(250,250,250,0.12)",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0 -10px 80px rgba(99,102,241,0.25)",
        display: "flex",
        flexDirection: "column",
        height: "360px",
        marginTop: "48px",
        width: "1000px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          borderBottom: "1px solid rgba(250,250,250,0.08)",
          display: "flex",
          gap: "10px",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ef4444",
            borderRadius: "999px",
            height: "14px",
            width: "14px",
          }}
        />
        <div
          style={{
            backgroundColor: "#f59e0b",
            borderRadius: "999px",
            height: "14px",
            width: "14px",
          }}
        />
        <div
          style={{
            backgroundColor: "#22c55e",
            borderRadius: "999px",
            height: "14px",
            width: "14px",
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(250,250,250,0.06)",
            borderRadius: "8px",
            color: "#71717a",
            display: "flex",
            fontSize: "20px",
            marginLeft: "20px",
            padding: "8px 20px",
          }}
        >
          {url}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            borderRight: "1px solid rgba(250,250,250,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "28px 24px",
            width: "220px",
          }}
        >
          {[0.9, 0.6, 0.7, 0.5].map((w, i) => (
            <div
              key={w}
              style={{
                backgroundColor: i === 0 ? accent : "rgba(250,250,250,0.12)",
                borderRadius: "8px",
                height: "20px",
                width: `${w * 100}%`,
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: "28px 36px",
          }}
        >
          <div
            style={{
              color: "#71717a",
              display: "flex",
              fontSize: "22px",
            }}
          >
            Revenue
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginTop: "4px",
            }}
          >
            $346,723
          </div>
          <div
            style={{
              alignItems: "flex-end",
              display: "flex",
              flex: 1,
              gap: "18px",
              marginTop: "24px",
            }}
          >
            {[0.4, 0.65, 0.5, 0.8, 0.55, 0.95, 0.7, 0.85].map((h, i) => (
              <div
                key={h}
                style={{
                  backgroundColor:
                    i % 2 === 0 ? accent : "rgba(250,250,250,0.18)",
                  borderRadius: "6px 6px 0 0",
                  display: "flex",
                  flex: 1,
                  height: `${h * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Showcase.previewProps = {
  accent: "#6366f1",
  subtitle: "The dashboard that brings every metric into one calm view.",
  title: "Run your business smarter",
  url: "app.ogimagecn.dev",
} satisfies ShowcaseProps;
