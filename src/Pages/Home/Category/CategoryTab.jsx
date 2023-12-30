import { Tabs, TabList, Tab, PanelList, Panel } from "react-tabtab";
import Vector from "./Vector/Vector";
import Photos from "./Photos/Photos";
const CategoryTab = () => {
  return (
    <div className="">
      <Tabs>
        <TabList className="justify-center">
          <Tab>Photos</Tab>
          <Tab>Vector</Tab>
          <Tab>Patterns</Tab>
          <Tab>Illustration</Tab>
          <Tab>PSD</Tab>
        </TabList>
        <PanelList>
          <Panel>
            <Photos></Photos>
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
