import Container from '../../UI/Container';
import adoptionImg from './images/Petadoptionillustration.png';
import foot from './images/Vector.svg';
import cat from './images/image 133.png';
import dog from './images/image 135.svg';
import dog1 from './images/image 138.svg';
import dog2 from './images/image 141.svg';

const RelationWithPets = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20">
        <div className="text-center lg:text-left font-semibold">
          <h2 className="text-2xl md:text-3xl">Peaceful Coexistence</h2>
          <h3 className="text-xl md:text-2xl text-secondary">
            Human & Animals
          </h3>
          <img
            src={adoptionImg}
            alt="adoption illustration"
            className="mx-auto lg:mx-0 mt-5"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Emotional relationship',
                image: cat,
                text: "Pets establish emotional attachments to children, and the relationship turns out positive in terms of affective aspects, reinforcing the child's personality.",
              },
              {
                title: 'Communication',
                image: dog,
                text: "Animals can communicate better with people in such conditions, using non-verbal affective communication that reinforces the child's personality.",
              },
              {
                title: 'Children and pets',
                image: dog1,
                text: 'Pets establish emotional attachments to children, positively affecting their personality and affective growth.',
              },
              {
                title: 'Health',
                image: dog2,
                text: 'Studies suggest owning a pet may lower blood pressure and improve heart health.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm flex flex-col items-center md:items-start"
              >
                <div className="flex items-center gap-x-4">
                  <img src={foot} alt="foot icon" className="w-6 h-6" />
                  <h5 className="text-lg text-secondary">{item.title}</h5>
                </div>
                <p className="mt-3 text-sm md:text-base text-center md:text-left">
                  {item.text}
                </p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-3 w-20 h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RelationWithPets;
