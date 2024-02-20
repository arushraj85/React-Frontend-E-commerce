import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default AdminHome;