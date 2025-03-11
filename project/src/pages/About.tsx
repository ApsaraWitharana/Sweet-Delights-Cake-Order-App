
import { Cake, Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
      <div className="space-y-12">
        <div className="text-center space-y-4 ml-20 mr-20">
          <h1 className="text-4xl font-bold text-gray-800">About Sweet Delights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating memorable moments through delicious, handcrafted cakes since 2010.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8  ml-50 mr-50">
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img
                src="https://tse1.mm.bing.net/th?id=OIP.PS9ewvlZmFUbKxPAE9kxqQHaE7&pid=Api&P=0&h=220"
                alt="Our bakery"
                className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800">Our History</h2>
            <div className="flex items-center space-x-6">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Over the years, Sweet Delights has gained recognition for its exceptional quality and customer
                  service.
                  From our humble beginnings, we’ve expanded to multiple locations and a loyal customer base who trust
                  us for their
                  most important celebrations.
                </p>
                <p className="text-gray-600">
                  Our bakery has become a staple in the community, and our cakes are featured at weddings, birthdays,
                  corporate events,
                  and more.
                </p>
              </div>
            </div>
          </div>
          </div>


            <div className="grid md:grid-cols-2 gap-8  ml-50 mr-50">
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold">Our Story</h2>
                <p className="text-gray-600">
                  Sweet Delights began with a passion for creating beautiful, delicious cakes that bring joy to special
                  occasions. What started as a small family bakery has grown into a beloved destination for custom cakes
                  and
                  sweet treats.
                </p>
                <p className="text-gray-600">
                  Our team of skilled pastry chefs combines traditional baking techniques with innovative designs to
                  create
                  cakes that are both visually stunning and incredibly delicious.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <img
                    src="https://tse4.mm.bing.net/th?id=OIP.vVBP1_xUh-HT9K_L8WOUoQHaDt&pid=Api&P=0&h=220"
                    alt="Our bakery"
                    className="w-full h-full object-cover"
                />
              </div>
            </div>


            <div className="grid md:grid-cols-2 gap-8  ml-50 mr-50">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <img
                    src="https://tse2.mm.bing.net/th?id=OIP.iXgzpYRCurgL8J7VhGEoGAHaEY&pid=Api&P=0&h=220"
                    alt="Our bakery"
                    className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold">Our Experience</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    With over a decade of experience in the industry, we’ve perfected our craft and continue to push the
                    boundaries
                    of cake design. Our expertise ensures that every cake we create meets the highest standards of
                    taste, design, and
                    customer satisfaction.
                  </p>
                  <p className="text-gray-600">
                    We are always evolving, experimenting with new flavors and design trends to keep our offerings fresh
                    and exciting.
                  </p>
                </div>
              </div>
            </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Cake className="h-12 w-12 text-pink-500"/>
            </div>
            <h3 className="text-xl font-semibold">1000+</h3>
            <p className="text-gray-600">Cakes Created</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-pink-500"/>
            </div>
            <h3 className="text-xl font-semibold">500+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Award className="h-12 w-12 text-pink-500"/>
                </div>
                <h3 className="text-xl font-semibold">15+</h3>
                <p className="text-gray-600">Awards Won</p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-pink-500"/>
                </div>
                <h3 className="text-xl font-semibold">20+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
          );
          };

          export default About;