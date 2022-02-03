const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "emptyName":
      res.status(404).json({ message: "Name required" });
      break;

    case "emptyEmail":
      res.status(404).json({ message: "Email required" });
      break;

    case "emptyPassword":
      res.status(404).json({ message: "Password required" });
      break;

    case "emptyPhone":
      res.status(404).json({ message: "Phone Number required" });
      break;

    case "emptyCategory":
      res.status(404).json({ message: "Category required" });
      break;

    case "userNotFound":
      res.status(404).json({ message: "User not found" });
      break;

    default:
      res.status(500).json(err.message);
      break;
  }
};

module.exports = errorHandler;
