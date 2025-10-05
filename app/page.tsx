import {
  Terminal,
  Github,
  Zap,
  Filter,
  Folder,
  Bot,
  Bug,
  FileText,
  GraduationCap,
  Search,
} from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-mono mb-4 sm:mb-6">
          <Zap className="w-3 h-3" />
          CLI tool for developers
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
          Aggregate code context
          <br />
          for AI coding assistants
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
          Interactive CLI tool to select files and folders from your project,
          then concatenate them into a single context file for LLMs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono w-full sm:w-auto"
          >
            <Link href="/install" className="flex items-center">
              <Terminal className="w-4 h-4 mr-2" />
              Install Now
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-mono bg-transparent w-full sm:w-auto"
          >
            <Link
              href="https://github.com/kacperzielinskidev/getctx"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Terminal Screenshot */}
        <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl">
          <Image
            src="/getctx-img.png"
            alt="getctx CLI interface showing file selection"
            width={1200}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Folder className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Interactive Selection
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Navigate your filesystem with arrow keys, select files with
              spacebar, and use CTRL+A for bulk selection.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Filtering</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Press / to filter files in real-time. Automatically excludes
              node_modules, .git, and other common directories.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Direct Path Input</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Press CTRL+P to type or paste paths directly. Supports
              tab-completion and ~ for home directory.
            </p>
          </div>
        </div>
      </section>

      <section
        id="use-cases"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Use Cases
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Real-world scenarios where getctx-cli helps developers
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  AI Code Review
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prepare your codebase context for ChatGPT, Claude, or other AI
                  assistants to review your code, suggest improvements, and
                  identify potential issues.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Documentation Generation
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aggregate source files and feed them to AI tools to
                  automatically generate comprehensive documentation, README
                  files, and API references.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Code Analysis & Refactoring
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select specific modules or components and get AI-powered
                  suggestions for refactoring, optimization, and architectural
                  improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Bug className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Debugging Assistance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Share relevant code context with AI when troubleshooting bugs.
                  Include only the files that matter for faster, more accurate
                  debugging help.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Learning & Onboarding
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Help new team members understand complex codebases by feeding
                  selected files to AI for explanations, architecture overviews,
                  and guided walkthroughs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono w-full sm:w-auto cursor-pointer"
          >
            <Link className="flex items-center" href="/install">
              <Terminal className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
