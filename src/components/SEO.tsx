import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'Premium Portfolio | Interior Design Studio',
  description = 'Award-winning interior design studio specializing in premium residential and commercial spaces. Elevating lifestyles through bespoke design and timeless aesthetics.',
  image = '/og-image.jpg',
  url = 'https://yourportfolio.com',
  type = 'website',
}: SEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Lead Interior Designer & Founder',
    url: url,
    sameAs: [
      'https://instagram.com/yourstudio',
      'https://facebook.com/yourstudio',
      'https://linkedin.com/company/yourstudio',
    ],
    image: image,
    description: description,
    knowsAbout: [
      'Space Planning',
      'Interior Architecture',
      'Custom Furniture',
      'Lighting Design',
      'Color Theory',
      'Project Management',
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Your Name" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
