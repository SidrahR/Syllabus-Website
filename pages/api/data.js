export default function handler(req, res) {
  const data = [
    {
      id: 1,
      title: "Web 3.0 (Blockchain) and Metaverse",
      image: "/web3.avif",
      href: "/web3",
    },
    {
      id: 2,
      title: "Artificial Intelligence (AI) and Deep Learning",
      image: "/ai.jpg",
      href: "/ai",
    },
    {
      id: 3,
      title: "Ambient Computing and IoT",
      image: "/iot.jpeg",
      href: "/iot",
    },

    {
      id: 4,
      title: "Network Programmability and Automation",
      image: "/automation.jpg",
      href: "/automation",
    },
    {
      id: 5,
      title: "Cloud-Native Computing",
      image: "/cnc.webp",
      href: "/cloud_native",
    },
    {
      id: 6,
      title: "Genomics and Bioinformatics",
      image: "/bio.jpg",
      href: "/genomics",
    },
  ];

  res.status(200).json(data);
}
