import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import VendorPage from "./pages/VendorPage";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import VendorTwoPage from "./pages/VendorTwoPage";
import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import WishlistPage from "./pages/WishlistPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Registration from "./pages/Login/Register";
// import AboutUs from "./About/AboutUs";
import About from "./About/About";
import AddAddressForm from "./pages/Dashboard/AddAddressForm";
import Dashboard from "./pages/Loginpages/Dashbaord";
import User from "./pages/Loginpages/User";
import DashboardOverview from "./pages/Loginpages/DashboardOverview";
import UserLogin from "./pages/Loginpages/UserLogin";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import CheckOut from "./pages/Checkout/checkout";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>

        {/* <Route exact path="/register" element={<Register/>}/> */}
        <Route exact path='/' element={<HomePageOne />} />
        {/* <Route exact path='/index-two' element={<HomePageTwo />} /> */}
        {/* <Route exact path='/index-three' element={<HomePageThree />} /> */}
        <Route exact path='/shop' element={<ShopPage />} />
        <Route
          exact
          path='/product-details/:id'
          element={<ProductDetailsPageOne />}
        />
        <Route

          path='/product-details-two/:id'
          element={<ProductDetailsPageTwo />}
        />

        {/* <Route exact path="/store" element={<Store/>}/> */}
        <Route exact path='/cart' element={<ProtectedRoute>
          <CartPage />
        </ProtectedRoute>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path='/checkout' element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route exact path='/become-seller' element={<BecomeSellerPage />} />
        <Route exact path='/wishlist' element={<WishlistPage />} />
        <Route exact path='/account' element={<AccountPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/vendor' element={<VendorPage />} />
        <Route exact path='/vendor-details' element={<VendorDetailsPage />} />
        <Route exact path='/vendor-two' element={<VendorTwoPage />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/dashboardoverview" element={<User />} />
        <Route path="/checkoutpay" element={<ProtectedRoute> <CheckOut/></ProtectedRoute> }/>
        <Route
          exact
          path='/vendor-two-details'
          element={<VendorTwoDetailsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
