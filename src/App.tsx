import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import BlogPost from "@/pages/BlogPost";

// Inovatii pages
import EraCloud from "@/pages/inovatii/EraCloud";
import EraEducation from "@/pages/inovatii/EraEducation";
import EraFinance from "@/pages/inovatii/EraFinance";
import EraRealEstate from "@/pages/inovatii/EraRealEstate";
import PaperlessEdu from "@/pages/inovatii/PaperlessEdu";

// Legal pages
import Confidentialitate from "@/pages/legal/Confidentialitate";
import Termeni from "@/pages/legal/Termeni";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />

          {/* Inovatii */}
          <Route path="/inovatii/era-cloud" element={<EraCloud />} />
          <Route path="/inovatii/era-education" element={<EraEducation />} />
          <Route path="/inovatii/era-finance" element={<EraFinance />} />
          <Route path="/inovatii/era-real-estate" element={<EraRealEstate />} />
          <Route path="/inovatii/paperless-edu" element={<PaperlessEdu />} />

          {/* Legal */}
          <Route path="/legal/confidentialitate" element={<Confidentialitate />} />
          <Route path="/legal/termeni" element={<Termeni />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}