import logo from './logo.svg';
import './App.css';
import Product from './product/Product';

function App() {
  return (
    <div>


      <section>
        <div className="spacer">
          <h4 className='new-font'>
            MENU
          </h4>
          <h1 className='third-font'>
            MARIKITI
          </h1>
          <h4 className='new-font'>
            ACTIONS
          </h4>
        </div>


      </section>
      <div className='grid'>
        <Product details={{
          img: "https://safirii.com/cdn/shop/files/4464a867-3bb6-4987-b7b6-cf48ba9fc5b4.jpg?v=1717406158&width=360",
          name: "Safirii Card Caddy",
          attribute: "Safirii",
          price: "Ksh 4320.00",
          tags: [
            "handmade", "by-women"
          ]
        }} />
        <Product details={{
          img: "https://www.studiofit.shop/wp-content/uploads/2025/01/IMG_8168-300x300.jpg",
          name: "Lulu Leather clutch",
          attribute: "StudioFit",
          price: "Ksh 16,800.00",
          tags: [
            "original leather", "by-women"
          ]
        }} />

        <Product details={{
          img: "https://media.mydawa.com/Images/Products/49254d3b-9589-42e3-8d60-eb96f7b24ac8.JPG",
          name: "Mizizi Rose Water",
          attribute: "MyDawa",
          price: "Ksh 480.00",
          tags: [
            "Skincare"
          ]
        }} />


        <Product details={{
          img: "https://media.mydawa.com/Images/Products/932753a9-eb9f-49c2-ac66-847121d8b991.JPG",
          name: "Uncover Skincare Kit",
          attribute: "StudioFit",
          price: "Ksh 6,300.00",
          tags: [
            "Skincare", "Science-based"
          ]
        }} />

        


      </div>

    </div>




  );
}

export default App;
