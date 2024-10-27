import Accessories from "../../Components/Shop/Accessories";
import Foods from "../../Components/Shop/Foods";
import Medicine from "../../Components/Shop/Medicine";
import ShopCategories from "../../Components/Shop/ShopCategories";
import Container from "../../Components/UI/Container";

export default function Shop() {
  return (
    <div className="mt-20">
      <Container>
        <ShopCategories />
        <Foods />
        <Accessories />
        <Medicine />
      </Container>
    </div>
  );
}
