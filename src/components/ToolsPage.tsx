import { useState } from 'react';
import { MapPin, Phone, MapPinned, Clock, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';

interface ToolOwner {
  name: string;
  phone: string;
  location: string;
  availability: string;
}

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  cost: string;
  image: string;
  owner?: ToolOwner;
}

export const ToolsPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isAddToolOpen, setIsAddToolOpen] = useState(false);
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale');

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'machinery', label: t('machinery') },
    { id: 'irrigation', label: t('irrigation') },
    { id: 'soilHealth', label: t('soilHealth') },
    { id: 'others', label: t('others') },
  ];

  const tools: Tool[] = [
    {
      id: 1,
      name: t('tractor'),
      description: t('tractorDesc'),
      category: 'machinery',
      cost: '₹1,20,000 - ₹1,80,000',
      image: 'https://images.unsplash.com/photo-1685474442734-bb453f03060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjdG9yJTIwZmFybWluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Ramesh Kumar',
        phone: '+91 98765 43210',
        location: 'Guntur District, AP',
        availability: 'Available Mon-Sat'
      }
    },
    {
      id: 2,
      name: t('drone'),
      description: t('droneDesc'),
      category: 'others',
      cost: '₹45,000 - ₹1,00,000',
      image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Suresh Reddy',
        phone: '+91 98123 45678',
        location: 'Krishna District, AP',
        availability: 'Available Daily'
      }
    },
    {
      id: 3,
      name: t('pump'),
      description: t('pumpDesc'),
      category: 'irrigation',
      cost: '₹25,000 - ₹65,000',
      image: 'https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Lakshmi Devi',
        phone: '+91 97654 32109',
        location: 'West Godavari, AP',
        availability: 'Available Weekdays'
      }
    },
    {
      id: 4,
      name: t('sensor'),
      description: t('sensorDesc'),
      category: 'soilHealth',
      cost: '₹2,500 - ₹6,500',
      image: 'https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaGFuZHMlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Venkat Rao',
        phone: '+91 99876 54321',
        location: 'Visakhapatnam, AP',
        availability: 'Available Daily'
      }
    },
    {
      id: 5,
      name: t('language') === 'en' ? 'Seed Drill' : 'సీడ్ డ్రిల్',
      description: t('language') === 'en' ? 'Precision seed planting equipment' : 'ఖచ్చితమైన విత్తనం నాటడం పరికరం',
      category: 'machinery',
      cost: '₹15,000 - ₹35,000',
      image: 'https://images.unsplash.com/photo-1630600967074-3095a8865ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZpZWxkJTIwY3JvcHN8ZW58MXx8fHwxNzYxNDgwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Anand Murthy',
        phone: '+91 96543 21098',
        location: 'Chittor District, AP',
        availability: 'Available Mon-Fri'
      }
    },
    {
      id: 6,
      name: t('language') === 'en' ? 'Drip Irrigation Kit' : 'డ్రిప్ ఇరిగేషన్ కిట్',
      description: t('language') === 'en' ? 'Water-efficient irrigation system' : 'నీటి-సమర్థవంతమైన నీటిపారుదల వ్యవస్థ',
      category: 'irrigation',
      cost: '₹10,000 - ₹28,000',
      image: 'https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Prasad Naidu',
        phone: '+91 98321 09876',
        location: 'Prakasam District, AP',
        availability: 'Available Tue-Sun'
      }
    },
  ];

  const rentalTools = [
    {
      id: 101,
      name: t('tractor'),
      description: t('tractorDesc'),
      category: 'machinery',
      rentPerDay: '₹800',
      image: 'https://images.unsplash.com/photo-1685474442734-bb453f03060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjdG9yJTIwZmFybWluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Naresh Babu',
        phone: '+91 94567 89012',
        location: 'Kadapa District, AP',
        availability: 'Available Daily'
      }
    },
    {
      id: 102,
      name: t('drone'),
      description: t('droneDesc'),
      category: 'others',
      rentPerDay: '₹600',
      image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0ODA1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Raghava Rao',
        phone: '+91 93210 98765',
        location: 'Krishna District, AP',
        availability: 'Available on booking'
      }
    },
    {
      id: 103,
      name: t('pump'),
      description: t('pumpDesc'),
      category: 'irrigation',
      rentPerDay: '₹400',
      image: 'https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Srinivas Reddy',
        phone: '+91 92345 67890',
        location: 'West Godavari, AP',
        availability: 'Available Weekdays'
      }
    },
    {
      id: 104,
      name: t('sensor'),
      description: t('sensorDesc'),
      category: 'soilHealth',
      rentPerDay: '₹50',
      image: 'https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwaGFuZHMlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Madhavi Latha',
        phone: '+91 91234 56789',
        location: 'Visakhapatnam, AP',
        availability: 'Available Daily'
      }
    },
    {
      id: 105,
      name: t('language') === 'en' ? 'Seed Drill' : 'సీడ్ డ్రిల్',
      description: t('language') === 'en' ? 'Precision seed planting equipment' : 'ఖచ్చితమైన విత్తనం నాటడం పరికరం',
      category: 'machinery',
      rentPerDay: '₹250',
      image: 'https://images.unsplash.com/photo-1630600967074-3095a8865ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZpZWxkJTIwY3JvcHN8ZW58MXx8fHwxNzYxNDgwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Venkat Rao',
        phone: '+91 99876 54321',
        location: 'Chittor District, AP',
        availability: 'Available Mon-Fri'
      }
    },
    {
      id: 106,
      name: t('language') === 'en' ? 'Drip Irrigation Kit' : 'డ్రిప్ ఇరిగేషన్ కిట్',
      description: t('language') === 'en' ? 'Water-efficient irrigation system' : 'నీటి-సమర్థవంతమైన నీటిపారుదల వ్యవస్థ',
      category: 'irrigation',
      rentPerDay: '₹150',
      image: 'https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQ4MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Prasad Naidu',
        phone: '+91 98321 09876',
        location: 'Prakasam District, AP',
        availability: 'Available Tue-Sun'
      }
    },
    {
      id: 107,
      name: t('language') === 'en' ? 'Rotary Tiller' : 'రోటరీ టిల్లర్',
      description: t('language') === 'en' ? 'Soil preparation equipment' : 'మట్టి తయారీ పరికరం',
      category: 'machinery',
      rentPerDay: '₹500',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZXF1aXBtZW50JTIwdG9vbHxlbnwxfHx8fDE3NjE0ODA1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Anand Murthy',
        phone: '+91 96543 21098',
        location: 'Kadapa District, AP',
        availability: 'Available Daily'
      }
    },
    {
      id: 108,
      name: t('language') === 'en' ? 'Harvester' : 'హార్వెస్టర్',
      description: t('language') === 'en' ? 'Crop harvesting machine' : 'పంట కోత యంత్రం',
      category: 'machinery',
      rentPerDay: '₹1,200',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2ZXN0JTIwYWdyaWN1bHR1cmUlMjBtYWNoినlfGVufDF8fHx8MTc2MTQ4MDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Ramesh Kumar',
        phone: '+91 98765 43210',
        location: 'Nellore District, AP',
        availability: 'Available on booking'
      }
    },
    {
      id: 109,
      name: t('language') === 'en' ? 'Power Weeder' : 'పవర్ వీడర్',
      description: t('language') === 'en' ? 'Weed removal equipment' : 'కలుపు తొలగింపు పరికరం',
      category: 'machinery',
      rentPerDay: '₹300',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNDgwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Suresh Reddy',
        phone: '+91 98123 45678',
        location: 'Anantapur District, AP',
        availability: 'Available Weekdays'
      }
    },
    {
      id: 110,
      name: t('language') === 'en' ? 'Sprayer Pump' : 'స్ప్రేయర్ పంపు',
      description: t('language') === 'en' ? 'Pesticide and fertilizer sprayer' : 'పురుగుమందు మరియు ఎరువుల స్ప్రేయర్',
      category: 'others',
      rentPerDay: '₹200',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NjE0ODA1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      owner: {
        name: 'Lakshmi Devi',
        phone: '+91 97654 32109',
        location: 'East Godavari, AP',
        availability: 'Available Daily'
      }
    }
  ];

  const filteredTools = selectedCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === selectedCategory);

  const filteredRentalTools = selectedCategory === 'all'
    ? rentalTools
    : rentalTools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#5FA45A] dark:text-[#7BC277] mb-4">
            {t('toolsTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('language') === 'en' 
              ? 'Explore modern farming equipment designed for small and marginal farmers'
              : 'చిన్న మరియు ఉపాంత రైతుల కోసం రూపొందించిన ఆధునిక వ్యవసాయ పరికరాలను అన్వేషించండి'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full ${
                selectedCategory === category.id
                  ? 'bg-[#5FA45A] hover:bg-[#4E8A4A] text-white'
                  : 'border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white dark:border-[#7BC277] dark:text-[#7BC277]'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Tools for Purchase Grid */}
        <div className="mb-16">
          <h2 className="text-gray-900 dark:text-white mb-6">
            {t('language') === 'en' ? 'Tools for Purchase' : 'కొనుగోలు కోసం పరికరాలు'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <ImageWithFallback
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-gray-900 dark:text-white">{tool.name}</h3>
                    <Badge className="bg-[#F5C542] text-gray-900 hover:bg-[#F5C542]/90">
                      {tool.cost}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tool.description}
                  </p>
                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full"
                          onClick={() => setSelectedTool(tool)}
                        >
                          {t('viewDetails')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
                        <DialogHeader>
                          <DialogTitle className="text-[#5FA45A] dark:text-[#7BC277]">
                            {t('ownerDetails')}
                          </DialogTitle>
                          <DialogDescription className="text-gray-500 dark:text-gray-400">
                            {t('language') === 'en' ? 'Contact the owner for more information' : 'మరియు మరుముఖ సమాచారం కోసం యజమానిని సంప్రదించండి'}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedTool?.owner && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                              <div className="w-10 h-10 rounded-full bg-[#5FA45A] flex items-center justify-center text-white">
                                {selectedTool.owner.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium">{selectedTool.owner.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTool.name}</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <Phone className="w-5 h-5 text-[#5FA45A]" />
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('phone')}</p>
                                  <p className="font-medium">{selectedTool.owner.phone}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <MapPinned className="w-5 h-5 text-[#5FA45A]" />
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('location')}</p>
                                  <p className="font-medium">{selectedTool.owner.location}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <Clock className="w-5 h-5 text-[#5FA45A]" />
                                <div>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('availability')}</p>
                                  <p className="font-medium">{selectedTool.owner.availability}</p>
                                </div>
                              </div>
                            </div>
                            <Button className="w-full bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                              <Phone className="w-4 h-4" />
                              {t('language') === 'en' ? 'Contact Owner' : 'యజమానిని సంప్రదించండి'}
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#5FA45A] text-[#5FA45A] hover:bg-[#5FA45A] hover:text-white rounded-full gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      {t('availableNearMe')}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Rent Tools Section */}
        <div className="border-t-2 border-[#5FA45A] pt-12">
          <div className="text-center mb-8">
            <h2 className="text-[#5FA45A] dark:text-[#7BC277] mb-3">
              {t('rentToolsTitle')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('language') === 'en' 
                ? 'Rent tools from fellow farmers at affordable daily rates'
                : 'సరసమైన రోజువారీ ధరలకు తోటి రైతుల నుండి పరికరాలను భారీకరించండి'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRentalTools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <ImageWithFallback
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="text-gray-900 dark:text-white text-sm mb-1">{tool.name}</h3>
                    <Badge className="bg-[#F5C542] text-gray-900 hover:bg-[#F5C542]/90 text-xs">
                      {tool.rentPerDay}/{t('language') === 'en' ? 'day' : 'రోజు'}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {tool.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="w-full bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full"
                        onClick={() => setSelectedTool(tool)}
                      >
                        {t('rentNow')}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-[#5FA45A] dark:text-[#7BC277]">
                          {t('ownerDetails')}
                        </DialogTitle>
                        <DialogDescription className="text-gray-500 dark:text-gray-400">
                          {t('language') === 'en' ? 'Contact the owner for more information' : 'మరియు మరుముఖ సమాచారం కోసం యజమానిని సంప్రదించండి'}
                        </DialogDescription>
                      </DialogHeader>
                      {selectedTool?.owner && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                            <div className="w-10 h-10 rounded-full bg-[#5FA45A] flex items-center justify-center text-white">
                              {selectedTool.owner.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{selectedTool.owner.name}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTool.name}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                              <Phone className="w-5 h-5 text-[#5FA45A]" />
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('phone')}</p>
                                <p className="font-medium">{selectedTool.owner.phone}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                              <MapPinned className="w-5 h-5 text-[#5FA45A]" />
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('location')}</p>
                                <p className="font-medium">{selectedTool.owner.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                              <Clock className="w-5 h-5 text-[#5FA45A]" />
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('availability')}</p>
                                <p className="font-medium">{selectedTool.owner.availability}</p>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                            <Phone className="w-4 h-4" />
                            {t('language') === 'en' ? 'Contact Owner' : 'యజమానిని సంప్రదించండి'}
                          </Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Your Tool Section */}
        <div className="border-t-2 border-[#8B6B4B] pt-12 mt-16">
          <Card className="bg-gradient-to-br from-[#5FA45A]/10 to-[#F5C542]/10 dark:from-[#5FA45A]/5 dark:to-[#F5C542]/5 border-2 border-dashed border-[#5FA45A] dark:border-[#7BC277] dark:bg-gray-900/50">
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#5FA45A] dark:bg-[#7BC277] flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[#5FA45A] dark:text-[#7BC277] mb-2">
                  {t('addToolTitle')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {t('addToolDesc')}
                </p>
              </div>
              <Dialog open={isAddToolOpen} onOpenChange={setIsAddToolOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full gap-2">
                    <Plus className="w-5 h-5" />
                    {t('addYourTool')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="dark:bg-gray-900 dark:border-gray-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-[#5FA45A] dark:text-[#7BC277]">
                      {t('addYourTool')}
                    </DialogTitle>
                    <DialogDescription className="text-gray-500 dark:text-gray-400">
                      {t('addToolDesc')}
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast(t('language') === 'en' ? 'Tool listing submitted successfully!' : 'పరికరా జాబితా విజయవంతంగా సమర్పించబడింది!', {
                        description: t('language') === 'en' ? 'Our team will review and publish it soon.' : 'మా బృందం త్వరలో సమీక్షిస్తుంది మరియు ప్రచురిస్తుంది.',
                      });
                      setIsAddToolOpen(false);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="toolName" className="text-gray-700 dark:text-gray-300">
                          {t('toolName')} *
                        </Label>
                        <Input
                          id="toolName"
                          required
                          placeholder={t('language') === 'en' ? 'e.g., Mini Tractor' : 'ఉదా., మినీ ట్రాక్టర్'}
                          className="dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">
                          {t('category')} *
                        </Label>
                        <Select required>
                          <SelectTrigger id="category" className="dark:bg-gray-800 dark:border-gray-700">
                            <SelectValue placeholder={t('language') === 'en' ? 'Select category' : 'వర్గాన్ని ఎంచుకోండి'} />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                            <SelectItem value="machinery">{t('machinery')}</SelectItem>
                            <SelectItem value="irrigation">{t('irrigation')}</SelectItem>
                            <SelectItem value="soilHealth">{t('soilHealth')}</SelectItem>
                            <SelectItem value="others">{t('others')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
                        {t('description')} *
                      </Label>
                      <Textarea
                        id="description"
                        required
                        rows={3}
                        placeholder={t('language') === 'en' ? 'Describe your tool...' : 'మీ పరికరాన్ని వివరించండి...'}
                        className="dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-700 dark:text-gray-300">
                        {t('listingType')} *
                      </Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="listingType"
                            value="sale"
                            checked={listingType === 'sale'}
                            onChange={() => setListingType('sale')}
                            className="w-4 h-4 text-[#5FA45A] focus:ring-[#5FA45A]"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{t('forSale')}</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="listingType"
                            value="rent"
                            checked={listingType === 'rent'}
                            onChange={() => setListingType('rent')}
                            className="w-4 h-4 text-[#5FA45A] focus:ring-[#5FA45A]"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{t('forRent')}</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-gray-700 dark:text-gray-300">
                          {listingType === 'sale' ? t('price') : t('rentPrice')} *
                        </Label>
                        <Input
                          id="price"
                          required
                          type="text"
                          placeholder={listingType === 'sale' ? '₹' : '₹/day'}
                          className="dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName" className="text-gray-700 dark:text-gray-300">
                          {t('ownerName')} *
                        </Label>
                        <Input
                          id="ownerName"
                          required
                          placeholder={t('language') === 'en' ? 'Your name' : 'మీ పేరు'}
                          className="dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          {t('contactNumber')} *
                        </Label>
                        <Input
                          id="phone"
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">
                          {t('district')} *
                        </Label>
                        <Input
                          id="location"
                          required
                          placeholder={t('language') === 'en' ? 'e.g., Guntur District, AP' : 'ఉదా., గుంటూరు జిల్లా, AP'}
                          className="dark:bg-gray-800 dark:border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-gray-700 dark:text-gray-300">
                        {t('availabilitySchedule')} *
                      </Label>
                      <Input
                        id="availability"
                        required
                        placeholder={t('language') === 'en' ? 'e.g., Available Mon-Sat' : 'ఉదా., సోమ-శని అందుబాటులో'}
                        className="dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsAddToolOpen(false)}
                        className="flex-1 rounded-full dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        {t('language') === 'en' ? 'Cancel' : 'రద్దు చేయండి'}
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#5FA45A] hover:bg-[#4E8A4A] text-white rounded-full"
                      >
                        {t('submitListing')}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && filteredRentalTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {t('language') === 'en' 
                ? 'No tools found in this category.'
                : 'ఈ వర్గంలో పరికరాలు కనుగొనబడలేదు.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};