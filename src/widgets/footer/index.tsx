import { FooterColumnContent } from "~/shared/constants/footercontent";
import { Container } from "~/shared/ui";
import FooterColumn from "./ui/footerColumn";

const Footer = () => {
  return (
    <footer className="mt-10">
      <Container>
        {FooterColumnContent.map((item, i) => (
          <FooterColumn
            key={i}
            title={item.title}
            content={item.content}
            column={item.column}
          />
        ))}
      </Container>
    </footer>
  );
};

export default Footer;
