import { Category, Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Emerald Heights Residence',
    shortDescription: 'Luxury eco-friendly residential complex with solar integration',
    description: 'Emerald Heights is a pioneering residential complex that seamlessly blends luxury living with sustainable practices. The buildings feature extensive solar panel integration, rainwater harvesting systems, and vertical gardens that help regulate temperature and improve air quality. The complex includes 45 residential units, each designed to maximize natural light and ventilation, reducing energy consumption by up to 40% compared to conventional buildings.',
    category: 'residential',
    imageUrl: 'images/anil.jpg',
    largeImageUrl: 'images/anil.jpg',
    location: 'Dhamrai, Dhaka',
    year: 2025,
    architects: ['Sonia Akter', 'Motin Mia'],
    tags: ['solar', 'residential', 'rainwater harvesting', 'vertical gardens'],
    featured: true,
    details: {
      landArea: '7.5 acres',
      floors: '7 stories',
      size: '12000 sq ft',
      architecturalDesigner: 'Sonia Akter, Motin Mia',
      structuralDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      electricalDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      sustainabilityFeatures: [
        'Solar panel array covering 80% of roof area',
        'Rainwater harvesting system with 50,000-gallon capacity',
        'Vertical gardens on south and west facades',
        'Smart building management system',
        'Natural ventilation system'
      ],
      constructionMaterials: [
        'Recycled steel structure',
        'Low-carbon concrete',
        'FSC-certified timber',
        'Recycled glass windows'
      ],
      energyEfficiency: 'LEED Platinum certified with 40% reduction in energy consumption compared to baseline',
      certifications: ['LEED Platinum', 'WELL Gold', 'Living Building Challenge']
    }
  },
  {
    id: '2',
    title: 'Skyline Tower',
    shortDescription: 'Modern commercial skyscraper with innovative workspace design',
    description: 'A 50-story commercial tower that redefines the modern workplace. The building features a unique double-skin facade that provides natural ventilation while maintaining energy efficiency. The interior spaces are designed with flexibility in mind, allowing for easy reconfiguration of office layouts.',
    category: 'commercial',
    imageUrl: 'images/ISMAIL.jpg',
    largeImageUrl: 'images/ISMAIL.jpg',
    location: 'Dhaka, Bangladesh',
    year: 2025,
    architects: ['Sonia Akter', 'Motin Mia'],
    tags: ['commercial', 'skyscraper', 'smart building', 'workspace'],
    featured: true,
    details: {
      landArea: '1.2 acres',
      floors: '50 stories',
      size: '800,000 sq ft',
      architecturalDesigner: 'Sonia Akter, Motin Mia',
      structuralDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      electricalDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      sustainabilityFeatures: [
        'Double-skin facade system',
        'Automated window shading',
        'Smart HVAC system',
        'Green roof with urban farming space'
      ],
      constructionMaterials: [
        'High-performance glass',
        'Reinforced concrete core',
        'Steel frame structure',
        'Recycled aluminum cladding'
      ],
      energyEfficiency: 'LEED Gold certified with 35% energy savings',
      certifications: ['LEED Gold', 'WELL Building Standard']
    }
  },
  {
    id: '3',
    title: 'Skyline Tower',
    shortDescription: 'Modern commercial skyscraper with innovative workspace design',
    description: 'A 50-story commercial tower that redefines the modern workplace. The building features a unique double-skin facade that provides natural ventilation while maintaining energy efficiency. The interior spaces are designed with flexibility in mind, allowing for easy reconfiguration of office layouts.',
    category: 'commercial',
    imageUrl: 'images/lalmia.jpg',
    largeImageUrl: 'images/lalmia.jpg',
    location: 'Dhaka, Bangladesh',
    year: 2025,
    architects: ['Sonia Akter', 'Motin Mia'],
    tags: ['commercial', 'skyscraper', 'smart building', 'workspace'],
    featured: true,
    details: {
      landArea: '1.2 acres',
      floors: '50 stories',
      size: '800,000 sq ft',
      architecturalDesigner: 'Sonia Akter, Motin Mia',
      structuralDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      electricalDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      sustainabilityFeatures: [
        'Double-skin facade system',
        'Automated window shading',
        'Smart HVAC system',
        'Green roof with urban farming space'
      ],
      constructionMaterials: [
        'High-performance glass',
        'Reinforced concrete core',
        'Steel frame structure',
        'Recycled aluminum cladding'
      ],
      energyEfficiency: 'LEED Gold certified with 35% energy savings',
      certifications: ['LEED Gold', 'WELL Building Standard']
    }
  },
  {
    id: '4',
    title: 'Floating City Concept',
    shortDescription: 'Futuristic floating city design for climate change adaptation',
    description: 'A conceptual design for a self-sustaining floating city that addresses rising sea levels and climate change. The design incorporates modular living units, renewable energy systems, and advanced water treatment facilities. The project explores the potential of floating architecture as a solution for coastal communities.',
    category: 'conceptual',
    imageUrl: 'images/STORIDE2.jpeg',
    largeImageUrl: 'images/STORIDE2.jpeg',
    location: 'Conceptual',
    year: 2024,
    architects: ['Sonia Akter', 'Motin Mia'],
    tags: ['conceptual', 'floating', 'sustainable', 'future'],
    featured: true,
    details: {
      landArea: 'N/A',
      floors: 'Variable',
      size: 'Variable',
      architecturalDesigner: 'Sonia Akter, Motin Mia',
      structuralDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      electricalDesigner: 'Md Shahin Hossain Pathan, Civil Engineer',
      sustainabilityFeatures: [
        'Floating platform technology',
        'Wave energy conversion',
        'Desalination systems',
        'Vertical farming integration'
      ],
      constructionMaterials: [
        'Floating concrete',
        'Marine-grade steel',
        'Composite materials',
        'Recycled plastics'
      ],
      energyEfficiency: 'Conceptual design with net-zero energy target',
      certifications: ['Conceptual Design Award 2024']
    }
  }
];

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'public', label: 'Public' },
  { id: 'conceptual', label: 'Conceptual' }
];