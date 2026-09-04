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
          Java 25 JDK or JRE (for example Eclipse Temurin 25). The release JAR
          does not bundle a JVM.
        </li>
        <li>
          64-bit Windows 10 or later, 64-bit Linux, or macOS on Apple silicon
          (official builds). Intel Mac and other architectures need a local
          Gradle build.
        </li>
        <li>GPU and drivers with OpenGL 3.3 core support</li>
        <li>RAM: 4 GB</li>
        <li>Graphics memory: 512 MB</li>
        <li>CPU: 64-bit dual core or better</li>
      </ul>
      <br />
      Recommended Setup
      <ul>
        <li>Java 25 JDK or JRE</li>
        <li>
          64-bit Windows, Linux, or macOS on Apple silicon, with current GPU
          drivers
        </li>
        <li>RAM: 8 GB</li>
        <li>Graphics: dedicated GPU with OpenGL 3.3 or later</li>
        <li>Any modern dual core or better</li>
        <li>Network connection for LAN or online play</li>
      </ul>
    </section>
  );
};

export const Requirements: React.FC = withTabContext(
  Impl,
  LegendTab.Requirements,
);
