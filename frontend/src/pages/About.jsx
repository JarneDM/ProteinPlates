/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import "../../public/css/About.css";

function About() {
  return (
    <div className="container font">
      <div className="about">
        <header className="title">
          <h1>Welcome to Protein Plates</h1>
          <p>
            Your ultimate destination for high-protein recipes and meals designed to fuel your body and satisfy your taste buds. Whether
            you're an athlete looking to build muscle, someone aiming to lose weight, or simply wanting to maintain a healthy lifestyle, our
            curated selection of recipes offers something for everyone.
          </p>
        </header>
        <section className="section-one">
          <h2>Why Choose Protein Plates?</h2>
          <p>
            At Protein Plates, we believe that eating healthy doesn't have to be boring. Our recipes are crafted to be both nutritious and
            delicious, ensuring you get the protein you need without compromising on flavor. From hearty breakfasts and energizing lunches
            to satisfying dinners and snacks, our meals are perfect for any time of the day.
          </p>
        </section>
        <section className="section-two">
          <h2>Join Us!</h2>
          <p>
            Join us on a journey to discover the best high-protein foods, cooking tips, and meal plans. Whether you're new to high-protein
            eating or a seasoned pro, Protein Plates is here to support you with inspiring ideas and easy-to-follow recipes. Eat well, feel
            great, and enjoy every bite with Protein Plates!
          </p>
        </section>
        <footer>
          <p>&copy; 2024 Protein Plates. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
