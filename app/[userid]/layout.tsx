import CartQty from "@/Feature/components/ecommers/Landing/CartQty";
import Link from "next/link";


export default function ProfileLayout({children,params}: {children: React.ReactNode;params:{userid:string}}) {
  return (
    <div className="h-screen flex overflow-x-hidden" data-theme="cupcake">
        <div className="w-full">
            <div className="fixed bottom-4 left-4">
             <Link href={'/Cart'}><CartQty/></Link>
            </div>
            {children}
        </div>
    </div>
  );
}
