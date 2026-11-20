import { Badge } from "@/components/og/badge";

export interface ResumeProps {
  name: string;
  role: string;
  skills: string[];
  url: string;
}

export const Resume = ({ name, role, skills, url }: ResumeProps) => (
  <div
    style={{
      backgroundColor: "#f8fafc",
      color: "#0f172a",
      display: "flex",
      height: "100%",
      width: "100%",
    }}
  >
    <div
      style={{ backgroundColor: "#2563eb", display: "flex", width: "24px" }}
    />

    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#64748b",
            display: "flex",
            fontSize: "26px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Resume
        </div>
        <div
          style={{
            display: "block",
            fontSize: name.length > 22 ? 76 : 92,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineClamp: 1,
            lineHeight: 1.1,
            marginTop: "16px",
          }}
        >
          {name}
        </div>
        <div
          style={{
            color: "#2563eb",
            display: "block",
            fontSize: "40px",
            fontWeight: 600,
            lineClamp: 1,
            marginTop: "12px",
          }}
        >
          {role}
        </div>
      </div>

      {skills.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            maxHeight: "128px",
            overflow: "hidden",
          }}
        >
          {skills.map((skill) => (
            <Badge
              background="#e2e8f0"
              color="#1e293b"
              key={skill}
              style={{ fontSize: "28px", padding: "10px 24px" }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      )}

      <div
        style={{
          alignItems: "center",
          borderTop: "2px solid #e2e8f0",
          color: "#475569",
          display: "flex",
          fontSize: "30px",
          fontWeight: 500,
          paddingTop: "28px",
        }}
      >
        {url}
      </div>
    </div>
  </div>
);
