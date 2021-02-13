import * as React from "react";
import "styled-components/macro";
import SafeLink from "../components/safeLink/safeLink";

export default function Index(props) {
  const subscribed = props.location.search.includes("s=1");

  function onSubmit() {
    window.open("https://buttondown.email/unscripted.email", "popupwindow");
    if (window.fathom) {
      window.fathom.trackGoal("37VNXMRC", 0);
    }
  }

  return subscribed ? (
    <>
      <p>Subscription confirmed! Sent the latest issue to your inbox.</p>
    </>
  ) : (
    <>
      <main
        css={`
          width: 100%;
          height: 100%;
          form {
            display: flex;
            flex-direction: column;
            label {
              font-size: 1.6rem;
            }
            input {
              border-radius: 4px;
              height: 40px;
            }
            input[type="submit"] {
              background: var(--yellow);
              color: var(--black);
              border: 0;
              margin-top: 8px;
            }
            p > a {
              font-size: 1.2rem;
            }
          }
        `}
      >
        <p>
          Hey! welcome to unscripted.email, an unfiltered, unscripted newsletter
          about all things javascript and web development.
        </p>
        <p>
          You'll receive things like links to interesting projects that might
          prove useful, little writeups about a cool command, concept or tool I
          saw or learned recently, or links to curated resources. All of this,
          every other Thursday, in your inbox. No spam. Written by{" "}
          <SafeLink href="https://enriqueortiz.dev">yours truly</SafeLink>.
        </p>
        <p>Yup. That's it. Subscribe down below.</p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/unscripted.email"
          method="post"
          target="popupwindow"
          onsubmit={onSubmit}
          class="embeddable-buttondown-form"
        >
          <label for="bd-email">Enter your email</label>
          <input type="email" name="email" id="bd-email" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
          <p>
            <a
              href="https://buttondown.email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Buttondown.
            </a>
          </p>
        </form>
      </main>
    </>
  );
}
