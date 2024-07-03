import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./based";

interface TabItem {
    trigger: React.ReactNode;
    value: string;
    content: React.ReactNode;
  }
  
  interface CustomTabsProps {
    tabs: TabItem[];
    onValueChange?: ()=> void
  }
  
  const CustomTabs: React.FC<CustomTabsProps> = ({ onValueChange, tabs }) => {
    return (
      <Tabs onValueChange={onValueChange} defaultValue={tabs[0].value} className="w-[400px]">
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value}>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    );
  };
  
export {CustomTabs}
