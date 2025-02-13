import React from "react";

import { LegendTab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <section>
      <br />
      Minimum Requirements
      <ul>
        <li>
          Java Runtime Environment: Version 8 Update 40 (1.8.0_40) or higher
        </li>
        <li>Operating System: Windows, Mac or Linux</li>
        <li>RAM: 2GB</li>
        <li>Graphics Card: 256MB VRAM</li>
        <li>CPU: 1.4 GHz Single Core</li>
      </ul>
      <br />
      Recommended Setup
      <ul>
        <li>
          Java Runtime Environment: Version 8 Update 40 (1.8.0_40) or higher
        </li>
        <li>Operating System: Windows, Mac or Linux</li>
        <li>RAM: 4GB</li>
        <li>Graphics Card: 512MB VRAM</li>
        <li>Any Dual Core and higher</li>
        <li>Stable internet connection</li>
      </ul>
    </section>
  );
};

export const Requirements: React.FC = withTabContext(
  Impl,
  LegendTab.Requirements,
);
