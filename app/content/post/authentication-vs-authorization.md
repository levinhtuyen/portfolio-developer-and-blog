---
title: 'Authentication vs Authorization'
description: 'In recent times, security in modern applications cannot be overemphasized. It is extremely important to ensure our applications have proper security measures to prevent sensitive data from getting into the wrong hands...'
image: '/images/post-6.png'
date: '10/11/2024'
author: 'cerbos.dev'
---

# What is Authentication (AuthN)?

Authentication in computing is defined as the process or action of verifying the identity of a user or process. It's how your application verifies who you say you are. Authentication within the application effectively answers the question "Who are you?".

The goal of authentication is mainly to ensure that only those who have permission can access the application. By verifying the identity of every user, it helps to keep sensitive data safe, block unwanted access, and preserve system security. It's an essential part of the application because in doing so it builds trust between the user and the system.

There are quite a few ways the application can do this:

- **Username and Password:** The user provides their username and password to gain access to their account. However, this method is increasingly seen as insecure due to risks like password leaks and phishing.
  
- **Multifactor Authentication (MFA):** This combines two or more authentication techniques, typically involving something you have (a token or smartphone), something you know (a password), or something you are (biometric data). Two-factor authentication (2FA) is a common form of MFA, where a code sent via SMS or email must be entered after providing username and password. This adds an extra security layer.

- **Biometric Authentication:** This method verifies the user using biometric data, like fingerprints or facial recognition. Since biometric information is unique, it provides a high level of security, though it requires hardware that can capture these biometrics.

These are just a few examples of the various methods used for authentication.

# What is Authorization (AuthZ)?

Authorization is the act of allowing or refusing access to resources within an application. It often takes place following authentication and establishes the resources and permissions that an authenticated user is granted access to. Authorization essentially answers the question, "What are you allowed to do?"

Authorization is essential for ensuring users have the appropriate level of access within an application. Here are some common approaches:

- **Role-Based Access Control (RBAC):** Users receive permissions based on their roles in an organization. For example, an ordinary user might have limited access, while an admin might have full access to resources.

- **Attribute-Based Access Control (ABAC):** Access is granted based on policies and attributes, such as user properties (department, job title) and environmental properties (access time). ABAC offers a flexible way to handle authorization.

# AuthN vs AuthZ: Key Differences and How They Work Together

### Verification vs. Permission
Authentication confirms a user's identity ("Who are you?") while authorization focuses on their permissions ("What are you allowed to do?").

### Sequential Process
Authentication always precedes authorization, as the system must verify a user's identity before determining their permissions.

### Integrated Security Approach
Authentication and authorization complement each other. Authentication ensures only valid users can access the application, while authorization restricts these users to their permitted resources.

# Real-World Scenario

For example, on Twitter, you log in with a username and password (authentication). After logging in, you can tweet, update your profile, or interact with others' tweets. However, you cannot delete other people's tweets or manage their accounts, as this access is restricted by authorization.

| Aspect               | Authentication                                      | Authorization                                                                                   |
|----------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Definition**       | Verifies a user’s identity.                         | Determines what resources a user can access after authentication.                              |
| **Purpose**          | To confirm identity using credentials.              | To grant or deny permissions based on rules or roles.                                          |
| **How It Works**     | Users present evidence of identity.                 | User permissions are evaluated based on roles or attributes.                                   |
| **Tools Used**       | Passwords, biometrics, OTPs, certificates.          | Access control lists (ACLs), RBAC, ABAC.                                                       |
| **Dependency**       | Independent and happens first.                      | Depends on successful authentication.                                                          |
| **Outcome**          | Provides identity tokens or sessions.               | Grants specific resource access based on permissions.                                          |
| **Security Focus**   | Ensures users are who they claim to be.             | Ensures users only access resources they’re permitted to.                                      |

# Why Choosing the Right Authorization Solution Matters

### Scalability and Flexibility
An authorization system should scale with your application, handling increased traffic and growing permissions without performance loss. Flexibility is equally important, allowing easy permission adjustments as application requirements evolve.

### Security Best Practices
A robust authorization setup prevents unauthorized access to sensitive data, reducing security risks and building user trust.

### Outsourcing Complexity
Developers often try to build in-house authorization solutions, but these can be difficult to maintain. Authorization-as-a-Service solutions like Cerbos help by providing a ready-made, scalable, and flexible authorization system, allowing development teams to focus on core features.

# Cerbos Advantages

Cerbos is a powerful authorization solution with unique features. It offers fine-grained control over permissions, supports both role-based and attribute-based access control, and integrates seamlessly with existing systems. Cerbos is scalable and provides an open-source version on its GitHub repository.

# Conclusion

We've covered a lot of ground in this article, diving deep into the world of authentication and authorization. By now, you should have a solid understanding of how these two concepts differ and why they're both crucial in keeping your application secure.

To recap, authentication is all about verifying who you are. On the other hand, authorization is about what you're allowed to do once you're inside.

So, if you're looking to take your application's security to the next level, I highly recommend checking out Cerbos. They've got a ton of resources and even a demo that you can explore. Trust me, your application (and your users) will thank you for it.
