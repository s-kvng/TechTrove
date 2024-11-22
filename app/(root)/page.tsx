import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <div className="p-4 text-xl text-violet-600">
        Welcome to the world of Nextjs
      </div>

      <div className="p-4 font-space-grotesk text-xl text-violet-600">
        Welcome to the world of Nextjs
      </div>

      <form
        className="pt-10"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
