// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data =
    req.query.name === "Ali"
      ? [
          {
            title: "Artificial Intelligence (AI) and Deep Learning",
            image: "/ai.jpg",
          },
          {
            title: "Cloud-Native Computing Computing",
            image: "/cnc.webp",
          },
          {
            title: "Genomics and Bioinformatics",
            image: "/ai.jpg",
          },
        ]
      : []

  res.status(200).json(data)
}
