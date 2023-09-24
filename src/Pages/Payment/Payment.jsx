import { ActionIcon, Box, Title } from "@mantine/core";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const buyMeACoffee = async () => {
    const stripe = await loadStripe(
      "pk_test_51NrJmwGorrYZJx2M76v5kTkoa4257iRZV0sbwjAUqA8S575a394uq09axFw9jt6RuWWLi2WS9Ve8BWau3a4aOMxh00ymXU1R3w"
    );

    const body = {
        id: 1,
        name: "Buy A Cup Of Coffee",
        qnty: 1,
        price: 5
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <Box w={"50rem"} h={"50rem"}>
        <ActionIcon
          w={"25rem"}
          h={50}
          variant="subtle"
          color="teal"
          onClick={buyMeACoffee}
        >
          <Title order={5} color="gray">
            Pay
          </Title>
        </ActionIcon>
      </Box>
    </>
  );
};

export default Payment;
