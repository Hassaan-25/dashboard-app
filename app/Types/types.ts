export interface Filters {
  keyword?: string;
  location?: string;
  jobType?: string;
  category?: string;
}


export interface JobCardProps {
    title: string;
    company: string;
    location: string;
    posted: string;
    applicants: number;
  }