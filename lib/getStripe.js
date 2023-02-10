import { loadStripe } from "@stripe/stripe-js";

let stripePeomise;

const getStripe = () => {
    if(!stripePeomise) {
        stripePeomise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }

    return stripePeomise;
}

export default getStripe;