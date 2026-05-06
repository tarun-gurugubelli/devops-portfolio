import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BriefcaseBusiness, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import PipelineAnimation from "@/components/pipeline-animation"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-muted/50">
        <div className="container px-4 py-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-in slide-in-from-top duration-500">
            Welcome to DevOps QNA Knowledge Board
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mb-8 animate-in slide-in-from-bottom duration-500 delay-200">
          Explore our comprehensive collection of DevOps tools, featuring insightful questions and detailed answers. Whether you're a beginner or an expert, find the resources you need to enhance your DevOps journey!
          </p>
          <Button asChild size="lg" className="animate-in slide-in-from-bottom duration-500 delay-300">
            <Link href="/modules">
              Explore Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Pipeline Animation */}
          <div className="w-full mt-16 animate-in slide-in-from-bottom duration-500 delay-500">
            <PipelineAnimation />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Developer Introduction */}
      <section className="container px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Engineer</h2>
            <p className="text-lg text-muted-foreground">
              Hi, I'm <span className="wiggle">Tarun Gurugubelli</span>, a DevOps engineer with over 4+ years of experience, and I absolutely love bridging the gap between development and operations. My passion lies in automating tasks, optimizing systems, and making deployments smoother and faster. I enjoy collaborating with teams to create efficient workflows and innovative solutions. Let's explore the exciting world of DevOps together!
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/tarun-gurugubelli">
                  <Code2 className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              {/* <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com">
                  <Code2 className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button> */}
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/tarun-gurugubelli/">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src="/data/tarun.jpg" alt="Developer" fill className="object-cover rounded-lg" priority />
          </div>
        </div>
      </section>

      {/* About the Platform */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About DevOps Knowledge Board</h2>
            <p className="text-lg text-muted-foreground">
              DevOps Knowledge Board is more than just a Q&A platform. It's a carefully curated knowledge base designed to help
              developers at all stages of their journey. From basic concepts to advanced implementations, find answers
              to your programming questions and level up your development skills.
            </p>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-muted-foreground">Curated Answers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-muted-foreground">Topics Covered</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-muted-foreground">Resource Access</p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/modules">Start Learning</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
