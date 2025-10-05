import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  BookOpen,
  Keyboard,
  Code,
  Layers,
  Settings,
  Terminal,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Complete Guide to getctx
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Everything you need to know about using getctx to aggregate code
            context for AI tools.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-lg bg-card border border-border">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Table of Contents
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
            <a href="#overview" className=" hover:underline">
              1. Overview
            </a>
            <a href="#keyboard-shortcuts" className=" hover:underline">
              2. Keyboard Shortcuts
            </a>
            <a href="#usage-guide" className=" hover:underline">
              3. Usage Guide
            </a>
            <a href="#architecture" className=" hover:underline">
              4. Architecture
            </a>
            <a href="#configuration" className=" hover:underline">
              5. Configuration
            </a>
            <a href="#troubleshooting" className=" hover:underline">
              6. Troubleshooting
            </a>
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 " />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Overview</h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">getctx</strong> (Get Context)
              is a CLI tool written in Go that allows you to interactively
              select files and folders from your filesystem and concatenate
              their contents into a single output file. The primary use case is
              aggregating source code context for AI coding assistants, LLMs,
              bug reports, or documentation.
            </p>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>• Quickly gather relevant code files for AI context</li>
                <li>• Interactive TUI built with bubbletea framework</li>
                <li>
                  • Intelligent file exclusion (node_modules, .git, binaries)
                </li>
                <li>• Real-time filtering and search capabilities</li>
                <li>• Structured logging for debugging</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div id="keyboard-shortcuts" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Keyboard className="w-5 h-5 " />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Keyboard Shortcuts
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Navigation */}
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Navigation
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Move cursor up/down
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    ↑ / ↓
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Enter directory
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    Enter
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Go to parent directory
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    Backspace
                  </code>
                </div>
              </div>
            </div>

            {/* Selection */}
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Selection
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Toggle file selection
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    Space
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Select all visible items
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    CTRL+A
                  </code>
                </div>
              </div>
            </div>

            {/* Filtering & Search */}
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Filtering & Search
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Activate filter mode
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    /
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Direct path input
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    CTRL+P
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Clear filter / Cancel input
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    Esc
                  </code>
                </div>
              </div>
            </div>

            {/* Program Control */}
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Program Control
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Save and exit
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    q
                  </code>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Cancel / Clear selections and exit
                  </span>
                  <code className="px-2 sm:px-3 py-1 rounded bg-secondary font-mono text-xs sm:text-sm whitespace-nowrap">
                    CTRL+C
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guide */}
        <div id="usage-guide" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Terminal className="w-5 h-5 " />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Usage Guide</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Basic Workflow
              </h3>
              <ol className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-mono ">1.</span>
                  <div>
                    <strong className="text-foreground">Launch the tool</strong>{" "}
                    - Run{" "}
                    <code className="px-1.5 py-0.5 rounded bg-secondary">
                      getctx
                    </code>{" "}
                    in your project directory
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono ">2.</span>
                  <div>
                    <strong className="text-foreground">Navigate</strong> - Use
                    arrow keys to browse files and folders
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono ">3.</span>
                  <div>
                    <strong className="text-foreground">Select</strong> - Press
                    Space to select individual files or CTRL+A for bulk
                    selection
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono ">4.</span>
                  <div>
                    <strong className="text-foreground">
                      Filter (optional)
                    </strong>{" "}
                    - Press / to search for specific files
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono ">5.</span>
                  <div>
                    <strong className="text-foreground">Save</strong> - Press q
                    to generate the context file
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Advanced Features
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-foreground">
                    Direct Path Input
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    Press CTRL+P to type or paste paths directly. This is useful
                    when you know exactly where you want to go.
                  </p>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Supports tab-completion</li>
                    <li>• Use ~ for home directory</li>
                    <li>• Works with both absolute and relative paths</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-foreground">
                    Real-Time Filtering
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    Press / to activate filter mode and search through files
                    instantly.
                  </p>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Case-insensitive matching</li>
                    <li>• Instant in-memory filtering</li>
                    <li>• Navigate and select from filtered results</li>
                    <li>• Press Esc to clear the filter</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-foreground">
                    Custom Output File
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Specify a custom output file with the -o flag:
                  </p>
                  <div className="mt-2 p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                    getctx -o ai-context.txt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div id="configuration" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Settings className="w-5 h-5 " />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Configuration</h2>
          </div>

          <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Exclusion Lists
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              getctx automatically excludes common directories and files. The
              exclusion lists are defined in{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary text-xs sm:text-sm break-all">
                internal/config/config.go
              </code>
              :
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">
                  Excluded Folders
                </h4>
                <div className="p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  node_modules, .git, .vscode, dist, build, target, vendor
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">
                  Excluded Files
                </h4>
                <div className="p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  .DS_Store, Thumbs.db, package-lock.json, yarn.lock
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">
                  Excluded Extensions
                </h4>
                <div className="p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  .png, .jpg, .gif, .pdf, .zip, .exe, .dll, .so
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div id="troubleshooting" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Code className="w-5 h-5 " />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Troubleshooting</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm sm:text-base font-semibold mb-2">
                Command not found
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                Ensure{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary">
                  $GOPATH/bin
                </code>{" "}
                is in your PATH:
              </p>
              <div className="p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                export PATH=$PATH:$(go env GOPATH)/bin
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm sm:text-base font-semibold mb-2">
                Enable debug logging
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                Run with the --debug flag to generate debug.log:
              </p>
              <div className="p-3 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                getctx --debug
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm sm:text-base font-semibold mb-2">
                UI rendering issues
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ensure your terminal supports ANSI colors and has sufficient
                dimensions. Minimum recommended size is 80x24.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center p-8 sm:p-12 rounded-lg bg-card border border-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Need More Help?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Check out the GitHub repository for issues, discussions, and
            contributions.
          </p>
          <a
            href="https://github.com/kacperzielinskidev/getctx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono text-sm sm:text-base"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
