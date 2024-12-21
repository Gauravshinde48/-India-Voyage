import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/jk.jpg";
import Trip2 from "../assets/Krl.jpg";
import Trip3 from "../assets/raja.jpg";

function Trip() {
  return (
    <div className="trip">
      Check the render method of Trip.
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in J&K"
          text="A tour to Jammu and Kashmir offers an unforgettable journey through the heart of India's paradise. Nestled in the majestic Himalayas, this region is renowned for its breathtaking landscapes, serene valleys, and pristine lakes like Dal and Wular. Whether it's exploring the vibrant culture of Srinagar, marveling at the snow-capped peaks of Gulmarg, or soaking in the peaceful aura of Pahalgam, Jammu and Kashmir promises an experience filled with natural beauty and tranquility. Perfect for family vacations, adventurous treks, or romantic getaways, this region is a true escape into nature's lap"
        />

        <TripData
          image={Trip2}
          heading="Trip in Kerala"
          text="A tour to Kerala, often called God's Own Country immerses you in lush greenery, tranquil backwaters, and rich cultural heritage. From the serene houseboat rides on the backwaters of Alleppey to the pristine beaches of Kovalam, Kerala offers a diverse range of experiences. Explore the spice-scented hills of Munnar, visit the wildlife-rich Periyar National Park, and experience the vibrant art forms like Kathakali and Theyyam. Whether you're seeking relaxation or adventure, Kerala captivates with its natural beauty, wellness traditions, and warm hospitality, making it an ideal destination for travelers of all kinds"
        />

        <TripData
          image={Trip3}
          heading="Trip in Rajasthan"
          text="A tour to Rajasthan, the Land of Kings, offers a captivating journey through India's royal heritage and vibrant culture. Known for its majestic forts, opulent palaces, and vast deserts, Rajasthan is a blend of history and splendor. Explore the iconic Amber Fort and City Palace in Jaipur, stroll through the blue streets of Jodhpur, or experience the golden dunes of Jaisalmer. With its colorful festivals, rich folk traditions, and exquisite handicrafts, Rajasthan provides a regal experience that transports visitors to an era of grandeur and tradition, making it a must-visit destination for history and culture enthusiasts"
        />
      </div>
    </div>
  );
}

export default Trip;
