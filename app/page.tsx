"use client";
import React from "react";
import site_content from "@/app/data/site_content";
import logo from "@/public/logo.svg";

import Tabs from "@/app/components/tabs/Tabs";
import Image from "next/image";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header element="h1">SADDOCS</Header>

      <hr />
      <Tabs>{site_content}</Tabs>
    </main>
  );
}
