
import Profile from "@/Feature/components/Profile/Profile";
import getUserParam from "@/app/actions/getUserParams"
import getUserC from "@/app/actions/getCurrentUser"
import ProfileLoad from "@/Feature/components/loadingSekeleton/ProfileLoad";
import ProductStore from "@/Feature/components/Profile/Store/ProductStore";
import NavStore from "@/Feature/components/Profile/Store/NavStore";
import Link from "next/link";
import {  FaChartBar} from "react-icons/fa";

const page = async({ params }: { params: { userid: string } }) => {
  const YourAcc = await getUserC()
  const getuserp = await getUserParam(params.userid.replace("%20"," "))
  return (
    <div
      className="h-screen font-poppins text-black overflow-y-scroll "
      data-theme="cupcake"
    >
      <div className="flex flex-col w-full items-center ">
        {YourAcc?.name  ? (
          <>
            <Profile
              YourAcc={YourAcc}
              params={"content"}
              profileParams={getuserp}
            />
            <NavStore />
            <ProductStore contentStore={getuserp}/>
            <div className="fixed bottom-3 z-40 right-5 flex justify-center items-center">
              <div className="text-4xl relative z-50 rounded-full p-2 bg-base-300">
                {YourAcc.id === getuserp?.id?
                <Link href={`/admin/Dasboard`}>
                  <FaChartBar/>
                </Link>
                :""
                }
              </div>
            </div>
          </>
        ) : (
          <ProfileLoad />
        )}
      </div>
    </div>
  );
};

export default page;
