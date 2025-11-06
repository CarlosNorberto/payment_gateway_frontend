import { useParams, useSearchParams } from "react-router-dom";

export default function PaymentPage() {
    const { payment_id } = useParams();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    return (
        <div>
            <h1>Payment Page: {payment_id}</h1>
            {token && <p>Token: {token}</p>}
        </div>
    )
}
