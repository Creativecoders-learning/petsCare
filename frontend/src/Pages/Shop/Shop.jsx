import Foods from "../../Components/Shop/Foods";
import ShopCategories from "../../Components/Shop/ShopCategories";
import Container from "../../Components/UI/Container";

export default function Shop() {
  return (
    <Container>
      <ShopCategories />
      <Foods />
    </Container>
  );
}
