
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col ml-64">
        <div className="fixed top-0 right-0 left-64 z-20">
          <TopNavigation />
        </div>
        <main className="flex-1 overflow-y-auto pt-16">
          <div className="p-8">
            {children}
          </div>
        </main>
        <footer className="border-t border-border py-4 px-8">
          <p className="text-sm text-muted-foreground">© 2025 Saurav Kumar</p>
        </footer>
      </div>
    </div>
  );
};
