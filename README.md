# Gestion factures - Architecture microservice - Controle
\
L'objectif est de créer une application web permettant de gérer les factures des clients en se basant sur une architecture microservices et la sécuriser. 
Elle est composée de trois microservices:
1. Customer-service: chargé de gérer les clients.
2. Product-service: gère les produits.
3. Billing-service: consacré pour la gestion des factures.
\
\
Nous nous sommes servis de la **Spring cloud Gateway** pour configurer le routage de manière dynamique et de **Keycloack** pour la partie sécurité de l'application.
\
![archi microservices](https://user-images.githubusercontent.com/72311680/209376521-2359812f-cdc2-410d-a689-d83651459f1e.PNG)

Ci-dessous, les étapes de réalisation:

## Création des microservices
1. **Customer-service**
- L'entité Customer:
\
\
![customer](https://user-images.githubusercontent.com/72311680/209382435-5a2d427d-9df6-46fe-91f6-42321497ba55.PNG)

- L'interface CustomerRepository:
\
\
![customer repository](https://user-images.githubusercontent.com/72311680/209383083-5aa43b76-cbf5-48a6-bd8b-6137047c84be.PNG)

- Test du microservice:
\
\
![test customer ms](https://user-images.githubusercontent.com/72311680/209385092-bb4bea43-f7b2-4fc7-9663-dbcb93dc7aa1.PNG)

2. **Product-service**
- L'entité Product:
\
\
![produit](https://user-images.githubusercontent.com/72311680/209386114-e7891001-5a3f-4f73-9392-683bc326a7ec.PNG)

- L'interface ProductRepository:
\
\
![produit repository](https://user-images.githubusercontent.com/72311680/209387410-35614dde-6696-4f4e-a2e1-5d1915a95457.PNG)

- Test du microservice:
\
\
![test produit ms](https://user-images.githubusercontent.com/72311680/209387692-f7c63145-edf9-4974-b636-a8ba48c3ed36.PNG)


#### Les API Restful des deux microservices customer-service et product-service sont déployées en utilisant **Spring Data Rest**! 

3. **Billing-service**
- L'entité Bill:
\
![bill](https://user-images.githubusercontent.com/72311680/209388299-ea659ec8-f6fc-4d56-8d36-a8da53f0e004.PNG)

- L'interface BillRepository:
\
![bill repository](https://user-images.githubusercontent.com/72311680/209389281-08b6870b-6d3a-430c-91b1-1dc237628d21.PNG)

- BillController:
\
![bill controller 1](https://user-images.githubusercontent.com/72311680/209393378-d441ec4f-d011-46cf-a374-762a4a1b3b53.PNG)
![bill controller 2](https://user-images.githubusercontent.com/72311680/209393387-0fd5ac94-0242-4374-bd55-8ef4f73c227a.PNG)

- BillProjection:
\
![Bill projection](https://user-images.githubusercontent.com/72311680/209393627-41e01f37-6077-45ae-9cd4-358989154287.PNG)

- Le Modèle Customer:
\
![customer modele](https://user-images.githubusercontent.com/72311680/209393880-1bbf6580-e31f-418c-a160-0195f70e12f9.PNG)

- CustomerRestClient:
\
![open feign customer](https://user-images.githubusercontent.com/72311680/209394018-40012b9d-3b38-4783-89a5-f4d1b2817da7.PNG)

- Le Modèle Product:
\
![product modele](https://user-images.githubusercontent.com/72311680/209395703-8846af90-86c6-4264-8e09-aee8940a20d1.PNG)

- L'entité ProductItem:
\
![product Item](https://user-images.githubusercontent.com/72311680/209394934-9674f9f9-8a6f-4033-81d6-8d4a2628a9e5.PNG)

- ProductItemRepository:
\
![product item repository](https://user-images.githubusercontent.com/72311680/209395465-645ec404-6697-4872-8631-5c820c0504fe.PNG)

- ProductItemRestClient:
\
![open feign product item](https://user-images.githubusercontent.com/72311680/209395067-3592680c-cffd-4998-9237-74094e52b7ec.PNG)

- Test du microservice:
\
![test billing 1](https://user-images.githubusercontent.com/72311680/209389734-aecd0164-5621-40ac-b4a9-72da05abcdde.PNG)
![test billing 2](https://user-images.githubusercontent.com/72311680/209389757-d3d410d4-6359-404b-a544-80c7919bd628.PNG)

## Création du Gateway Service
![gateway](https://user-images.githubusercontent.com/72311680/209391745-da50c721-ddcc-49e0-b05a-905111bc14ee.PNG)
\
- Configuration du routage de manière statique:
\
![config statique](https://user-images.githubusercontent.com/72311680/209396856-65b6f139-51e0-449b-8a1c-324c04099630.PNG)

- Configuration du routage de manière dynamique:
\
![config dynamique gateway](https://user-images.githubusercontent.com/72311680/209391994-4a174aff-5961-4981-aece-81bb00b87773.PNG)

## Création de l'annuaire Eureka Discovery Service
![eureka](https://user-images.githubusercontent.com/72311680/209392359-771122ad-2902-4114-9ace-ca0f1d37acda.PNG)


- Configuration dynamique de la gestion des routes vers les micro services enregistrés dans l’annuaire Eureka Server:
![config eureka customer](https://user-images.githubusercontent.com/72311680/209392685-c24f59de-2404-4224-843d-cd38a847a582.PNG)
![config eureka inventory](https://user-images.githubusercontent.com/72311680/209392696-da5836be-f364-4cf8-bce0-3c3f6cb25f7a.PNG)
![config eureka billing](https://user-images.githubusercontent.com/72311680/209392712-444577e6-86e2-413a-9474-0f508fa99731.PNG)
![config eureka gateway](https://user-images.githubusercontent.com/72311680/209392720-e690a765-87cb-4288-a4e0-aa6da29ec985.PNG)

## Création du Client Angular
- Affichage de la liste des clients:
\
![liste clients](https://user-images.githubusercontent.com/72311680/209397093-1790ec89-0f3f-44b0-8b13-7261bffbed97.PNG)
\
- Affichage de la liste des produits:
\
![liste produits](https://user-images.githubusercontent.com/72311680/209397165-3d107460-3a4c-4564-a73e-f60a77a04f47.PNG)

- Affichage de la liste des factures:
\
![liste bills](https://user-images.githubusercontent.com/72311680/209397526-30b84a63-3bd7-4617-8444-77efbeb54835.PNG)

- Affichage du détail de chaque facture:
\
![detail bill](https://user-images.githubusercontent.com/72311680/209398076-ad188d15-5e2d-47ef-b69b-ba0350636014.PNG)

## Sécurisation de l'application avec Keycloack
- Création du Realm:
\
![realm](https://user-images.githubusercontent.com/72311680/209398449-1fd51a7c-04cb-4732-865e-7116ad1d861f.PNG)

- Création du client à sécuriser:
\
![client keycloack](https://user-images.githubusercontent.com/72311680/209398551-8931be7f-691d-4d1e-9f21-8535d850d23b.PNG)

- Création des utilisateurs:
\
![users](https://user-images.githubusercontent.com/72311680/209398712-e03498ee-5a93-4a27-8ca2-a8fb58342361.PNG)

- Création des rôles:
\
![roles](https://user-images.githubusercontent.com/72311680/209398824-507a1469-8005-4476-9f89-cde5bbe8604e.PNG)

- Affectation des rôles aux utilisateurs:
\
![admin user](https://user-images.githubusercontent.com/72311680/209398937-accf8890-7874-4d02-b567-f70803b8115a.PNG)
![user](https://user-images.githubusercontent.com/72311680/209398944-3f834751-1bed-4a8b-a990-152f4a1bdd90.PNG)

## Tests des modes d'authentification
1. Authentification avec mot de passe:
\
![login with password](https://user-images.githubusercontent.com/72311680/209400133-f6a3cadb-1f88-453f-8807-e2f76e0255fe.PNG)
  - access Token:
\
![ACCESS TOKEN](https://user-images.githubusercontent.com/72311680/209400334-1fc809a6-1d46-4106-8560-61723082874a.PNG)
  - refresh Token:
\
![REFRESH TOKEN](https://user-images.githubusercontent.com/72311680/209400349-c1a1699a-eeeb-4452-8466-d04771b457b4.PNG)

2. Authentification avec le Refresh Token:
\
![login with refresh token](https://user-images.githubusercontent.com/72311680/209400882-2c9571a3-4408-4c55-b654-1bc3cd43edec.PNG)
  - access Token:
\
![access token 2](https://user-images.githubusercontent.com/72311680/209401015-8f8e3aaa-ad05-4c09-8bec-2fac204fe4d2.PNG)
  - refresh Token:
\
![refresh token 2](https://user-images.githubusercontent.com/72311680/209401030-3c1c9567-921c-4b7f-a09f-001c57135daf.PNG)

3. Authentification avec le ClientID:
\
![client id auth](https://user-images.githubusercontent.com/72311680/209401290-f96e701b-2753-4b15-9f26-ef5564c9cd77.PNG)

