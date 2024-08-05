import React, { useState, ReactNode } from "react";
import "./tabs.css";

import Button from "@/app/components/button/Button";

interface TabItem {
  tabName: string;
  content: ReactNode;
}

interface TabsProps {
  children: TabItem[];
}

export default function Tabs({ children }: TabsProps) {
  const [tab, setTab] = useState<TabItem>(children[0]);

  const handleTabs = (content: TabItem) => {
    setTab(content);
  };

  return (
    <div className="tabs-container">
      <div className="button-bar">
        {children.map((item, i) => (
          <Button
            key={i}
            className={tab === item ? "active" : ""}
            onButtonClick={() => handleTabs(item)}
          >
            {item.tabName}
          </Button>
        ))}
      </div>
      <div className="tabs-content-container">
        <div key={tab.tabName} className="fade-in">
          {tab.content}
        </div>
      </div>
    </div>
  );
}
