import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Folder,
  Filter,
  Keyboard,
  Zap,
  Eye,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Powerful Features for Developers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Built with modern Go architecture and the bubbletea TUI framework,
            getctx provides a seamless experience for aggregating code context.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Folder className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Interactive File Navigation
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Navigate your filesystem with intuitive arrow key controls. Press
              Enter to open directories and Backspace to go to parent folders.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Arrow keys for cursor movement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Enter to navigate into directories</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Backspace to go to parent directory</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Filter className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Real-Time Filtering</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Press / to activate live filtering. Search through files instantly
              with case-insensitive matching and interact with filtered results.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Instant in-memory filtering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Case-insensitive search</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Clear visual indicators</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Keyboard className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Direct Path Input</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Press CTRL+P to type or paste paths directly. Supports
              tab-completion, tilde expansion, and both absolute and relative
              paths.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Tab-completion support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>~ for home directory</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Clear error handling</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Intelligent Exclusions
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Automatically excludes common directories and files like
              node_modules, .git, and binary files. Ignored items are visually
              dimmed.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Configurable blacklist</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Visual dimming of ignored items</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <span>Prevents accidental selection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            More Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <Zap className="w-8 h-8  mb-3" />
              <h4 className="font-semibold mb-2">Bulk Selection</h4>
              <p className="text-sm text-muted-foreground">
                Use Spacebar to toggle individual files or CTRL+A to select all
                visible items at once.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <Eye className="w-8 h-8  mb-3" />
              <h4 className="font-semibold mb-2">Responsive UI</h4>
              <p className="text-sm text-muted-foreground">
                Fully responsive terminal interface with smooth scrolling
                viewport for lists of any length.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <FileText className="w-8 h-8  mb-3" />
              <h4 className="font-semibold mb-2">Structured Logging</h4>
              <p className="text-sm text-muted-foreground">
                JSON-formatted debug logs for easier troubleshooting and
                application monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center p-8 sm:p-12 rounded-lg bg-card border border-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
            Install getctx now and start aggregating code context for your AI
            coding assistants.
          </p>
          <a
            href="/install"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono text-sm sm:text-base"
          >
            View Installation Guide
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
