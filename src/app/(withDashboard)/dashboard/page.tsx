import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in User Email : {session?.user?.email}
          </h1>
          <Image
            height={100}
            width={100}
            src={session?.user?.image || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"}
            alt="User Image"
            className="rounded-full mx-auto mt-10"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
