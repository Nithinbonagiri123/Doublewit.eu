import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "How Doublewit Consultancy Limited uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <article className={styles.prose}>
      <h1>Cookie Notice</h1>
      <p className={styles.meta}>Last updated: June 2026</p>

      <p>
        This notice explains how cookies and similar technologies are used on
        the Doublewit Consultancy Limited website.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help the site function and provide information to its
        owners.
      </p>

      <h2>How we use cookies</h2>
      <ul>
        <li>
          <strong>Strictly necessary</strong> &mdash; required for the site to
          function (e.g. routing, security). These are always active.
        </li>
        <li>
          <strong>Performance</strong> &mdash; if enabled in future, anonymous
          analytics to understand which pages are most useful.
        </li>
      </ul>

      <p>
        This site does not currently use marketing or third-party advertising
        cookies. If that changes, we will update this notice and offer you a
        consent choice.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can clear or block cookies through your browser settings at any
        time. Disabling strictly necessary cookies may affect site
        functionality.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about our use of cookies can be sent to{" "}
        <a href="mailto:seamus@doublewit.eu">seamus@doublewit.eu</a>.
      </p>
    </article>
  );
}
