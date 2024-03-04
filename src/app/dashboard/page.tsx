"use client";
import { useRouter } from "next/navigation";
import { DashboardMenu } from "@/components/DashboardComponents/ui/utils/DashboardMenu";
const Page = () => {
  const router = useRouter();
  //  verift access token
  // const accessToken = localStorage.getItem("accessToken");
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/auth/login");
    }
  }

  return (
    <div className="h-screen">
      <DashboardMenu />
    </div>
  );
};

export default Page;
