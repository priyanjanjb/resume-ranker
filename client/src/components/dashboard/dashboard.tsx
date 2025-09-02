import { useLocation } from "react-router-dom";

// -----------------------------
// Helper: extract text between two headings
// -----------------------------
const extractSection = (text: string, startWord: string, stopWords: string[]) => {
  const regex = new RegExp(
    `${startWord}[\\s\\S]*?(?=${stopWords.join("|")}|$)`,
    "i"
  );
  const match = text.match(regex);
  return match ? match[0].trim() : "";
}

// -----------------------------
// Categorizer Function
// -----------------------------
const categorizeCV =(text: string) => {
  const sections = {
    personal: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    others: ""
  };

  const lower = text.toLowerCase();

  if (lower.includes("education")) {
    sections.education = extractSection(text, "education", [
      "experience",
      "skills",
      "projects"
    ]);
  }
  if (lower.includes("experience") || lower.includes("work history")) {
    sections.experience = extractSection(text, "experience", [
      "education",
      "skills",
      "projects"
    ]);
  }
  if (lower.includes("skills")) {
    sections.skills = extractSection(text, "skills", [
      "education",
      "experience",
      "projects"
    ]);
  }
  if (lower.includes("projects")) {
    sections.projects = extractSection(text, "projects", [
      "education",
      "experience",
      "skills"
    ]);
  }

  return sections;
}

// -----------------------------
// Dashboard Component
// -----------------------------
function Dashboard() {
  const location = useLocation();
  const pdfText: string = location.state?.pdfText || "No CV data received";

  const categorized = categorizeCV(pdfText);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>This is the Dashboard</h1>
      <h2>CV Sections</h2>

      <Section title="Personal Information" content={categorized.personal} />
      <Section title="Education" content={categorized.education} />
      <Section title="Experience" content={categorized.experience} />
      <Section title="Skills" content={categorized.skills} />
      <Section title="Projects" content={categorized.projects} />
      <Section title="Others" content={categorized.others} />
    </div>
  );
}

// -----------------------------
// Section Component
// -----------------------------
function Section({ title, content }: { title: string; content: string }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>{title}</h3>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          padding: "1rem"
        }}
      >
        {content || "Not Found"}
      </pre>
    </div>
  );
}

export default Dashboard;
