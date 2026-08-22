import { Sidebar } from '@/components/Sidebar';
import { SiteFooter } from '@/components/SiteFooter';
import { navItems } from '@/data/nav';
import { useActiveSection } from '@/hooks';
import { About } from '@/sections/About';
import { Certifications } from '@/sections/Certifications';
import { Projects } from '@/sections/Projects';
import { Resume } from '@/sections/Resume';
import styles from './App.module.css';

const SECTION_IDS = navItems.map((item) => item.id);

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className={styles.layout}>
      <Sidebar activeSection={activeSection} />
      <main className={styles.main}>
        <About />
        <Resume />
        <Projects />
        <Certifications />
        <SiteFooter />
      </main>
    </div>
  );
}
