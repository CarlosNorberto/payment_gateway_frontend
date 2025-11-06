import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// PAGES
import HomePage from "./pages/home_page.jsx";
import PaymentPage from "./pages/payment_page.jsx";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<HomePage />} />,
        <Route path="/pay/:payment_id" element={<PaymentPage />} />
    ])
);

export default router;