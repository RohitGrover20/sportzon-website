"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstapaperShareButton,
  InstagramIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

function Share() {
  let page = "";
  if (typeof window !== "undefined") {
    const link = window.location.href;
    page = link;
  }

  return (
    <div className="d-flex align-items-center">
      <FacebookShareButton url={page}>
        <FacebookIcon className="me-1" size={32} round />
      </FacebookShareButton>
      <InstapaperShareButton url={page}>
        <InstagramIcon className="me-1" size={32} round />
      </InstapaperShareButton>
      <WhatsappShareButton url={page}>
        <WhatsappIcon className="me-1" size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={page}>
        <EmailIcon className="me-1" size={32} round />
      </EmailShareButton>
    </div>
  );
}

export default Share;
