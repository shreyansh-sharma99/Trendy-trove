const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Discover Our Shopping Experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            suscipit exercitationem aliquam incidunt eos magnam quas quisquam
            quibusdam temporibus.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, labore.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, labore.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Our Values
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
