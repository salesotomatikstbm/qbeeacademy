import React from "react";
import logo from '../assets/logo_1.png'
const Footer = () => {
  return (
    <div
      id="Footer"
      className="relative overflow-hidden flex flex-col px-6 pt-14 pb-[124px] sm:px-10 sm:pt-12 sm:pb-[160px] min-[1200px]:px-[140px] min-[1200px]:pt-16 min-[1200px]:pb-[174px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #100D25, #100D25, #190B69)",
        color: "white", 
      }}
    >
      <div className="max-w-[1160px] m-auto w-full">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-[50px]">
          <div className="flex flex-col gap-3 max-w-[462px] md:max-w-[264px] lg:max-w-[462px]">
            <div className="flex items-end gap-1">
              <img
                className="h-[52px]"
                src={logo}
                alt="logo"
              />
              <div className="flex flex-col ">
                <p className="text-[20px] font-bold tracking-[0.7px]">
                  QBEE
                </p>
                <p className="text-sm font-bold tracking-[2.38px]">
                  ACADEMY
                </p>
              </div>
            </div>
            <p className="text-base font-normal">
              Helping ambitious learners upskill themselves &amp; shift to top
              product based companies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[30px] md:justify-between">
            <div className="max-w-[197px]">
              <p className="text-2xl font-bold mb-4">Who are we</p>
              <div className="flex flex-col gap-4 text-base">
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="www.bosscoderacademy.html"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="about.html"
                  >
                    About us
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="blog.html"
                  >
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="events.html"
                  >
                    Attend Free Event
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="review.html"
                  >
                    Reviews
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="privacy.html"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="terms.html"
                  >
                    Terms &amp; Condition
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="refund-policy.html"
                  >
                    Pricing and Refund Policy
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="harhathkalam.html"
                  >
                    Har Hath Kalam
                  </a>
                </div>
              </div>
            </div>
            <div className="w-7/12 flex flex-col gap-4 max-w-[282px]">
              <p className="text-2xl font-bold">Contact Us</p>
              <div className="text-base">
                <p>Mobile No: </p>
                <a
                  href="mailto:qbee.academy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                +91 86102 10593
                </a>
              </div>
              <div className="text-base">
                <p>E-mail: </p>
                <a
                  href="mailto:qbee.academy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 qbee.academy@gmail.com
                </a>
              </div>
              <p className="text-base pr-4">
            403/5 Mullai Nagar, 1st street, 45, T.N.H.B, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045
              </p>
            </div>
          </div>
        </div>
        <hr className="h-0.5 my-8 bg-gray-200 border-0 md:mb-5 md:mt-4 lg:mt-[38px] lg:mb-8" />
        <div className="flex flex-col gap-4 text-base md:flex-row md:justify-between">
          <p>
            Copyright 2024 QBee Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap md:flex-nowrap shrink gap-[0.5ch]">
            <a
              className="font-semibold md:text-[15px] flex justify-center items-start gap-[0.5ch]"
              href="https://www.linkedin.com/company/bosscoderacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold md:text-[15px]">LinkedIn</p>
              <p className="font-semibold md:text-[15px]"> |</p>
            </a>
            <a
              className="font-semibold md:text-[15px] flex justify-center items-start gap-[0.5ch]"
              href="blog.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold md:text-[15px]">Blog</p>
              <p className="font-semibold md:text-[15px]"> |</p>
            </a>
            <a
              className="font-semibold md:text-[15px] flex justify-center items-start gap-[0.5ch]"
              href="https://www.youtube.com/channel/UCuEoKDoI48CGLKzBy77-6Hg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold md:text-[15px]">YouTube</p>
              <p className="font-semibold md:text-[15px]"> |</p>
            </a>
            <a
              className="font-semibold md:text-[15px] flex justify-center items-start gap-[0.5ch]"
              href="https://www.instagram.com/bosscoderacademy/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold md:text-[15px]">Instagram</p>
              <p className="font-semibold md:text-[15px]"> |</p>
            </a>
            <a
              className="font-semibold md:text-[15px] flex justify-center items-start gap-[0.5ch]"
              href="https://www.quora.com/What-is-your-review-of-Bosscoder-Academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold md:text-[15px]">Quora</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
