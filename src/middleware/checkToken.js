export default function checkToken(roles = [], permission = "") {
    return function (req, res, next) {
      try {
        const user = req.user;
  
        if (!user) {
          return res.status(401).json({ message: "Token kerak" });
        }
  
        if (!roles.includes(user.role)) {
          return res.status(403).json({ message: "Ruxsat yo‘q (rol noto‘g‘ri)" });
        }
  
        if (
          !user.permissions?.[permission] &&
          user.role !== "SuperAdmin"
        ) {
          return res.status(403).json({ message: `Ruxsat yo‘q (${permission})` });
        }
  
        next();
      } catch (err) {
        next(err);
      }
    };
  }
  