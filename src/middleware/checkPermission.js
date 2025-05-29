export default function checkPermission(permissionName) {
    return (req, res, next) => {
      const user = req.user;
  
      if (user.role === 'SuperAdmin') return next(); // bypass
  
      if (!user.permissions || !user.permissions.includes(permissionName)) {
        return res.status(403).json({ message: "Permission yetarli emas" });
      }
  
      next();
    };
  }
  