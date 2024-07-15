import React from "react";
const TermsCondModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="termsAndConditionsModal"
        tabIndex="-1"
        aria-labelledby="termsAndConditionsTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body text-black">
              {" "}
                <h3 className="theme-color">Terms & Conditions</h3>
                <p>
                  At Sportzon, we are committed to providing our customers with
                  a safe and enjoyable experience. By using our facilities and
                  services, you agree to the following terms and conditions:
                </p>
                <ul>
                  <li className="pt-4">
                    <h6 className="text-orange">Acceptance of Terms:</h6>
                    <span>
                      By accessing or using Sportzon, you agree to be bound by
                      these Terms and Conditions ("Terms"). If you disagree with
                      any part of the Terms, you may not access or use Sportzon.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Eligibility:</h6>
                    <span>
                      Sportzon is only available to users who are at least 14
                      years old and have the legal capacity to enter into
                      binding contracts.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Account Creation:</h6>
                    <span>
                      To access certain features of Sportzon, you may need to
                      create an account. You are responsible for maintaining the
                      confidentiality of your account information, including
                      your username and password. You are also responsible for
                      all activities that occur under your account.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">User Content:</h6>
                    <span>
                      You may be able to submit content to Sportzon, such as
                      comments, reviews, or photos. You retain all ownership
                      rights to your User Content, but you grant Sportzon a
                      non-exclusive, worldwide, royalty-free license to use,
                      modify, publish, and distribute your User Content in
                      connection with Sportzon. You are solely responsible for
                      your User Content and represent that you have the
                      necessary rights to submit such content.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Prohibited Conduct:</h6>
                    <span>
                      You agree not to use Sportzon for any purpose that is
                      unlawful, harmful, or prohibited by these Terms. This
                      includes, but is not limited to: <br />
                      Uploading or transmitting content that is infringing,
                      obscene, hateful, or threatening.
                      <br /> Harassing, bullying, or intimidating other users.
                      <br />
                      Impersonating any person or entity. Interfering with or
                      disrupting the Sportzon platform.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Disclaimer:</h6>
                    <span>
                      Sportzon is provided on an "as is" and "as available"
                      basis. We make no warranties, express or implied,
                      regarding the operation or performance of Sportzon. We do
                      not guarantee that Sportzon will be available at all times
                      or that it will be free of errors or interruptions.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Limitation of Liability:</h6>
                    <span>
                      To the extent permitted by law, we shall not be liable for
                      any damages arising out of or related to your use of
                      Sportzon, including but not limited to, direct, indirect,
                      incidental, consequential, or punitive damages.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Termination:</h6>
                    <span>
                      We may terminate your access to Sportzon at any time, for
                      any reason, with or without notice.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Governing Law:</h6>
                    <span>
                      These Terms shall be governed by and construed in
                      accordance with the laws of Delhi Jurisdiction, without
                      regard to its conflict of law provisions.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Entire Agreement:</h6>
                    <span>
                      These Terms constitute the entire agreement between you
                      and Sportzon regarding your use of the platform.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Updates to Terms:</h6>
                    <span>
                      We may update these Terms at any time. We will notify you
                      of any changes by posting the revised Terms on Sportzon.
                      Your continued use of Sportzon following the posting of
                      revised Terms means that you accept and agree to the
                      changes.
                    </span>
                  </li>
                  <li className="pt-4">
                    <h6 className="text-orange">Contact Us:</h6>
                    <span>
                      If you have any questions about these Terms, please
                      contact us at{" "}
                      <a href={`mailto:info@sportzon.in`}>info@sportzon.in</a> .
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary ms-auto btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default TermsCondModal;
