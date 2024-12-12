import { StaticImageData } from "next/image";

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
  logo: StaticImageData;
  promoted?: boolean;
  site?: string;
}
