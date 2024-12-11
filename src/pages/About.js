import React from 'react';

function About() {
  return (
    <main>
      <h1>About Us</h1>
      <div className="card-container">
        <div className="card">
          <h2>Our Story</h2>
          <p>
            We started as a small group of culinary enthusiasts who wanted to bring a better
            meal-planning experience to everyone. From quick weekday dinners to elaborate
            weekend feasts, our goal is to inspire, guide, and help you make the most of
            your kitchen time.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify your cooking experience. With the right tools,
            ingredients, and a little inspiration, anyone can create delicious meals that
            are both nutritious and memorable.
          </p>
        </div>

        <div className="card">
          <h2>Our Team</h2>
          <p>
            Our team is made up of passionate home cooks, professional chefs, nutritionists,
            and tech experts working together to bring you a seamless meal-planning platform.
          </p>
        </div>

        <div className="card">
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:support@mealplanner.com">support@mealplanner.com</a>
            <br />
            Follow us on <a href="https://instagram.com">Instagram</a> and{' '}
            <a href="https://facebook.com">Facebook</a>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
