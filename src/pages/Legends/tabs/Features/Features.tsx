import { LegendTab, NS } from "../../../../constants";
import { withTabContext } from "../../../../context";

export const Impl: React.FC = () => {
  return (
    <section>
      <br />
      Features
      <ul>
        <li>Characters from The SCND Genesis universe</li>
        <li>Simple yet enjoyable game play</li>
        <li>New dialog and expanded exposition in Story Mode</li>
        <li>New soundtrack by FloatingRabbit</li>
        <li>Multiple, varied and beautifully animated stages</li>
        <li>Difficulty and time limit presets</li>
        <li>LAN and Online play</li>
        <li>Achievements</li>
      </ul>
    </section>
  );
};

export const Features = withTabContext(Impl, LegendTab.Features, NS.Lgd);
