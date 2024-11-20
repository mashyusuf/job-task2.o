import MenuBar from "@/components/MenuBar";
import Categories from "../components/Categories";

import Setting from "../components/Setting";

export default function Home() {
  return (
    <div className="container mx-auto flex grid-cols-4 justify-around ">
      {/* menuBar*/}
     <div>
      <MenuBar />
     </div>
      {/* Categories*/}
     <div>
    <Categories />
     </div>
      {/* Bannner*/}
      {/* Setting*/}
     <div>
    <Setting />
     </div>
    </div>
  );
}
