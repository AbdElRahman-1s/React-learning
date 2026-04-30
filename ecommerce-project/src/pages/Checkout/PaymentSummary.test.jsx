import { beforeAll, describe, expect, it } from "vitest";
import { PaymentSummary } from "./PaymentSummary";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router";
import axios from "axios";

vi.mock('axios');



describe('PaymentSummary integration test ', () => {
  let loadCart;
  let paymentSummary;
  beforeAll(() => {
    loadCart = vi.fn();//Mock

    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251
    };


  });

  it('', async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    const produceCostCents = await screen.findByTestId('payment-summary-product-cost');
    expect(produceCostCents).toHaveTextContent('$42.75');

    expect(
      screen.getByTestId('payment-summary-shipping-cost')
    ).toHaveTextContent('$4.99');



    expect(
      screen.getByTestId('payment-summary-total-before-tax')
    ).toHaveTextContent('$47.74');



    expect(
      screen.getByTestId('payment-summary-tax')
    ).toHaveTextContent('$4.77');


    expect(
      screen.getByTestId('payment-summary-total')
    ).toHaveTextContent('$52.51');

  });


});