import React from 'react';
import dream from '../../assets/Dream.png'
const InternshipsSection = () => {
  return (
    <div>
      {/* Section 1 */}
      <section aria-labelledby="internship-description" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2" data-testid="media">
            <img 
              alt="Amazon Interns" 
              loading="lazy" 
              width="3360" 
              height="2240" 
              decoding="async" 
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ objectPosition: '38.4% 32.38%' }}
              sizes="(max-width: 828px) 100vw, (max-width: 640px) 100vw, 50vw"
                        src={dream}
            />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8" data-testid="text">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4" id="internship-description">
                Our internships are for rising seniors and recent graduates with an undergraduate, master&rsquo;s, or doctorate degree.
              </h2>
              <a 
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
                href="search?offset=0&amp;result_limit=10&amp;sort=relevant&amp;category_type=studentprograms&amp;distanceType=Mi&amp;radius=24km&amp;latitude=&amp;longitude=&amp;loc_group_id=&amp;loc_query=&amp;base_query=&amp;city=&amp;country=&amp;region=&amp;county=&amp;query_options=&amp;.html"
                title="See open Student Programs roles"
              >
                See open Student Programs roles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section aria-labelledby="specialized-opportunities" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4" id="specialized-opportunities">Specialized intern opportunities</h2>
            <p className="text-gray-700">
              AWS, Operations, and Amazon Pathways offer specialized internship programs for students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <a href="internships.html" className="block">
                <h3 className="text-xl font-semibold mb-2">AWS internships</h3>
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <a href="eu-students-internship.html" className="block">
                <h3 className="text-xl font-semibold mb-2">Operations internships for students in Europe</h3>
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <a href="na-students-internship.html" className="block">
                <h3 className="text-xl font-semibold mb-2">Operations internships for students in North America</h3>
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <a href="pathways.html" className="block">
                <h3 className="text-xl font-semibold mb-2">Amazon Pathways</h3>
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipsSection;
