import React from 'react';
import aboutImg from '../assets/icons/aboutImg.png';
import memberIcon from '../assets/icons/members.png';
import clubIcon from '../assets/icons/clubbb.png';
import eventIcon from '../assets/icons/clubb.png';
import paymentIcon from '../assets/icons/payment.png';

function About() {
  const stats = [
    { id: 1, icon: memberIcon, count: '2,245,341', label: 'Members' },
    { id: 2, icon: clubIcon, count: '46,328', label: 'Clubs' },
    { id: 3, icon: eventIcon, count: '828,867', label: 'Event Bookings' },
    { id: 4, icon: paymentIcon, count: '1,926,436', label: 'Payments' },
  ];

  const handleLearnMore = () => {
    // Placeholder: Add navigation (e.g., useNavigate) or modal logic here
    console.log('Learn More clicked');
  };

  return (
    <div id="about" >
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mb-11 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="About Pixelgrade illustration" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
              accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
              porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="btn-primary" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-neutralSilver px-4 lg:px-14 py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text column */}
          <div className="md:w-[45%] space-y-2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-neutralDGrey leading-snug">
              Helping a local <br />
              <span className="text-brandPrimary">business reinvent itself</span>
            </h2>
            <p className="text-neutralDGrey">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:w-[45%]">
            {stats.map(({ id, icon, count, label }) => (
              <div key={id} className="flex items-center gap-4">
                <img src={icon} alt={`${label} icon`} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">{count}</h4>
                  <p className="text-sm text-slate-600">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;