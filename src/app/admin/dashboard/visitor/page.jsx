import Sidebar from "@/components/Dashboard/Sidebar";
import Visitor from "@/components/Dashboard/Visitor";

export default function Page() {
    return (
      <div className="flex min-h-screen ">
        <Sidebar />
        <main className="flex-1 ">
          <Visitor/>
        </main>
      </div>
    );
}
