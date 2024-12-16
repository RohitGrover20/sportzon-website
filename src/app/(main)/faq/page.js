import React from "react";

function FAQPage() {
  const faqs = [
    {
      question: "What is Sportzon?",
      answer:
        "Sportzon is an innovative platform that brings together sports enthusiasts, athletes, and brands to connect, share, and create memorable experiences in the world of sports. Whether you're looking to join events, find teammates, or discover exciting sports gear, Sportzon has something for everyone.",
    },
    {
      question: "How can I participate in sports events on Sportzon?",
      answer:
        "To participate in events, visit the Events section on our platform. You can explore upcoming events by category, location, or popularity. Once you find an event you like, click on it for detailed information and registration steps. Make sure to complete the registration before the deadline to secure your spot!",
    },
    {
      question: "What are the benefits of becoming a Sportzon partner?",
      answer:
        "By partnering with Sportzon, you gain access to a wide community of sports enthusiasts and professionals. Our partnership opportunities include event sponsorships, co-branding, and tailored marketing campaigns to enhance your brand visibility. Visit the Partner With Us page for more information and to submit a partnership inquiry.",
    },
    {
      question: "What types of events are available on Sportzon?",
      answer:
        "Sportzon hosts a variety of events, including sports tournaments, fitness workshops, virtual marathons, and networking meetups for sports professionals. We aim to cater to both amateur and professional athletes across a range of sports and fitness interests.",
    },
    {
      question: "How do I access premium features on Sportzon?",
      answer:
        "Sportzon offers premium membership plans that include exclusive benefits like priority event registration, advanced analytics for event performance, and discounts on partner products. Visit the Premium Membership page to view pricing and features.",
    },
    {
      question: "How does Sportzon ensure the quality of events and partnerships?",
      answer:
        "We have a dedicated team that vets all events and partnerships to ensure they meet our quality standards. Our goal is to provide safe, engaging, and well-organized experiences for our users. If you have concerns about a specific event or partner, please reach out to our support team.",
    },
    {
      question: "What payment methods are supported for event registrations?",
      answer:
        "Sportzon accepts various payment methods, including credit/debit cards, digital wallets, and bank transfers. For specific events, you may also find options for cash payments at the venue. Payment options are displayed during the registration process.",
    },
    {
      question: "How can I stay updated on new events and features?",
      answer:
        "Subscribe to our newsletter and follow us on social media platforms to stay informed about the latest events, new features, and special offers. You can also enable push notifications from the Sportzon app for real-time updates.",
    },
    {
      question: "What should I do if I encounter a problem during registration?",
      answer:
        "If you experience any issues during registration, please check your internet connection and ensure all required fields are filled correctly. If the issue persists, contact our support team at info@sportzon.in, and we’ll assist you promptly.",
    },
    {
      question: "Can I cancel or reschedule my event registration?",
      answer:
        "Cancellation and rescheduling policies vary depending on the event. You can view the specific terms and conditions on the event page. For assistance, reach out to the event organizer or contact Sportzon support.",
    },
    {
      question: "How do I create a Sportzon account?",
      answer:
        "To create an account, click the Sign Up button on our homepage. You can register using your email address or connect via social media accounts like Facebook or Google. Complete your profile to start exploring the platform.",
    },
    {
      question: "What safety measures are in place for in-person events?",
      answer:
        "We prioritize safety and require all event organizers to comply with local health and safety regulations. For in-person events, we encourage participants to follow recommended guidelines, such as social distancing and wearing masks, when applicable.",
    },
  ];
  

  return (
    <div className="bg-white py-5">
      {/* Header Section */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h2 className="fw-bold text-uppercase theme-color">
              Frequently Asked Questions
            </h2>
            <p className="text-muted fs-6">
              Have questions about Sportzon? We’ve got you covered! Explore the
              answers to common questions and learn how Sportzon can enhance
              your sports experience.
            </p>
            <p className="fs-6 text-muted">
              Didn’t find the answer you were looking for? Feel free to reach
              out to our friendly support team at{" "}
              <a
                href="mailto:info@sportzon.in"
                className="text-decoration-none theme-color fw-bold"
              >
                info@sportzon.in
              </a>
              . We’re here to help!
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/img/faq-page.jpg"
              alt="FAQs Illustration"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2
              className="fw-bold mb-4 text-center theme-color"
            >
              FAQ's
            </h2>
            <p
              className="text-center mb-5"
              style={{ fontSize: "1rem", color: "#6c757d" }}
            >
              Got questions? We've got answers. Check out the most commonly
              asked questions below!
            </p>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div
                  className="accordion-item border-0 shadow mb-4 rounded"
                  key={index}
                >
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      } fw-bold d-flex align-items-center`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                      style={{
                        backgroundColor: "#f8f9fa",
                        color: "#333",
                        padding: "1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <i
                        className="fa fa-question-circle me-3 theme-color"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      {faq?.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div
                      className="accordion-body bg-white text-muted p-4 rounded"
                      style={{ lineHeight: "1.8", fontSize: "0.95rem" }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
