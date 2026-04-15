const healthcheck = async (req, res) => {
  res.status(200).json({ message: "all working fine" });
};

export default healthcheck;
