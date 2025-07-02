import Favorites from "@app/favorites/favorites";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Favorites />
    </Suspense>
  );
};

export default Page;
