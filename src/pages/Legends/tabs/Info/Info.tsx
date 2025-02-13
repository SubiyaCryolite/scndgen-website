import React from "react";

import { LegendTab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <section>
      <p>
        The SCND Genesis: Legends is a fighting game based on my web comic THE
        SCND GENESIS.The battle system is a hybrid of turn based RPG&apos;s and
        conventional 2D Fighters.The game has a hand drawn comic book graphical
        style and has other anime style effects.
      </p>
      <p>
        RMX is an &quot;Enhanced Edition&quot; of the original 2011 release. You
        can read about the reasons leading up to the development of the updated
        version on&nbsp;
        <a
          href="https://medium.com/@ifungandana/rekindling-love-for-my-first-game-project-as-a-source-of-motivation-816b568aef03"
          target="_blank"
        >
          Medium
        </a>
        .
      </p>
      <p>
        <iframe
          style={{ border: 0 }}
          src="https://itch.io/embed/148877"
          width="677"
          height="167"
        />
      </p>
    </section>
  );
};

export const Info: React.FC = withTabContext(Impl, LegendTab.Info);
