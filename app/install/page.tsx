import { Navigation } from "@/components/navigation";
import { FaApple, FaLinux, FaWindows, FaDownload } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import { Footer } from "@/components/footer";
import { Download, ArrowRight } from "lucide-react";

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-mono mb-4 sm:mb-6">
            <Download className="w-3 h-3" />
            Installation Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Get Started in Seconds
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Choose the installation method that suits you best. Using a package
            manager is recommended for easy installation and automatic updates.
          </p>
        </div>

        {/* Installation Methods */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Installation Methods
          </h2>

          {/* macOS Installation */}
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaApple className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">macOS</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Install via Homebrew (Recommended)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  1. Add the tap (one-time setup):
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  brew tap kacperzielinskidev/tap
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  2. Install getctx:
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  brew install getctx
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs sm:text-sm font-semibold mb-2">
                  Updating getctx in the future:
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  brew upgrade getctx
                </div>
              </div>
            </div>
          </div>

          {/* Linux Installation */}
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaLinux className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Linux</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Multiple installation options available
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Option A: Debian/Ubuntu */}
              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-3">
                  Option A: Debian, Ubuntu, and derivatives (via .deb package)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  This method uses your system&apos;s native package manager and
                  is recommended for Debian-based distributions.
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto mb-3">
                  {`curl -sL -o /tmp/getctx.deb $(curl -s https://api.github.com/repos/kacperzielinskidev/getctx/releases/latest | grep "browser_download_url.*amd64.deb" | cut -d '"' -f 4)`}
                </div>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  {`sudo dpkg -i /tmp/getctx.deb`}
                </div>
              </div>

              {/* Option B: Homebrew on Linux */}
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm sm:text-base font-semibold mb-3">
                  Option B: Using Homebrew on Linux
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  If you already use Homebrew on Linux (Linuxbrew), follow the
                  same instructions as for macOS:
                </p>
                <div className="space-y-3">
                  <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                    brew tap kacperzielinskidev/tap
                  </div>
                  <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                    brew install getctx
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Windows Installation */}
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaWindows className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Windows (Scoop)
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Install via Scoop package manager
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  1. Add the bucket (one-time setup):
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Open PowerShell and run:
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  scoop bucket add kacperzielinskidev
                  https://github.com/kacperzielinskidev/scoop-bucket.git
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  2. Install getctx:
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  scoop install getctx
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs sm:text-sm font-semibold mb-2">
                  Updating getctx in the future:
                </p>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  scoop update getctx
                </div>
              </div>
            </div>
          </div>

          {/* Go Install */}
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaGolang className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Go Install</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  For Go developers
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                If you have Go installed, you can install getctx directly:
              </p>
              <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                go install
                github.com/kacperzielinskidev/getctx/cmd/getctx@latest
              </div>
              <p className="text-xs text-muted-foreground">
                The getctx binary will be placed in your{" "}
                <code className="px-1 py-0.5 rounded bg-secondary">
                  $GOPATH/bin
                </code>{" "}
                directory.
              </p>
            </div>
          </div>

          {/* Manual Installation */}
          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaDownload className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Manual Installation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Download pre-compiled binaries
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                You can download a pre-compiled binary for your operating system
                directly from GitHub:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  Go to the{" "}
                  <a
                    href="https://github.com/kacperzielinskidev/getctx/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Latest Release page
                  </a>
                </li>
                <li>
                  Download the appropriate archive (.zip or .tar.gz) for your OS
                  and architecture
                </li>
                <li>Extract the archive</li>
                <li>
                  Move the{" "}
                  <code className="px-1 py-0.5 rounded bg-secondary">
                    getctx
                  </code>{" "}
                  (or{" "}
                  <code className="px-1 py-0.5 rounded bg-secondary">
                    getctx.exe
                  </code>
                  ) executable to a directory in your system&apos;s PATH (e.g.,{" "}
                  <code className="px-1 py-0.5 rounded bg-secondary">
                    /usr/local/bin
                  </code>{" "}
                  on Linux)
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Quick Start
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold">
                  Step 1: Run getctx
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm mb-3">
                getctx
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                This launches the interactive TUI in your current directory.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-mono  font-bold">
                  Step 2: Select files
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Navigate with arrow keys, press{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary">
                  Space
                </code>{" "}
                to select files, or{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary">
                  CTRL+A
                </code>{" "}
                to select all.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold">
                  Step 3: Save and exit
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Press{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary">q</code> to
                save your selections and generate the context file.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold">
                  Step 4: Use the output
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Your aggregated context is saved to{" "}
                <code className="px-1.5 py-0.5 rounded bg-secondary">
                  context.txt
                </code>{" "}
                by default.
              </p>
            </div>
          </div>
        </div>

        {/* Command Line Options */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Command Line Options
          </h2>

          <div className="p-6 sm:p-8 rounded-lg bg-card border border-border">
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
                  <code className="font-mono   text-sm">-o, --output</code>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Specify custom output file
                  </span>
                </div>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  getctx -o my-context.txt
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
                  <code className="font-mono  text-sm">--debug</code>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Enable debug logging to debug.log
                  </span>
                </div>
                <div className="p-3 sm:p-4 rounded bg-secondary font-mono text-xs sm:text-sm overflow-x-auto">
                  getctx --debug
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center p-8 sm:p-12 rounded-lg bg-card border border-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Next Steps
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
            Learn about all the features and keyboard shortcuts in the
            documentation.
          </p>
          <a
            href="/docs"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono text-sm sm:text-base"
          >
            Read Documentation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
