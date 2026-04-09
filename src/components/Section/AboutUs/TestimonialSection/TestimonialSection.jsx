"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    quote: "We were one of Rabok's first clients and the experience was refreshingly hands-on. They took time to understand our business before touching a single dashboard. The clarity we got from that first engagement was worth every shilling.",
    name: "Brian Otieno",
    role: "Founder, Savanna Retail Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&q=80"
  },
  {
    quote: "As a small logistics company we never thought BI was for us — we assumed it was for big corporates. Rabok changed that. They built us something simple, affordable, and actually useful within two weeks.",
    name: "Amina Hassan",
    role: "Operations Lead, SwiftMove Logistics",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face&q=80"
  },
  {
    quote: "What stood out was how honest they were about what we needed versus what we didn't. No upselling, no jargon. Just a clear plan and clean execution. Exactly what a growing business needs.",
    name: "David Kariuki",
    role: "CEO, NovaBuild Kenya",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&q=80"
  },
];

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section bg-light1 tekup-section-padding">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>What our early clients are saying</h2>
          <p>We are just getting started — and these are the businesses that took a chance on us first.</p>
        </div>
        <Slider {...settings} className="tekup-testimonial-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="tekup-testimonial-data">
              <div className="tekup-testimonial-rating">
                <ul>
                  {[1,2,3,4,5].map(s => (
                    <li key={s}><i className="ri-star-s-fill"></i></li>
                  ))}
                </ul>
              </div>
              <p>"{t.quote}"</p>
              <div className="tekup-testimonial-author">
                <img
                  src={t.image}
                  alt={t.name}
                  style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
                />
                <h5>{t.name}</h5>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
