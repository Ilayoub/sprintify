package org.example.sprintify.paypal;


import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import lombok.extern.slf4j.Slf4j;
import org.example.sprintify.model.PlanType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
public class PaypalController {

    @Autowired
    private PaypalService paypalService;

    @PostMapping("/payment/create")

    public ResponseEntity<Map<String, String>> createPayment(@RequestParam("Plantype") PlanType plantype, @RequestHeader("Authorization") String jwt

    ) {
        try {
            String cancelUrl = "http://localhost:4000/payment/cancel";
            String successUrl = "http://localhost:4000/payment/success";
            if (plantype == PlanType.ANNUALLY) {
                Payment payment = paypalService.createPayment(50.00, "USD", "paypal", "sale", "Subscription", cancelUrl, successUrl, jwt);
                for (Links links : payment.getLinks()) {
                    if (links.getRel().equals("approval_url")) {
                        Map<String, String> response = new HashMap<>();
                        response.put("approval_url", links.getHref());
                        return ResponseEntity.ok(response);
                    }
                }
            } else if (plantype == PlanType.MONTHLY) {
                Payment payment = paypalService.createPayment(5.00, "USD", "paypal", "sale", "Subscription", cancelUrl, successUrl, jwt);
                for (Links links : payment.getLinks()) {
                    if (links.getRel().equals("approval_url")) {
                        Map<String, String> response = new HashMap<>();
                        response.put("approval_url", links.getHref());
                        return ResponseEntity.ok(response);
                    }
                }

            }


        } catch (PayPalRESTException e) {
            log.error("Error occurred:", e);
        }
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Payment creation failed.");
        return ResponseEntity.status(500).body(errorResponse);
    }

    @GetMapping("/payment/success")
    public RedirectView paymentSuccess(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
        try {
            Payment payment = paypalService.executePayment(paymentId, payerId);

            if ("approved".equals(payment.getState())) {
                return new RedirectView("http://localhost:5173/payment/success");
            } else {
                return new RedirectView("http://localhost:5173/payment/error");
            }
        } catch (PayPalRESTException e) {
            log.error("Error occurred:", e);
            return new RedirectView("http://localhost:5173/payment/error");
        }
    }

    @GetMapping("/payment/error")
    public ResponseEntity<Map<String, String>> paymentError(@RequestParam("paymentId") String paymentId, @RequestParam("payerId") String payerId) {

        try {
            Map<String, String> response = new HashMap<>();

            Payment payment = paypalService.executePayment(paymentId, payerId);
            if (payment.getState().equals("approved")) {
                response.put("status", "success");
                response.put("message", "Payment set successfully");
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);

            } else {
                response.put("status", "error");
                response.put("message", "An error occurred during the payment process.");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);

            }

        } catch (PayPalRESTException e) {
            log.error("Error occured", e);
        }
        Map<String, String> response = new HashMap<>();

        response.put("status", "error");
        response.put("message", "An error occurred during the payment process.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);


    }


    @GetMapping("/payment/cancel")
    public RedirectView paymentCanceled() {
        return new RedirectView("http://localhost:5173/payment/cancel");
    }


}
