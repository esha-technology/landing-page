import React from "react";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import WebDevExpertCard from "../WebDevelopment/WebDevExpertCard";
import {
  FaBolt,
  FaClock,
  FaShieldAlt,
  FaChartLine,
  FaDollarSign,
  FaSearch,
} from "react-icons/fa";

const WebHosting = () => {
  const features = [
    {
      title: "Lightning-Fast Speed",
      description:
        "Our servers are optimized for high-speed performance. A fast-loading website not only improves user experience but also boosts your search engine rankings. With Esha Technology, your site visitors won’t have to wait – they’ll get instant access to your content, products, and features.",
      icon: <FaBolt />,
      color: "bg-red-100",
    },
    {
      title: "99.9% Uptime Guarantee",
      description:
        "We know that downtime is bad for business. Our hosting infrastructure is designed to offer unbeatable reliability, so your website is available to your visitors around the clock. With Esha Technology, you can say goodbye to missed opportunities due to server outages.",
      icon: <FaClock />,
      color: "bg-green-100",
    },
    {
      title: "Advanced Security",
      description:
        "Security is our top priority. Our hosting service includes robust firewalls, regular security scans, SSL certificates, and other measures to keep your website and customer data safe. Let us handle the technical complexities of cybersecurity so you can focus on growing your business.",
      icon: <FaShieldAlt />,
      color: "bg-blue-100",
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you're just starting out or have a well-established business, we offer scalable hosting plans that can grow with you. Upgrade easily to a larger plan as your site traffic increases without any hassle. At Esha Technology, you only pay for what you need.",
      icon: <FaChartLine />,
      color: "bg-yellow-100",
    },
    {
      title: "Affordable Pricing with No Hidden Fees",
      description:
        "We believe in transparent, budget-friendly pricing. Esha Technology offers competitive plans to meet every business's needs without hidden costs. You get full value for every penny you spend with us.",
      icon: <FaDollarSign />,
      color: "bg-teal-100",
    },
    {
      title: "SEO-Optimized Hosting",
      description:
        "Our hosting services are designed with SEO in mind. Fast loading times, secure connections, and reliable uptime all help improve your website’s search engine ranking.",
      icon: <FaSearch />,
      color: "bg-indigo-100",
    },
  ];
  return (
    <>
      <div className="breadcrumbs text-sm -mt-3 mb-10 flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#ourServices">Services</Link>
          </li>
          <li>Web Hosting</li>
        </ul>
      </div>
      <div className="w-fit">
        <Heading heading="Web Hosting" color="bg-sky-100" />
      </div>

      <div className=" flex flex-col lg:flex-row gap-5 items-center">
        <div className="lg:w-1/2">
          <p className="text-xl font-semibold font-poppins">
            Your Website’s Success Starts with Our Hosting.
          </p>
          <p className="mt-4 font-poppins">
            In today’s digital world, a strong online presence is essential. At{" "}
            <span>
              <img
                src="/onlyIcon.png"
                alt="logo"
                className="w-3.5 inline-block ml-2 mr-1 "
              />
            </span>
            <strong> Esha Technology</strong>, we understand that your website
            is more than just a webpage – it’s the face of your business, a tool
            for growth, and a platform to engage with your audience. That's why
            we provide web hosting solutions that are tailored to ensure your
            site performs at its best every day.
          </p>
        </div>

        <div className=" flex justify-center ">
          <img
            src="/webHosting.png"
            alt="Professional Web Development"
            className="lg:w-3/4 object-cover w-full "
          />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-medium font-poppins lg:text-2xl text-xl">
          Why Choose Esha Technology?
        </h1>
      </div>

      <div>
        {features.map((feature, index) => (
          <WebDevExpertCard
            key={index}
            heading={feature.title}
            subHeading={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>
    </>
  );
};

export default WebHosting;