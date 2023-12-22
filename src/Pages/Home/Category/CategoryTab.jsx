import { Tabs, TabList, Tab, PanelList, Panel } from "react-tabtab";
import Image from "./Image/Image";
import Vector from "./Vector/Vector";
const CategoryTab = () => {
  return (
    <div className="justify-items-center">
      <Tabs>
        <TabList>
          <Tab>Image</Tab>
          <Tab>Vector</Tab>
        </TabList>
        <PanelList>
          <Panel>
            <Image></Image>
          </Panel>
          <Panel>
            <Vector></Vector>
          </Panel>
        </PanelList>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
