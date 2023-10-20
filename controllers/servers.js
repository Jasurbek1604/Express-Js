const server = [
  { id: "1", name: "server1", status: "Working" },
  { id: "2", name: "server2", status: "Working" },
  { id: "3", name: "server3", status: "Working" },
  { id: "4", name: "server4", status: "Working" },
  { id: "5", name: "server5", status: "Working" },
  { id: "6", name: "server6", status: "Pending" },
];

export const getAll = (req, res) => {
  res.status(200).json(server);
};

export const create = (req, res) => {
  const newServer = {
    id: Date.now().toString(),
    ...req.body,
  };
  server.push(newServer);
  res.status(201).json(newServer);
};
