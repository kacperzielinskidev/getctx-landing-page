"use client";

import { Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Terminal className="w-5 h-5" />
            <span className="font-mono font-semibold text-lg">getctx</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/features")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Features
            </Link>
            <Link
              href="/install"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/install")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Install
            </Link>
            <Link
              href="/docs"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/docs")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Docs
            </Link>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="/install">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {/* Zastosuj tę samą logikę dla menu mobilnego */}
            <Link
              href="/features"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/features")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/install"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/install")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Install
            </Link>
            <Link
              href="/docs"
              className={`text-sm hover:text-foreground transition-colors ${
                pathname.startsWith("/docs")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
