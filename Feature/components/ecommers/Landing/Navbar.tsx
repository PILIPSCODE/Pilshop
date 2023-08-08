"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import CartQty from "./CartQty";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

type props = {
  session: Session | null;
};
const Navbar = (props: props) => {
  const [searchon, setSearcon] = useState(false);
  const [sideprofile, SetSideProfile] = useState(false);

  return (
    <div
      data-theme="pastel"
      className="flex py-2 justify-around items-center z-50 shadow-md  shadow-gray-300  text-white font-poppins"
    >
      <div className="flex mx-3">
        <h1 className="bg-black text-white text-xl p-1 rounded-lg">Wism</h1>
      </div>
      <div className="form-control w-7/12 overflow-x-hidden flex flex-row items-center gap-1">
        <input
          data-theme="dark"
          type="text"
          placeholder={"Search And Enter"}
          className={`h-14 w-full  sm:rounded-lg max-sm:absolute  pl-6   max-sm:right-0 ${
            searchon
              ? "max-sm:z-40 max-sm:duration-300 max-sm:translate-y-14"
              : "max-sm:translate-y-0 max-sm:duration-300 max-sm:-z-10"
          }`}
        />
        <FaSearchPlus
          className="text-2xl text-black"
          onClick={() => {
            setSearcon(!searchon);
          }}
        />
      </div>
      {props.session ? (
        <div className="flex-none flex items-center">
          <Link href="/favorite">
            <FaHeart className="text-black" size={25} />
          </Link>
          <div className="dropdown dropdown-end z-50">
            <Link href="/Cart">
              <label className="btn btn-ghost btn-circle">
                <CartQty />
              </label>
            </Link>
          </div>
          <div className="relative ">
            <label
              tabIndex={1}
              className="btn btn-ghost btn-circle avatar mx-2 "
            >
              <div className="w-10 relative">
                <Image
                  sizes="(max-width:100%)"
                  alt={"kkewoko"}
                  fill
                  src={`${
                    props.session?.user?.image !== undefined &&
                    props.session?.user?.image !== null
                      ? props.session?.user?.image
                      : "/profile-no-log.png"
                  }`}
                  onClick={() => {
                    SetSideProfile(!sideprofile);
                  }}
                  className="bg-white  rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={1}
              className={`menu menu-sm text-black  mt-4 p-2 shadow bg-base-100 rounded-box w-52 duration-300 absolute z-20  ${
                sideprofile ? " -right-12" : "-right-96"
              }`}
            >
              <li>
                <Link
                  href={`/${props.session?.user?.name}/store`}
                  className="justify-between"
                  shallow
                >
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link href={"/auth/SignIn"} className="btn btn-warning">
          SignIn
        </Link>
      )}
    </div>
  );
};

export default Navbar;
