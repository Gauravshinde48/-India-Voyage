import Mountain1 from "../assets/mharstra1.jpg";
import Mountain2 from "../assets/maharastra2.jpg";
import Mountain3 from "../assets/mharatsra3.jpg";
import Mountain4 from "../assets/Hp0.jpg";
import Mountain5 from "../assets/Hp3.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Travelling Gives Wings to Good Feelings</p>

      <DestinationData
        className="first-des"
        heading="Discover Maharashtra: Where Heritage Meets Nature"
        text=" Unveil the charm of Maharashtra, a land where ancient traditions
      blend seamlessly with modern marvels. From the bustling streets of
      Mumbai to the serene landscapes of the Western Ghats, Maharashtra
      offers an array of experiences for every traveler. Explore
      historical landmarks like the majestic Ajanta and Ellora Caves, take
      a spiritual journey to Shirdi, or unwind on the pristine beaches of
      Konkan. Whether you're seeking adventure in Lonavala or a cultural
      dive in Pune, Maharashtra promises unforgettable memories at every
      turn."
        img1={Mountain1}
        img2={Mountain2}
        img3={Mountain3}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Himachal Bliss: Escape to the Land of Serenity and Adventure"
        text="Discover the enchanting beauty of Himachal Pradesh, a serene escape nestled in the majestic Himalayas. This northern gem offers a perfect blend of natural beauty, spiritual retreats, and thrilling adventures. From the snow-clad peaks of Manali and the colonial charm of Shimla to the spiritual haven of Dharamshala and the lush valleys of Kullu, Himachal Pradesh has something for every traveler. Explore picturesque landscapes, indulge in adventure sports like paragliding and skiing, and immerse yourself in the peaceful aura of monasteries and temples. Whether you're seeking a relaxing getaway or an adrenaline-filled journey, our carefully curated Himachal tour packages provide the ideal experience for families, friends, and couples. With us, you’ll enjoy seamless booking, expert-guided tours, and unforgettable memories amidst the tranquil hills. Embark on a journey where every corner of Himachal reveals a new adventure and a deeper connection with nature."
        img1={Mountain4}
        img2={Mountain5}
      />
    </div>
  );
};

export default Destination;
