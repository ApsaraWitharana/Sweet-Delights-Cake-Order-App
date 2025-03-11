
import { Cake, Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">About Sweet Delights</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Creating memorable moments through delicious, handcrafted cakes since 2010.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80"
            alt="Our bakery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600">
            Sweet Delights began with a passion for creating beautiful, delicious cakes that bring joy to special occasions. What started as a small family bakery has grown into a beloved destination for custom cakes and sweet treats.
          </p>
          <p className="text-gray-600">
            Our team of skilled pastry chefs combines traditional baking techniques with innovative designs to create cakes that are both visually stunning and incredibly delicious.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Cake className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">1000+</h3>
          <p className="text-gray-600">Cakes Created</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">500+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Award className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">15+</h3>
          <p className="text-gray-600">Awards Won</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Users className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">20+</h3>
          <p className="text-gray-600">Team Members</p>
        </div>
      </div>
    </div>
  );
};

export default About;