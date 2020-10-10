interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  email: string;
  navLinks: Array<NavLink>;
}

interface NavLink {
  label: string;
  value: string;
}

interface Degree {
  school: string;
  degree: string;
  field: string;
  description: string;
  startYear: string;
  endYear: string;
}
