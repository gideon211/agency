import React from 'react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

function Blog() {
  const blogs = [
    { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1 },
    { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blog2 },
    { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      {/* Header Section */}
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">Caring is the new marketing</h2>
        <p className="text-sm text-neutralGrey mb-8 mx-auto md:w-3/4">
          The Nextcent blog is the best place to read about the latest membership insights, trends and
          more. See who's joining the community, read about how our community are increasing their
          membership income and lots more.
        </p>
      </div>

        {/* Blog Cards Section */}
<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16">
  {blogs.map((blog) => (
    <div key={blog.id} className="relative mb-20">
      <img
        src={blog.image}
        alt=""
        className="hover:scale-95 transition-transform duration-300 rounded-xl w-3/4"
      />
      <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-1/2 transform -translate-x-1/2 -bottom-12">
        <h3 className="mb-3 text-neutralGrey font-semibold text-sm">{blog.title}</h3>
        <div className="flex items-center justify-center gap-2">
          <a
            href="#"
            className="text-brandPrimary text-sm font-medium flex items-center gap-1 "
          >
            Read more <span>→</span>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>



    </div>
  );
}

export default Blog;
