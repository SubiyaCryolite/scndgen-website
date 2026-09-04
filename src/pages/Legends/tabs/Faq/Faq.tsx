import React from "react";

import { LegendTab } from "@/constants";
import { withTabContext } from "@/context";

const Impl: React.FC = () => {
  return (
    <section>
      <br />
      What is The SCND Genesis: Legends?
      <blockquote>
        It&apos;s a fun, easy to play fighting game based on my web comic THE
        SCND GENESIS.
      </blockquote>
      <br />
      How do you play The SCND Genesis: Legends?
      <blockquote>
        It&apos;s a hybrid of conventional fighters and turn-based RPG&apos;s.
        Each player queues a set of moves (up to a maximum of 4) and executes
        them. The goal is to obliterate your opponent with careful strategies
        rather than sheer brute force.
      </blockquote>
      <br />
      Influenced by?
      <br />
      <blockquote>
        Games like Final Fantasy XIII, Street Fighter IV and Tekken 6.
      </blockquote>
      <br />
      Who is it targeted towards?
      <blockquote>
        Anyone who likes turn-based RPGs, conventional fighters and/or Anime.
        It&apos;s easy to get into.
      </blockquote>
      <br />
      What language is it written in?
      <blockquote>Java 25</blockquote>
      <br />
      What is the tech stack?
      <blockquote>
        The game is a desktop Java application. It uses{" "}
        <a href="https://www.lwjgl.org/" target="_blank">
          LWJGL
        </a>{" "}
        3 for the native layer: GLFW for the window and input, OpenGL 3.3 for
        graphics, NanoVG for 2D drawing, Nuklear for in-game UI, OpenAL for
        audio, and stb for image decoding. Jackson handles JSON. Official
        releases are platform fat JARs (Windows x64, Linux x64, macOS Apple
        silicon) built with Gradle; you still need a Java 25 runtime to launch
        them. Display resolution is chosen in options; the frame rate follows
        the monitor that currently owns the window (vsync on).
      </blockquote>
      <br />
      What platform is it available on?
      <blockquote>
        64-bit desktop Windows, Linux, and macOS. Official GitHub builds cover
        Windows x64, Linux x64, and macOS on Apple silicon. 32-bit systems are
        not supported. You need a Java 25 JDK or JRE (for example Eclipse
        Temurin) and a GPU/driver that can create an OpenGL 3.3 core context.
        Phones and other portable devices are not supported.
      </blockquote>
      <br />
      Where can I download it?
      <blockquote>
        On{" "}
        <a
          href="https://subiyacryolite.itch.io/the-scnd-genesis-legends-rmx"
          target="_blank"
        >
          itch.io
        </a>
        , and as platform JARs on{" "}
        <a
          href="https://github.com/SubiyaCryolite/The-SCND-Genesis-Legends/releases"
          target="_blank"
        >
          GitHub Releases
        </a>
        .
      </blockquote>
      <br />
      Where can I get involved (development)?
      <blockquote>
        The source is on{" "}
        <a
          href="https://github.com/SubiyaCryolite/The-SCND-Genesis-Legends"
          target="_blank"
        >
          GitHub
        </a>
        .
      </blockquote>
      <br />
      Under what license?
      <blockquote>
        The <u>program</u> (game logic, engine, build scripts) is{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">
          GNU GPLv3
        </a>{" "}
        or later. You may copy, modify, and redistribute that code, including
        for a fee, if you follow GPLv3 (source with binaries, same license on
        derivatives of the program, and so on).
        <br />
        <br />
        The <u>content</u> (characters, original art, story, original audio) is{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc/3.0/"
          target="_blank"
        >
          Creative Commons Attribution-NonCommercial 3.0 Unported
        </a>
        . You may copy and adapt that work for non-commercial use with
        attribution. You may not use it commercially without a separate written
        license from Ifunga Ndana.
        <br />
        <br />
        Official builds may be sold by the author. A commercial fork that still
        ships this art, story, or characters needs either replacement content
        you have the right to use, or a separate license. Full terms are in{" "}
        <a
          href="https://github.com/SubiyaCryolite/The-SCND-Genesis-Legends/blob/master/LICENSE.md"
          target="_blank"
        >
          LICENSE.md
        </a>{" "}
        in the source repository.
      </blockquote>
    </section>
  );
};

export const Faq: React.FC = withTabContext(Impl, LegendTab.Faq);
