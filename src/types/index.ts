export type Category = 'all' | 'residential' | 'commercial' | 'public' | 'conceptual';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  imageUrl: string;
  largeImageUrl: string;
  location: string;
  year: number;
  architects: string[];
  tags: string[];
  featured: boolean;
  details: {
    landArea: string;
    floors: string;
    size: string;
    architecturalDesigner: string;
    structuralDesigner: string;
    electricalDesigner: string;
    sustainabilityFeatures: string[];
    constructionMaterials: string[];
    energyEfficiency: string;
    certifications: string[];
  };
}