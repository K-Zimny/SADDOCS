import Button from "@/app/components/button/Button";
import Copy from "@/app/components/copy/Copy";
import Header from "@/app/components/header/Header";
import Tabs from "@/app/components/tabs/Tabs";
import FlashCards from "@/app/components/flashcards/FlashCards";

export default [
  {
    tabName: "Home",
    content: (
      <>
        <h1>Security App Development Documentation</h1>
        <p>Welcome to the SAD training material.</p>
      </>
    ),
  },
  {
    tabName: "FlashCards",
    content: (
      <>
        <FlashCards></FlashCards>
      </>
    ),
  },
];
