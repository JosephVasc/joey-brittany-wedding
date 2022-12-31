import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.946316018779!2d-70.9548427!3d41.850982300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4ed1d89a67fed%3A0xa729ebc2fbca9a60!2sLoon%20Pond%20Lodge!5e0!3m2!1sen!2sus!4v1672451704959!5m2!1sen!2sus";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/Loon+Pond+Lodge/@41.8509823,-70.9570367,17z/data=!3m1!4b1!4m5!3m4!1s0x89e4ed1d89a67fed:0xa729ebc2fbca9a60!8m2!3d41.8508882!4d-70.9547499";
const MAP_TITLE = "Loon Pond Lodge";
const MAP_ADDRESS =
  "28 Precinct St, Lakeville, MA 02347";

const MAP_HOTEL_TITLE = "Hampton Inn Raynham-Taunton";
const MAP_HOTEL_REDIRECT = "https://www.google.com/maps/place/Hampton+Inn+Raynham-Taunton/@41.8745092,-71.0565719,12z/data=!4m25!1m16!4m15!1m6!1m2!1s0x89e4ed1d89a67fed:0xa729ebc2fbca9a60!2sLoon+Pond+Lodge,+28+Precinct+St,+Lakeville,+MA+02347!2m2!1d-70.9547499!2d41.8508882!1m6!1m2!1s0x89e48d2143fa15c5:0x9eed2324c6bbd177!2sHampton+Inn+Raynham-Taunton,+600+New+State+Hwy,+Raynham,+MA+02767!2m2!1d-71.0449255!2d41.9074952!3e0!3m7!1s0x89e48d2143fa15c5:0x9eed2324c6bbd177!5m2!4m1!1i2!8m2!3d41.9074952!4d-71.0449255";
const MAP_HOTEL_EMBEDED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95067.29586835617!2d-71.05657193714036!3d41.87450917259986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e48d2143fa15c5%3A0x9eed2324c6bbd177!2sHampton%20Inn%20Raynham-Taunton!5e0!3m2!1sen!2sus!4v1672462380049!5m2!1sen!2sus";
const MAP_HOTEL_ADDRESS = "600 New State Hwy, Raynham, MA 02767"
const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Wedding Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Hotels
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_HOTEL_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_HOTEL_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_HOTEL_REDIRECT}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_HOTEL_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
