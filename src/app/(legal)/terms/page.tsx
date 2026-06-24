import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions governing the use of the Doublewit Consultancy Limited website.",
};

export default function TermsPage() {
  return (
    <article className={styles.prose}>
      <h1>Terms of Use</h1>
      <p className={styles.meta}>Last updated: June 2026</p>

      <p>
        These terms govern your use of the Doublewit Consultancy Limited
        website. By accessing or using this site, you agree to be bound by
        them.
      </p>

      <h2>Use of the site</h2>
      <p>
        Content on this website is provided for general information about our
        consultancy services. It does not constitute professional advice; any
        engagement is subject to a separate written agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All text, graphics, logos, and design elements on this site are the
        property of Doublewit Consultancy Limited unless otherwise indicated.
        You may not reproduce or redistribute any part of the site without our
        prior written consent.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We make reasonable efforts to keep the content of this site accurate
        and current but make no warranties as to its completeness or fitness
        for any particular purpose. To the maximum extent permitted by law, we
        will not be liable for any loss arising from your use of this site.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of Ireland and the exclusive
        jurisdiction of the Irish courts.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:seamus@doublewit.eu">seamus@doublewit.eu</a>.
      </p>
    </article>
  );
}
