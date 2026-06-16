import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the type for a project
interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  content: string;
  client?: string;
  role?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Get the path to the projects directory
const projectsDirectory = path.join(process.cwd(), "src", "content", "projects");

// Get all project slugs
export function getProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading projects directory:", error);
    return [];
  }
}

// Get a single project by slug
export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      image: data.image || "/assets/images/placeholder.jpg",
      tags: data.tags || [],
      year: data.year || "",
      content,
      client: data.client,
      role: data.role,
      technologies: data.technologies,
      liveUrl: data.liveUrl,
      githubUrl: data.githubUrl,
    };
  } catch (error) {
    console.error(`Error reading project file for slug ${slug}:`, error);
    return null;
  }
}

// Get all projects, sorted by year (newest first)
export function getProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      // Sort by year (newest first)
      if (a.year && b.year) {
        return parseInt(b.year) - parseInt(a.year);
      }
      return 0;
    });

  return projects;
}

// Get projects by tag
export function getProjectsByTag(tag: string): Project[] {
  const allProjects = getProjects();
  return allProjects.filter((project) => project.tags.includes(tag));
}

// Get all unique tags
export function getAllTags(): string[] {
  const allProjects = getProjects();
  const tagsSet = new Set<string>();
  allProjects.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
