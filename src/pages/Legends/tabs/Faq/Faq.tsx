import { LegendTab, NS } from "../../../../constants";
import { withTabContext } from "../../../../context";

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
        Each player ques a set of moves (up to a maximum of 4) and executes
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
      <blockquote>Kotlin</blockquote>
      <br />
      What platform is it available on?
      <blockquote>
        Java is a platform on it&apos;s own. Hence any OS with the Java Runtime
        Environment installed can run the game. Both 64 and 32 bit variants of
        Windows, Mac OSX and Linux are supported as well as a few portable
        devices.
      </blockquote>
      <br />
      Where can I download it?
      <blockquote>
        Right{" "}
        <a
          href="https://subiyacryolite.itch.io/the-scnd-genesis-legends-rmx"
          target="_blank"
        >
          here
        </a>
        .
      </blockquote>
      <br />
      Where can I get involved (development)?
      <blockquote>
        Right{" "}
        <a
          href="https://github.com/SubiyaCryolite/The-SCND-Genesis-Legends"
          target="_blank"
        >
          here
        </a>
        . The code is available as a GitRepo on GitHub
      </blockquote>
      <br />
      Under what license?
      <blockquote>
        The <u>code base</u> is under the{" "}
        <a href="https://www.gnu.org/licenses/" target="_blank">
          GNU General Public License version 3
        </a>
        , meaning it&apos;s free software. The source code can be downloaded and
        modified, but cannot be used for commercial purposes (e.g a commercial
        spin-off). The <u>artwork</u>of the game is under the{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc/3.0/"
          target="_blank"
        >
          Creative Commons Attribution-NonCommercial 3.0 Unported
        </a>
        &nbsp;license. This means you are free to copy, remix, distribute and
        transmit the work as long as you give credit to the author and
        don&apos;t use this work for commercial purposes. The&nbsp;
        <u>Intellectual Property</u> &quot;Story, universe, characters&quot; and
        such are copyrighted.
      </blockquote>
    </section>
  );
};

export const Faq = withTabContext(Impl, LegendTab.Faq, NS.Lgd);
