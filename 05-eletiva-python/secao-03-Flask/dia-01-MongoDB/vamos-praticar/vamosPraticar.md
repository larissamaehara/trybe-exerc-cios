# Exercicios 🏘

1. Retorne a quantidade de documentos inseridos na coleção `listing`
```
db.listing.countDocuments({})
```

2. Ordena a coleção listing pela quantidade de quartos (`bedrooms`) em ordem crescente, mostrando apenas o nome (`name`) e a quantidade de quartos
```
db.listing.find(
  { },
  { name: 1, bedrooms: 1, _id: 0 }
).sort({ bedrooms: 1 })
```

3. Retorne a hospedagem com maior número de quartos (`bedrooms`), mostrando apenas o nome (`name`) e a quantidade de quartos
```
db.listing.find(
  { },
  { name: 1, bedrooms: 1, _id: 0 }
).sort({ bedrooms: -1 }).limit(1)
```

4. Retorne as hospedagens que os preços (`price`) são maiores que `155` e menores que `200`, mostrando apenas o nome (`name`) e o preço, mantendo em ordem decrescente de preço e alfabética de nome
```
db.listing.find(
  { price: { $gt: 155, $lt: 200 } },
  { name: 1, price: 1, _id: 0 },
).sort({ price: 1, name: 1 })
```

5. Retorne o nome, número de reviews (`number_of_reviews`) e as notas dos TODOS os reviews dos 500 primeiros valores que tiverem número de reviews maior que 300 ou nota dos reviews (`review_scores`.`review_scores_rating`) maior ou igual a 95 ordenado por maior quantidade de reviews, maior nota de reviews e ordem alfabética
```
db.listing.find(
  { 
    $or: [
      { number_of_reviews: { $gt: 300 } },
      { "review_scores.review_scores_rating": { $gte: 95 } },
    ], 
  },
  { name: 1, number_of_reviews: 1, review_scores: 1, _id: 0 },
).sort({ number_of_reviews: -1, "review_scores.review_scores_rating": -1, name: 1 }).limit(500)
```

6. Retorne o identificador do host (`host.host_id`), nome (`host.host_name`) e localização (`host.host_location`) de todos os superhost (`host.host_is_superhost`)
```
db.listing.find(
  { "host.host_is_superhost": true },
  { "host.host_id": 1, "host.host_name": 1, "host.host_location": 1, _id: 0 },
).sort({ "host.host_name": 1, "host.host_location": 1 })
```

7. Retorne o nome da acomodação (`name`), o resumo da acomodação (`summary`), seu preço (`price`) e todos as notas de reviews (`review_score`) dos superhosts (`host.host_is_superhost`) com número de reviews (`number_of_reviews`) superior a **500**
```
db.listing.find(
  {
    $and: [
      { "host.host_is_superhost": true },
      { number_of_reviews: { $gte: 500 } }
    ]
  },
  { name: 1, summary: 1, price: 1, review_scores: 1, _id: 0 },
)
```

8. Retorne o nome (`name`), a descrição (`description`), o número de reviews (`number_of_reviews`), as facilidades (`amenities`) e o preço (`price`) das acomodações que aceitam pets (`amenities` deve conter “Pets allowed”) ordenado pelo maior número de reviews, menor preço e em ordem alfabética
```
db.listing.find(
  {
    amenities: {
      $all: ["Pets allowed"]
    }
  },
  { name: 1, description: 1, amenities: 1, number_of_reviews: 1, price: 1, _id: 0 },
).sort({ number_of_reviews: -1, price: 1, name: 1 })
```


9. Retorne o nome (`name`), a descrição (`description`), os nomes e os comentários dos reviews apenas (`reviews.reviewer_name` e `reviews.comments`) e o preço (`price`) de todas as acomodações que tem um review do Filipe (isto é `reviews.reviewer_id` igual a “20775242”)
```
db.listing.find(
  {
    reviews: {
      $elemMatch: {reviewer_id: "20775242" }
    }
  },
  { 
    name: 1,
    description: 1, 
    "reviews.reviewer_name": 1, 
    "reviews.comments": 1, 
    price: 1, 
    _id: 0
  },
)
```

10. Retorne todas as imagens (`images`) e identificador (`_id`) dos documentos que **NÃO** atendem ao padrão de URL
- Padrão da URL: `https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large`
- Expressão regular, caso necessário: `^https:\/\/(a0\.muscache\.com)([\\/\-a-z0-9]*)(.jpg)`
```
db.listing.find(
  {
    $and: [
      { images: { $exists: true } },
      { "images.picture_url": { $not: { $regex: /^https:\/\/(a0\.muscache\.com)([\\/\-a-z0-9]*)(.jpg)/ } } }
    ]
  },
  { images: 1, _id: 1 }
)
``

