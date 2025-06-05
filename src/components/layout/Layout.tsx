
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavigation />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </main>
        <footer className="border-t border-gray-200 py-4 px-8">
          <p className="text-sm text-gray-500">© 2025 Saurav Kumar</p>
        </footer>
      </div>
    </div>
  );
};
