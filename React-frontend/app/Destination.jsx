import React from "react";
const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-16 px-4 text-center">
      <h1>Discover Innovation in Travel</h1>
      <p className="py-4">
        Explore Unique Destinations and Authentic Experiences
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src="https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="A beautiful scenic view of mountains and water"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/10463590/pexels-photo-10463590.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="A sunny day with palm trees"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="An ancient monument with stairs"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/10611834/pexels-photo-10611834.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="A beautiful sunset over the ocean"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/5007465/pexels-photo-5007465.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="A scenic waterfall in the forest"
        />
      </div>
    </div>
  );
};

export default Destination;
