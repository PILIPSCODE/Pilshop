
import Profile from "@/Feature/components/Profile/Profile";
import getUserParam from "@/app/actions/getUserParams"
import getUserC from "@/app/actions/getCurrentUser"
import ProfileLoad from "@/Feature/components/loadingSekeleton/ProfileLoad";
import ProductStore from "@/Feature/components/Profile/Store/ProductStore";

const page = async({ params }: { params: { userid: string } }) => {
  const YourAcc = await getUserC()
  const getuserp = await getUserParam(params.userid.replace(/%20/g," "))
  if(getuserp?.usersStore){

    return (
      <div
        className="h-screen font-poppins text-black overflow-y-scroll "
        data-theme="cupcake"
      >
        <div className="flex flex-col w-full items-center ">
          {YourAcc? (
            <>
              <Profile
                YourAcc={YourAcc}
                params={"content"}
                content={params.userid}
                profileParams={getuserp?.usersStore}
              />
              <ProductStore contentStore={getuserp.usersStore}/>
            </>
          ) : (
            <ProfileLoad />
          )}
        </div>
      </div>
    );
  }else{
    return <div >404 {`${params.userid}`} haven&apos;t store</div>
  }
};

export default page;
