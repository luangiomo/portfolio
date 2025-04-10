import Container from "@/components/ui/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { navigations } from "@/data/navigation";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <aside className="h-screen sticky top-0 col-span-4 md:col-span-3 hidden md:flex md:flex-col pr-12 pt-12">
        <div className="relative self-end w-10/12 flex flex-col items-end gap-2 end">
          <div className="w-full ">
            <Header mode="vertical" />
          </div>
        </div>
      </aside>
      <main className="col-span-8 md:col-span-9 sm:p-6 lg:p-12 space-y-12 md:border-l md:border-l-white/20">
        <Header mode="horizontal" />
        {navigations.map((nav) => (
          <Container key={nav.name} {...nav} />
        ))}
        <Footer />
      </main>
    </div>
  );
}
