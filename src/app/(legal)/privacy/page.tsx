import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Doublewit Consultancy Limited collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <article className={styles.prose}>
      <h1>Privacy Policy</h1>
      <p className={styles.meta}>Last updated: June 2026</p>

      <p>
        Doublewit Consultancy Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;) is committed to protecting the privacy of visitors to
        this website and clients we work with. This policy explains what
        personal information we collect, how it is used, and the rights you
        have under the EU General Data Protection Regulation (GDPR) and the
        Irish Data Protection Act 2018.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you submit through the contact or
          newsletter forms (name, email, phone, company, message).
        </li>
        <li>
          <strong>Technical data</strong> such as IP address, browser type, and
          pages visited, collected via standard server logs.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide our consultancy services.</li>
        <li>To send newsletter content you have explicitly subscribed to.</li>
        <li>
          To maintain the security and performance of this website. We do not
          sell or rent personal data to third parties.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Under GDPR you have the right to access, correct, or delete the
        personal data we hold about you, restrict processing, and lodge a
        complaint with the Irish Data Protection Commission. To exercise these
        rights, email{" "}
        <a href="mailto:seamus@doublewit.eu">seamus@doublewit.eu</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Doublewit Consultancy Limited
        <br />
        49 North Main Street, Wexford Town, Y35 YT44, Ireland.
        <br />
        Email: <a href="mailto:seamus@doublewit.eu">seamus@doublewit.eu</a>
      </p>
    </article>
  );
}
