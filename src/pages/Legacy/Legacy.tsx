import React from "react";

import { MetaTitle, Tab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <div>
      <meta name="title" content={`${MetaTitle} Legacy`} />
      <div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/pNQe5iqfYu8"
            style={{ border: "none" }}
            className="video"
          />
        </div>
      </div>
      <div>
        <br />
        Story
        <blockquote>
          Following the events at Ibex Hill Academy, war is on the Horizon. A
          Sect is harvesting human souls to summon a devastating Celestia Weapon
          of unparalleled power and The Empire of The South is steadily
          advancing towards Ambias borders. The Saints have to act swiftly to
          save the kingdom and prevent full scale war. The story is based on my
          webomic.
          <br />
          Please <u>note</u> that this is an unfinished version of the SCND
          Genesis: Legacy. Features and content may be removed, changed, or
          added without warning. Artwork and Animations are <u>not</u> final,
          but used to demonstrate the core concept of the game only.
        </blockquote>
        <p>
          <a
            href="https://media.indiedb.com/images/downloads/1/82/81765/scndgen_legacy_2015-2-6-84953-sn.png"
            title="Screenshot"
            target="_blank"
            data-lightbox="gallery"
          >
            <img
              src="https://media.indiedb.com/images/downloads/1/82/81765/scndgen_legacy_2015-2-6-84953-sn.png"
              alt="New screen filters, UI changes"
              width="100%"
              id="pictureFrame"
            />
          </a>
        </p>
      </div>
      <div>
        <br />
        Game
        <blockquote>
          <div>
            The SCND Genesis: Legacy is a hybrid of turn based RPGs and fighting
            games. Unlike fighting games which put emphasis on mastering button
            combinations for combos, this game puts emphasis on when and how to
            use your attacks. It is based on a web comic of the same name.
          </div>
          <br />
          <div>
            Gameplay is an evolution of the Jenesis Combat Engine (JCE). Each
            action is of a specific type and has its own cool down. Launcher
            attacks act as Combo Breakers that can be used strategically against
            your opponent as well as to extend your own combos.
          </div>
          <br />
          <div>
            Base damage is affected by a Clash System, as you and your opponent
            land hits simultaneously a multiplier increases making both of you
            more powerful. Finally a fury bar is shared by both characters and
            can be used to pull off a Rage Combo when fully charged.
          </div>
          <br />
          <div>
            <ul>
              <li>
                You can alter your characters strengths and weaknesses by
                switching Battle Classes (Paradigms) in real-time. These
                paradigms have a direct effect on your characters speed and the
                effectiveness of his/her actions.
              </li>
              <li>Battles are fast paced and strategic.</li>
              <li>
                Features an interactive story mode based on The SCND Genesis
                comic, driven by in-game cinematics.
              </li>
              <li>Features gameplay and story specific achievements</li>
              <li>Features unlockable characters and stages</li>
              <li>
                Supports Keyboard, Mice, the official XBox 360/One controller
                for Windows as well as the PS3/4 Dual Shock controller
              </li>
              <li>
                Supports translation via XML files (Currently only English is
                supported)
              </li>
              <li>Will work on Windows, Linux and Steam OS</li>
              <li>Rendered by OpenGL4.4, written in Java 8</li>
            </ul>
          </div>
        </blockquote>
        <div>
          <a
            href="https://media.indiedb.com/images/downloads/1/82/81436/scndgen_legacy_2015-1-28-57903-s.png"
            title="Screenshot"
            target="_blank"
            data-lightbox="gallery"
          >
            <img
              src="https://media.indiedb.com/images/downloads/1/82/81436/scndgen_legacy_2015-1-28-57903-s.png"
              alt="New screen filters, UI changes"
              width="100%"
            />
          </a>
        </div>
        <br />
      </div>
      <div>
        <br />
        Influenced by?
        <blockquote>
          Games like Final Fantasy XIII, Street Fighter IV and Tekken 6.
          Basically a mashup of what I like about those games.
        </blockquote>
        <br />
        What language is it written in?<blockquote>Kotlin</blockquote>
        <br />
        What platform is it available on?
        <blockquote>64bit Linux and Windows with OpenGL 4.4 support</blockquote>
      </div>
    </div>
  );
};

export const Legacy: React.FC = withTabContext(Impl, Tab.Legacy);
