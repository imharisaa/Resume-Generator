import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
// import Payment from './Payment'

const PUBLIC_KEY = "pk_test_51NrJmwGorrYZJx2M76v5kTkoa4257iRZV0sbwjAUqA8S575a394uq09axFw9jt6RuWWLi2WS9Ve8BWau3a4aOMxh00ymXU1R3w"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise} >
        {/* <Payment /> */}
    </Elements>
  )
}

export default StripeContainer