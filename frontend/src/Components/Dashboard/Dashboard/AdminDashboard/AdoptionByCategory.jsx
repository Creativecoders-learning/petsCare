import { Line } from "react-chartjs-2";
import useAdoptionData from "../../../../Hooks/useAdoptionData";

const AdoptionByCategory = () => {

      const { adoptions } = useAdoptionData();

      const dogs = adoptions?.filter(dog => dog?.category === 'Dog')
      const rabbits = adoptions?.filter(dog => dog?.category === 'Rabbit')
      const birds = adoptions?.filter(dog => dog?.category === 'Bird')
      const cats = adoptions?.filter(dog => dog?.category === 'Cat')

      const adoptionData = {
            labels: ['Dogs', 'Rabbit', 'Cats', 'Birds'],
            datasets: [{
                  label: 'Adoption Rate',
                  data: [dogs.length, rabbits.length, birds.length, cats.length],
                  borderColor: ['#f04336'],
                  fill: true,
                  tension: 0.3
            }]
      };

      return (
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 col-span-full">
                  <h3 className="text-lg font-semibold mb-4">Adoption By Category</h3>
                  <Line data={adoptionData} />
            </div>
      );
};

export default AdoptionByCategory;