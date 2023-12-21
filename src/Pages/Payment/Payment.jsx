import { ActionIcon, Avatar, Box, Flex, Image, Title } from "@mantine/core";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";

const Payment = () => {
  const buyMeACoffee = async () => {
    const stripe = await loadStripe(
      "pk_test_51NrJmwGorrYZJx2M76v5kTkoa4257iRZV0sbwjAUqA8S575a394uq09axFw9jt6RuWWLi2WS9Ve8BWau3a4aOMxh00ymXU1R3w"
    );

    const body = {
      id: 1,
      name: "Buy A Cup Of Coffee",
      qnty: 1,
      price: 5,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://resume-server.permamotive.com/api/create-checkout-session",
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
      <Box className="payment-page" w={"100vw"} h={"100vh"}>
        <Flex justify={"center"} align={"center"} w={"100%"} h={"100%"}>
          <Box className="card-container" w={"24rem"} h={"40rem"} bg={"cyan"}>
            <Flex direction={"column"} align={"center"} w={"100%"} h={"100%"}>
              <Box className="avatar-image"></Box>
              <Title
                order={3}
                fs={"italic"}
                fw={"bolder"}
                style={{
                  position: "relative",
                  top: "7rem",
                  color: "whitesmoke",
                }}
              >
                Buy Me A Cup Of Coffee
              </Title>
              <ActionIcon
                style={{
                  position: "relative",
                  top: "8rem",
                }}
                w={"85%"}
                h={50}
                variant="filled"
                onClick={buyMeACoffee}
                bg={'#fadd03'}
                disabled
                
              >
                <Title order={5} color="black">
                  Payment Method 1
                </Title>
              </ActionIcon>
              <ActionIcon
                style={{
                  position: "relative",
                  top: "9rem",
                  backgroundColor: "#fadd03",
                }}
                component="a" 
                href="https://www.buymeacoffee.com/permresume" 
                w={"85%"}
                h={50}
                variant="filled"
                
              >
                <Title order={5} color="black">
                  Payment Method 2
                </Title>
              </ActionIcon>
                <Box className="qrcode"></Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Payment;
