import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="responsive-container-block leftSide">
            <p class="text-blk heading">Welcome to Gym Chad</p>
            <p class="text-blk subHeading">
              We are dedicated to helping you achieve your fitness and body
              improvement goals. Our team of certified personal trainers,
              nutritionists, and health experts is committed to inspiring and
              empowering individuals from all backgrounds to lead healthier
              lives. We offer personalized training programs, expert nutrition
              guidance, premium dietary supplements, and a supportive community
              to help you on your journey. Our mission is to provide exceptional
              service, reliable resources, and continuous motivation to ensure
              your success. Join us today and let's achieve greatness together!
            </p>
          </div>
          <div class="responsive-container-block rightSide">
            <img
              class="number2img"
              src="https://phunugioi.com/wp-content/uploads/2021/11/Hinh-anh-nen-Gym-cho-may-tinh.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
