package org.example.sprintify.service;

import org.example.sprintify.model.PlanType;
import org.example.sprintify.model.Subscription;
import org.example.sprintify.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);

    Subscription getUserSubscription(Long userId);

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);

}
