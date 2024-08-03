import { Tab } from "../../constants";
import { withTabContext } from "../../context";

export const Impl: React.FC = () => {
  return (
    <div className="text-center">
      <div>
        <img
          src="/media/images/ifunga.jpg"
          width="320"
          height="240"
          title="Ifunga Ndana"
          alt="Ifunga Ndana"
        />
      </div>
      <h3>Contact Details</h3>
      <p>
        <a
          href="mailto:ifungandana@gmail.com?subject=THE SCND GENESIS"
          title="Contact Ifunga Ndana via E-mail"
        >
          <img
            alt="Contact Ifunga Ndana via E-mail"
            src="/media/images/At Symbol@2x.png"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=1066802020"
          title="Become my friend on Facebook"
          target="_blank"
        >
          <img alt="Facebook" src="/media/images/Facebook Circle@2x.png" />
        </a>
        <a
          href="https://www.twitter.com/subiyacryolite"
          title="Follow me on twitter"
          target="_blank"
        >
          <img alt="Twitter" src="/media/images/Twitter Circle@2x.png" />
        </a>
        <a
          href="https://www.linkedin.com/pub/ifunga-ndana/44/a30/667"
          title="LinkedIn Profile"
          target="_blank"
        >
          <img alt="LinkedIn" src="/media/images/LinkedIn Circle@2x.png" />
        </a>
      </p>
      <h3>Favourite Quotes</h3>
      <br />
      <i>
        &quot;Whatever a man can conceive and believe he can achieve&quot;
      </i>{" "}
      - Napolean Hill.
      <br />
      <i>&quot;Your thoughts are the architects of your destiny&quot;</i> -
      David O. McKay.
      <br />
      <i>
        &quot;You don&amp;t have to be great to start but you have to start to
        be great&quot;
      </i>
      - Zig Ziglar
    </div>
  );
};

export const Author = withTabContext(Impl, Tab.Author);
