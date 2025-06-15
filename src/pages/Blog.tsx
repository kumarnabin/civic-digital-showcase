
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'it', label: t('blog.categories.it') },
    { id: 'nepali', label: t('blog.categories.nepali') },
    { id: 'international', label: t('blog.categories.international') },
    { id: 'government', label: t('blog.categories.government') }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Digital Nepal: The Future of E-Governance',
      excerpt: 'Exploring how digital transformation is revolutionizing government services in Nepal.',
      category: 'government',
      author: 'राज कुमार शर्मा',
      date: '2024-01-15',
      tags: ['E-Governance', 'Digital Nepal', 'Government']
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with Spring Boot',
      excerpt: 'Best practices for creating enterprise-level applications using Java Spring Boot framework.',
      category: 'it',
      author: 'सीता देवी पौडेल',
      date: '2024-01-10',
      tags: ['Java', 'Spring Boot', 'Web Development']
    },
    {
      id: 3,
      title: 'नेपालमा आईटी क्षेत्रको विकास र चुनौतीहरू',
      excerpt: 'नेपालको आईटी क्षेत्रमा भएका प्रगति र सामना गर्नुपर्ने चुनौतीहरूको विश्लेषण।',
      category: 'nepali',
      author: 'अमित थापा',
      date: '2024-01-08',
      tags: ['नेपाल', 'आईटी', 'विकास']
    },
    {
      id: 4,
      title: 'Global Trends in Software Development 2024',
      excerpt: 'An overview of the latest trends and technologies shaping the software development landscape worldwide.',
      category: 'international',
      author: 'Tech Team',
      date: '2024-01-05',
      tags: ['Trends', 'Software Development', 'Technology']
    },
    {
      id: 5,
      title: 'Database Optimization Techniques for Large Scale Applications',
      excerpt: 'Learn how to optimize database performance for applications handling millions of records.',
      category: 'it',
      author: 'Database Team',
      date: '2024-01-03',
      tags: ['Database', 'Performance', 'Optimization']
    },
    {
      id: 6,
      title: 'सरकारी संस्थानहरूमा डिजिटल परिवर्तन',
      excerpt: 'सरकारी कार्यालयहरूमा डिजिटल प्रविधिको प्रयोगले ल्याएका सकारात्मक परिवर्तनहरू।',
      category: 'government',
      author: 'Project Team',
      date: '2024-01-01',
      tags: ['सरकार', 'डिजिटल', 'परिवर्तन']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-muted-foreground">
            Insights, updates, and expertise from our team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-2" />
                  <span>{post.author}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Subscribe to our newsletter for the latest insights and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
