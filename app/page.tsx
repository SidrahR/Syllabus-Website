"use client";

import WithSubnavigation from "./Navbar";
import CallToActionWithIllustration from "./Header";
import SmallCentered from "./Footer";

export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <CallToActionWithIllustration />
      <SmallCentered />
    </>
  );
}
