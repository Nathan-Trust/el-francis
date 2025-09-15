import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Users, BookOpen, Award, Globe, Lightbulb, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm font-semibold mb-6 shadow-sm">
              🇳🇬 Proudly Nigerian • Excellence in Education
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About Elfrancis International School
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over a decade, we have been at the forefront of quality education in Nigeria, nurturing young minds
              and preparing students to become global citizens while staying rooted in Nigerian values.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on strong values and unwavering commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide world-class education that develops intellectual, social, and moral capabilities while
                  fostering creativity, critical thinking, and leadership skills rooted in Nigerian heritage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading educational institution in Nigeria, producing globally competitive and morally
                  upright citizens who contribute meaningfully to society and the world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Excellence, Integrity, Respect, Innovation, Community, and Cultural Pride. These core values guide our
                  approach to education and shape the character of our students.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Excellence in Nigerian Education</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  At Elfrancis International School, we understand that the early years of a child's education are
                  crucial for their overall development. Our experienced Nigerian educators create a nurturing
                  environment where children feel safe, valued, and excited to learn.
                </p>
                <p>
                  We believe in a holistic approach to education that addresses not only academic growth but also
                  social, emotional, and physical development. Our curriculum combines the Nigerian national curriculum
                  with international best practices, ensuring our students are prepared for both local and global
                  opportunities.
                </p>
                <p>
                  Our modern facilities in Lagos, combined with innovative teaching methods and technology integration,
                  provide students with the tools they need to succeed in the 21st century while maintaining strong
                  connections to their Nigerian heritage and values.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/nigerian-school-hero.jpg"
                alt="Nigerian students learning at Elfrancis International School"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes Us Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our educational approach and Nigerian
              identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Qualified Nigerian Teachers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our educators are highly qualified Nigerians with international training, experienced, and passionate
                about teaching. They understand local culture while bringing global perspectives.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Nigerian + International Curriculum</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our curriculum combines the Nigerian national curriculum with international standards, including local
                languages, cultural studies, and global competencies.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Individual Attention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Small class sizes ensure that each child receives personalized attention and support to help them reach
                their full potential in a caring environment.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Perspective</h3>
              <p className="text-muted-foreground leading-relaxed">
                We prepare students to be global citizens while maintaining strong Nigerian values, cultural identity,
                and pride in their heritage.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation & Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern facilities with smart classrooms, computer labs, and digital learning tools prepare students for
                the technology-driven future.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Safe Environment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secure campus with trained security personnel, medical facilities, and comprehensive safety protocols
                ensure peace of mind for parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proud milestones that reflect our commitment to educational excellence in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Parent Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Qualified Teachers</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
