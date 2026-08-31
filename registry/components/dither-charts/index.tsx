import { getDitherChart, hexToRgb } from "@/registry/lib/dither-bitmap";
import type { DitherChartType } from "@/registry/lib/dither-bitmap";

const DitherKitLogo = () => (
  <svg height="64" viewBox="0 0 64 64" width="64">
    <rect fill="#0e0e0e" height="64" rx="12" width="64" />
    <g transform="translate(8 15.68) scale(0.117)">
      <g transform="translate(30 -210)">
        <path
          d="M155.533 342.024h2.529l-10.698 18.646 16.336 9.498 10.696-18.647 10.692 18.647 16.336-9.492-10.692-18.652h21.388v-18.986h-21.388l10.692-18.652-16.336-9.492-10.692 18.647-10.696-18.647-16.336 9.492 10.692 18.652h-21.388v18.986h18.865Z"
          fill="#fff"
        />
        <path
          d="M203.279 452.648h-57.764v-32.714H29.59v-58.266h-57.88v-58.274h57.88v-58.266h115.925v-32.244h57.764v32.244h115.708v58.266h57.885v58.274h-57.885v58.266H203.279v32.714Zm52.62-149.254c-18.032-12.184-35.663-19.706-52.665-23.55-20.332-4.594-39.757-3.929-57.88.31-19.03 4.457-36.627 12.849-52.322 23.24-13.009 8.777-24.55 18.612-34.502 28.489 9.196 9.8 22.575 20.952 37.867 29.785 14.261 8.357 30.818 15.438 48.957 19.362 17.974 3.89 37.501 4.68 57.88.533 20.744-4.229 42.215-13.097 57.873-25.446 9.63-6.675 19.299-14.695 28.946-24.234-11.505-11.464-22.9-20.932-34.154-28.489Z"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

const CHARTS: {
  description: string;
  name: string;
  type: DitherChartType;
}[] = [
  {
    description: "Track change over time with lines.",
    name: "Line Chart",
    type: "line",
  },
  {
    description: "Compare categories with pixel bars.",
    name: "Bar Chart",
    type: "bar",
  },
  {
    description: "Show proportions in a compact ring.",
    name: "Pie Chart",
    type: "pie",
  },
  {
    description: "Compare values across dimensions.",
    name: "Radar Chart",
    type: "radar",
  },
  {
    description: "Highlight trends with dithered fills.",
    name: "Area Chart",
    type: "area",
  },
];

const ChartCard = ({
  description,
  name,
  primary,
  secondary,
  type,
  wide = false,
}: {
  description: string;
  name: string;
  primary: string;
  secondary: string;
  type: DitherChartType;
  wide?: boolean;
}) => {
  const chart = getDitherChart(type, primary, secondary);
  const cardWidth = wide ? 718 : 350;
  const chartWidth = wide ? 688 : 320;
  const previewWidth = wide ? 702 : 334;

  return (
    <div
      style={{
        backgroundColor: "#121212",
        border: "1px solid #242424",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        height: "206px",
        padding: "7px",
        width: `${cardWidth}px`,
      }}
    >
      <div
        style={{
          backgroundColor: "#090909",
          border: "1px solid #222222",
          borderRadius: "11px",
          display: "flex",
          height: "132px",
          overflow: "hidden",
          position: "relative",
          width: `${previewWidth}px`,
        }}
      >
        <img
          height={122}
          src={chart}
          width={chartWidth}
          style={{
            filter: "blur(6px)",
            left: "7px",
            opacity: 0.3,
            position: "absolute",
            top: "5px",
          }}
        />
        <img
          height={122}
          src={chart}
          width={chartWidth}
          style={{ left: "7px", position: "absolute", top: "5px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 4px 0",
        }}
      >
        <span style={{ color: "#d7d7d7", fontSize: "17px" }}>{name}</span>
        <span style={{ color: "#6f6f6f", fontSize: "12px", marginTop: "5px" }}>
          {description}
        </span>
      </div>
    </div>
  );
};

export interface DitherChartsProps {
  command?: string;
  name?: string;
  primary?: string;
  secondary?: string;
  tagline?: string;
}

export const DitherCharts = ({
  command = "npx @dither-kit/cli add dither-kit",
  name = "dither-kit",
  primary = "#358ff3",
  secondary = "#966eff",
  tagline = "five chart types · one tiny canvas engine",
}: DitherChartsProps) => {
  const rows = [CHARTS.slice(0, 2), CHARTS.slice(2, 4), CHARTS.slice(4)];
  const primaryRgb = hexToRgb(primary, { b: 243, g: 143, r: 53 });

  return (
    <div
      style={{
        backgroundColor: "#080808",
        backgroundImage: `radial-gradient(circle at 38% 50%, rgba(${primaryRgb.r},${primaryRgb.g},${primaryRgb.b},0.07), transparent 38%)`,
        color: "#ffffff",
        display: "flex",
        fontFamily: "Geist Pixel",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "58px",
          position: "absolute",
          top: "216px",
          width: "390px",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
          <div
            style={{
              border: "1px solid #292929",
              borderRadius: "14px",
              display: "flex",
              height: "66px",
              overflow: "hidden",
              width: "66px",
            }}
          >
            <DitherKitLogo />
          </div>
          <span
            style={{
              fontSize: name.length > 14 ? "45px" : "54px",
              letterSpacing: "-0.055em",
            }}
          >
            {name}
          </span>
        </div>
        <span
          style={{
            color: "#7d7d7d",
            fontSize: "15px",
            lineHeight: 1.45,
            marginLeft: "84px",
            marginTop: "13px",
            width: "280px",
          }}
        >
          {tagline}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          left: "475px",
          position: "absolute",
          top: "-24px",
          transform: "rotate(-3deg) skewX(-5deg)",
          width: "730px",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={row[0]?.type}
            style={{
              display: "flex",
              gap: "18px",
              marginLeft: `${rowIndex * -34}px`,
            }}
          >
            {row.map((chart) => (
              <ChartCard
                key={chart.type}
                primary={primary}
                secondary={secondary}
                wide={row.length === 1}
                {...chart}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          alignItems: "center",
          backgroundColor: "#0e0e0e",
          border: "1px solid #262626",
          borderRadius: "12px",
          bottom: "38px",
          display: "flex",
          fontSize: "13px",
          gap: "11px",
          left: "58px",
          padding: "11px 14px",
          position: "absolute",
        }}
      >
        <span style={{ color: primary }}>$</span>
        <span style={{ color: "#858585" }}>{command}</span>
      </div>
    </div>
  );
};
