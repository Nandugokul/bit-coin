import SingleAccordion from "../ui/SingleAccordion";
import "./Accordion.css";
function Accordion() {
  const dummyData = [
    {
      heading: "What is your favorite template from BRIX Templates?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      heading: "What is your favorite template from BRIX Templates?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      heading: "What is your favorite template from BRIX Templates?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      heading: "What is your favorite template from BRIX Templates?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      heading: "What is your favorite template from BRIX Templates?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];
  return (
    <div className="AccordionSection p-10 mt-32 m-16">
      <div className="text-center flex flex-col items-center">
        <h4 className="mb-6 secondaryHeading">
          Most Trusted Cryptocurrency Platform
        </h4>
        <p className="w-1/2 text-center mb-10">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus
          .
        </p>
      </div>
      <div className="singleAccordion">
        {dummyData.map((accordion, index) => (
          <SingleAccordion
            key={index}
            heading={accordion.heading}
            content={accordion.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
