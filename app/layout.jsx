import "@/app/globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";

export const metadata = {
  metadataBase: new URL("https://belvedereschoolcairo.com/"),
  title: "Belvedere School",
  description:
    "We aspire to develop a harmonious balance of the moral, intellectual, and extracurricular aspects of school life, through an affordable, premium educational system that nurtures and celebrates the authentic identities and diverse cultural heritages of all learners.",
  alternates: {
    canonical: `https://belvedereschoolcairo.com/`,
  },
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
