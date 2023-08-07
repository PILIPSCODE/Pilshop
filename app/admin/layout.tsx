import SideBar from "@/Feature/components/Profile/Store/admin/SideBar";

export default function DashboardLayout({children,params}: {children: React.ReactNode;params:{userid:string}}) {
  return (
    <div className="h-screen flex overflow-x-hidden" data-theme="cupcake">
        <SideBar params={params.userid} />
        <div className="ml-20 w-full max-md:ml-0">
           
            {children}
        </div>
    </div>
  );
}
