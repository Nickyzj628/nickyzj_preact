import RecentAnimes from "@/components/home/recent-animes";
import RecentBlogs from "@/components/home/recent-blogs";
import Shanbay from "@/components/home/shanbay";
import { getPeriod } from "@/helpers/time";
import { useUser } from "@/hooks/store";

const Page = () => {
  const user = useUser();

  return (
    <>
      <div className="w-full">
        <h4 className="text-neutral-500 dark:text-neutral-400">
          {getPeriod()}好，欢迎回来：
        </h4>
        <h1>
          {user.name}
        </h1>
      </div>
      <Shanbay />
      <RecentBlogs />
      <RecentAnimes />
    </>
  );
};

export default Page;