import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'How to Boost Your Immune System',
    excerpt: 'Learn about natural ways to strengthen your body\'s defenses.',
    link: '/blog/boost-immune-system'
  },
  {
    title: 'Understanding Blood Pressure Readings',
    excerpt: 'A comprehensive guide to interpreting your blood pressure numbers.',
    link: '/blog/blood-pressure-guide'
  },
  {
    title: 'The Importance of Vitamin D',
    excerpt: 'Discover why Vitamin D is crucial for your overall health.',
    link: '/blog/vitamin-d-importance'
  }
]

export default function HealthResources() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Health Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link href={article.link} className="text-primary hover:underline flex items-center">
                Read More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

