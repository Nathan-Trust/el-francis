import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Phone,
  MessageCircle,
  Target,
  Eye,
  Heart,
  Star,
  Globe,
  Lightbulb,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm font-semibold mb-6 shadow-sm">
                🇳🇬 Proudly Nigerian • Excellence in Education
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Shaping Tomorrow's <span className="text-primary">Leaders</span> Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Elfrancis International School, we nurture young minds with world-class education rooted in Nigerian
                values. From nursery to grade school, every child discovers their potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/contact">Enroll Your Child Today</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <a
                    href="https://wa.me/2348153322520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/nigerian-school-hero.jpg"
                alt="Modern Nigerian school children learning at Elfrancis International School"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-sm text-muted-foreground">Parent Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on strong values and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading educational institution in Nigeria, producing globally competitive and morally
                  upright citizens who contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that develops intellectual, social, and moral capabilities while
                  fostering creativity, critical thinking, and leadership skills.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Motto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">"Excellence Through Knowledge"</p>
                <p className="text-muted-foreground">
                  Empowering every child to achieve their highest potential through dedication, integrity, and
                  continuous learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational programs designed to nurture every aspect of your child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Rigorous curriculum covering Mathematics, English, Sciences, Social Studies, and Nigerian languages
                  with international standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Modern computer labs and technology integration to prepare students for the digital age with coding
                  and robotics programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Strong emphasis on moral values, leadership skills, and social responsibility rooted in Nigerian
                  cultural heritage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Creative Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Music, drama, visual arts, and cultural activities that celebrate Nigerian heritage while fostering
                  creativity and self-expression.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sports & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Comprehensive sports programs including football, athletics, swimming, and traditional Nigerian games
                  for physical development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Exam Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Specialized preparation for Common Entrance, WAEC, JAMB, and international examinations with proven
                  success rates.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate learning experiences designed for Nigerian children's developmental needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/nigerian-nursery.jpg"
                  alt="Nigerian children in nursery program at Elfrancis International School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Ages 2-4
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Nursery Program</CardTitle>
                <CardDescription className="text-base">Foundation for Lifelong Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our nursery program combines play-based learning with structured activities. Children develop language
                  skills in English and local languages, basic numeracy, social skills, and creativity through art,
                  music, and storytelling.
                </p>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Phonics and early reading</li>
                  <li>• Basic mathematics concepts</li>
                  <li>• Social and emotional development</li>
                  <li>• Creative arts and crafts</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Learn More About Nursery</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/nigerian-primary.jpg"
                  alt="Nigerian primary school students at Elfrancis International School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Ages 5-12
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Primary School</CardTitle>
                <CardDescription className="text-base">Building Strong Academic Foundations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our primary program follows the Nigerian curriculum enhanced with international best practices.
                  Students develop critical thinking, problem-solving skills, and strong academic foundations across all
                  subjects.
                </p>
                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                  <li>• Core subjects: English, Mathematics, Sciences</li>
                  <li>• Nigerian languages and cultural studies</li>
                  <li>• Computer studies and digital literacy</li>
                  <li>• Leadership and character development</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Learn More About Primary</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Give Your Child the Best Start?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of families who trust Elfrancis International School with their children's education. Schedule
            a visit today and see the difference quality education makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+2348153322520" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: 081-5332-2520
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
