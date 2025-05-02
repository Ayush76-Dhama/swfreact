import React from "react";
import "./OurCampaigns.css";

const campaignsData = [
    
  {
    title: "Campaigns by SheWings Foundation",
    description: "SheWings Foundation has led impactful campaigns across India, addressing critical issues in women's health, education, empowerment, and social equality. Our campaigns aim to break taboos, inspire action, and create lasting change, supported by partnerships with esteemed organizations and corporate allies. Here are some of the campaigns we've championed:"
  },
  {
    title: "Yes! I Bleed",
    description: "A revolutionary campaign aimed at ending the stigma around menstruation, Yes! I Bleed encourages open dialogue on menstrual health and hygiene. Through educational workshops, community outreach, and advocacy, we strive to normalize discussions around menstruation and emphasize the need for accessible, affordable sanitary products for all."
  },
  {
    title: "Red Dot Campaign",
    description: "The Red Dot Campaign raises awareness about menstrual hygiene management and the importance of sustainable menstrual practices. With a focus on eco-friendly and reusable menstrual products, this campaign promotes sustainable choices while addressing the environmental impact of menstrual waste. It also works to spread awareness in communities about menstrual hygiene practices, helping women make informed, responsible decisions."
  },
  {
    title: "Donate Old Bra & Panty",
    description: "This unique initiative invites individuals to donate gently used bras and panties for distribution to women in need. Often overlooked, access to proper undergarments is essential for women's health and dignity. The Donate Old Bra & Panty campaign promotes a culture of sharing and compassion, bringing comfort to underprivileged women and girls who lack access to these basic necessities."
  },
  {
    title: "Feed the Future",
    description: "Our Feed the Future campaign focuses on nutrition awareness and combating malnutrition in under-resourced communities. Targeting working mothers and families, this campaign sheds light on the importance of balanced diets and adequate nutrition for children's development and mothers' well-being. By partnering with health experts and providing educational resources, Feed the Future aims to build a healthier, more resilient future generation."
  },
  {
    title: "International Women's Day Celebration",
    description: "Every year, SheWings celebrates International Women's Day by honoring the resilience, achievements, and leadership of women from all walks of life. Through workshops, speeches, and cultural activities, this event empowers women to voice their stories, advocate for equality, and inspire others. It's a day dedicated to celebrating the strength and spirit of women, while reinforcing our commitment to a gender-equal future."
  },
  {
    title: "Women's Leadership Summit",
    description: "The Women's Leadership Summit is a platform for influential women leaders, activists, and entrepreneurs to share insights and inspire others. The summit fosters a culture of collaboration and learning, helping women develop leadership skills and expand their professional networks. By championing women in leadership, SheWings seeks to bridge the gender gap in industries across the board."
  },
  {
    title: "Women Health Awareness Program with BPCL",
    description: "In collaboration with Bharat Petroleum Corporation Limited (BPCL), SheWings has conducted health awareness programs focused on women's health, menstrual hygiene, and preventive care. These programs educate women on the importance of self-care, regular check-ups, and maintaining hygiene, contributing to improved health outcomes in communities across India."
  }
];

const OurCampaigns = () => {
  return (
    <>
      <br />
      <br />
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h2 className="gradient-text">About SheWings Foundation</h2>
          <h4 style={{ color: '#FF0000', marginTop: '1rem', fontWeight: '500' }}>Empowering Change Through Action</h4>
          <a href="/about" className="about-button">Learn More About Us</a>
        </div>
        <div className="row justify-content-center g-4">
          {campaignsData.map((campaign, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex card-effect">
              <div
                className="p-4 text-center w-100"
                style={{
                  color: "black",
                  border: "1px solid red",
                  backgroundColor: "whitesmoke",
                  borderRadius: "10px",
                }}
              >
                <h5
                  className="d-block mb-3 text-sm-start"
                  style={{
                    color: "#ec1f27",
                    borderBottom: "2px solid red",
                    textDecoration: "none",
                    fontWeight: "600"
                  }}
                >
                  {campaign.title}
                </h5>
                <p className="text-sm-start">{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default OurCampaigns;
